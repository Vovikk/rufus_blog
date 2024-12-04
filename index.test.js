const findAgent = require("./index");

describe("findAgent", () => {
  it("assigns the least recently updated agent to the earliest created queue item", () => {
    const queue = {
      q1: { createdAt: 2, rejectedAccounts: [] },
      q2: { createdAt: 1, rejectedAccounts: [] },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 10, accountId: "agent1" },
      a2: { status: "Available", updatedAt: 5, accountId: "agent2" },
    };

    const result = findAgent(queue, agents);

    expect(result.q2.accountId).toBe("agent2"); // Agent with the least `updatedAt` gets assigned first
    expect(result.q1.accountId).toBe("agent1"); // Next agent gets assigned to the next queue item
  });

  it("handles mixed agent availability", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: [] },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 10, accountId: "agent1" },
      a2: { status: "Busy", updatedAt: 5, accountId: "agent2" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBe("agent1"); // Only the available agent should be assigned
  });

  it("handles queue items without rejectedAccounts property", () => {
    const queue = {
      q1: { createdAt: 1 },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 5, accountId: "agent1" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBe("agent1"); // Agent should still be assigned
  });

  it("handles queue items with no eligible agents", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: ["agent1"] },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 5, accountId: "agent1" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBeUndefined(); // No agent should be assigned if all are rejected
  });

  it("does not assign agents to queue items that already have an accountId", () => {
    const queue = {
      q1: { createdAt: 1, accountId: "agent2", rejectedAccounts: [] },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 5, accountId: "agent1" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBe("agent2"); // Existing accountId should remain unchanged
  });

  it("correctly assigns agents to multiple queue items with overlap in rejection", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: ["agent1"] },
      q2: { createdAt: 2, rejectedAccounts: [] },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 10, accountId: "agent1" },
      a2: { status: "Available", updatedAt: 5, accountId: "agent2" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBe("agent2"); // Agent2 assigned because Agent1 is rejected
    expect(result.q2.accountId).toBe("agent1"); // Agent1 assigned to next item
  });

  it("handles agents becoming unavailable mid-assignment", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: [] },
      q2: { createdAt: 2, rejectedAccounts: [] },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 10, accountId: "agent1" },
      a2: { status: "Available", updatedAt: 5, accountId: "agent2" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBe("agent2"); // Agent2 assigned to the first queue item
    expect(result.q2.accountId).toBe("agent1"); // Agent1 assigned to the second queue item
    expect(agents.a2.status).toBe("Available"); // Ensure original objects aren't mutated
  });

  it("handles agents and queue items with multiple properties", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: ["agent3"], priority: "high" },
      q2: { createdAt: 2, rejectedAccounts: [], priority: "low" },
    };

    const agents = {
      a1: {
        status: "Available",
        updatedAt: 15,
        accountId: "agent1",
        skills: ["A"],
      },
      a2: {
        status: "Available",
        updatedAt: 10,
        accountId: "agent2",
        skills: ["B"],
      },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBe("agent2"); // Assigned to Agent2 as Agent3 is rejected
    expect(result.q2.accountId).toBe("agent1"); // Assigned to Agent1
  });

  it("assigns no agents if the queue item has rejectedByTime set to true", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: [], rejectedByTime: true },
    };

    const agents = {
      a1: { status: "Available", updatedAt: 5, accountId: "agent1" },
    };

    const result = findAgent(queue, agents);

    expect(result.q1.accountId).toBeUndefined(); // No agent assigned
  });

  it("returns the original queue object if no agents are available", () => {
    const queue = {
      q1: { createdAt: 1, rejectedAccounts: [] },
    };

    const agents = {};

    const result = findAgent(queue, agents);

    expect(result).toEqual(queue); // Queue should remain unchanged
  });
});

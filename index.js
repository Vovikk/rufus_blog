function findAgent(queue, agents) {
  // Створюємо новий масив на основі об'єкту agentStatuses (статус агентів);
  // відфільтровуємо агентів за статусом (залишаємо лише тих хто "Available");
  // сортуємо відфільтрований масив за часом очікування (наприклад 11111 довше чекає за 234123423);
  const available = Object.entries(agents)
    .filter(([id, obj]) => obj.status === "Available")
    .sort((a, b) => a[1].updatedAt - b[1].updatedAt);

  // Створюємо новий масив на основі об'єкту queue (черга);
  // відфільтровуємо чергу за полями об'єктів accountId та rejectedByTime,
  // якщо об'єкт не має поля accountId або воно дорівнює undefined робимо перевірку по полю rejectedByTime;
  // сортуємо відфільтрований масив за  за часом очікування (наприклад 11111 довше чекає за 234123423);
  const inSearch = Object.entries(queue)
    .filter(
      ([id, obj]) =>
        obj?.accountId === undefined && obj?.rejectedByTime !== true
    )
    .sort((a, b) => a[1].createdAt - b[1].createdAt);

  // Повертаємо готовий об'єкт на основі об'єднаних об'єкту queue та модифікованого масиву inSearch
  return Object.assign(
    queue,
    Object.fromEntries(
      inSearch.map(([id, obj]) => {
        const queueId = id;
        let agentId;

        // Перевіряємо від старшого до молодшого агенту чи він є в масиві rejectedAccounts
        // якщо агент підходить видаляємо його з масиву доступних агентів і додаємо до елементу черги поле з агентом
        for (agent in available) {
          agentId = available[agent][1].accountId;
          if (obj.rejectedAccounts?.includes(agentId)) {
            continue;
          }
          available.splice(agent, 1);
          return [queueId, { ...obj, accountId: agentId }];
        }
        // Якщо агента не знайдено
        return [queueId, { ...obj }];
      })
    )
  );
}

module.exports = findAgent;

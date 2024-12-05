import Button from "@/components/Button/Button";

const Newsletter = () => {
  return (
    <section className="w-full flex justify-center mb-16">
      <div className="max-w-[1440px] w-full px-5 xl:px-20">
        <div className="w-full bg-purple flex flex-col justify-center items-center px-5 py-12 xl:px-20 xl:py-12 rounded-[2rem] md:rounded-[3.75rem]">
          <div className="max-w-[600px] md:py-10 w-full flex flex-col justify-center items-center">
            <h2 className="font-bold text-white text-center text-[2rem] md:text-[2.5rem] mb-6">
              Stay Tuned of the latest Trends and market insights
            </h2>
            <p className="text-base text-white text-center mb-8">
              If you&apos;re looking for creative inspiration, trend analysis
              and success stories that make a difference in the digital
              marketing industry, subscribe today.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full max-w-[340px] px-6 py-4 rounded-[3.75rem] border border-black"
              />
              <Button variant="white" label="Subscribe now!"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

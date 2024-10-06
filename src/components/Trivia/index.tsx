import { Button } from "../ui/button";
export default function Trivia() {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center mt-8 gap-x-12">
          <div className="left-section">
            <p className="text-black jaro-font tracking-wider text-5xl md:text-8xl">TRIVIA QUIZ <span className="text-white instrumental-sans-font"> GAME </span></p>
            <p className="text-white text-center md:text-right mt-20 leading-10 text-lg">
              {" "}
              Welcome to the Epic Trivia Quiz! <br />
              You have to answer timed trivia questions. Scores will be based{" "}
              <br />
              on your accuracy. Each question will have a fixed time to answer.
            </p>
            <div className="mx-auto flex justify-around mt-16">
              <Button className="bg-[#FF0000] px-8 py-4 hover:bg-yellow-600 ease-in-out transition-transform transform hover:scale-110 active:scale-100 rounded-full text-lg">
                Get Started
              </Button>
              <Button className="bg-[#FF0000] px-8 py-4 hover:bg-yellow-600 ease-in-out transition-transform transform hover:scale-95 active:scale-90 rounded-full text-lg">
                Other Games...
              </Button>
            </div>
          </div>
          <div className="right-section">
            <p className="text-white instrumental-sans-font tracking-wider text-5xl md:text-8xl">Score</p>
          </div>
        </div>
      </>
    );
  }
  
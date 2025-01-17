import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const [startCount, setStartCount] = useState(false);
  const achievementRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each card

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.unobserve(entry.target); // Stop observing once triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }

    return () => {
      if (achievementRef.current) {
        observer.unobserve(achievementRef.current);
      }
    };
  }, []);

  const triggerConfetti = (cardIndex) => {
    if (cardRefs[cardIndex].current) {
      const rect = cardRefs[cardIndex].current.getBoundingClientRect();
      const x = (rect.left + rect.right) / 2 / window.innerWidth;
      const y = (rect.top + rect.bottom) / 2 / window.innerHeight;

      confetti({
        particleCount: 200,
        spread: 100,
        origin: { x, y },
        // startVelocity: 20
        // decay : 1
        // angle: 45
        // drift :-2
        // flat:true,
        // ticks:400,
        shapes: ["circle" ,"square ","star"]
      });
    }
  };

  return (
    <div ref={achievementRef} className="md:w-[60%] w-[90%] mx-auto pb-9">
      <div
        className="grid gap-4 mt-4 
                grid-cols-2 
                lg:grid-cols-3 
                justify-items-center"
      >
        {/* Card Item 1 */}
        <div
          ref={cardRefs[0]}
          className="md:h-[300px] h-[250px] w-[150px] md:w-[200px] rounded-md border border-[#ffffffb2] bg-halfBlack flex-col flex justify-center items-center gap-4"
        >
          <i className="fa-solid fa-thumbs-up text-halfYellow text-5xl md:text-7xl"></i>
          <h1 className="text-center text-appYellow text-2xl md:text-3xl font-bold">
            {startCount ? (
        <CountUp
        start={0}
        end={4.7}
        duration={4}
        decimals={1} // Specify the number of decimal places
        decimal="." // Specify the decimal separator
        suffix="K+"
        onEnd={() => triggerConfetti(0)}
      />
            ) : (
              '0+'
            )}
          </h1>
          <h1 className="text-center text-halfYellow text-[20px] md:text-xl font-[400]">
            Happy <br /> Members
          </h1>
        </div>

        {/* Card Item 2 */}
        <div
          ref={cardRefs[1]}
          className="md:h-[300px] h-[250px] w-[150px] md:w-[200px] rounded-md border border-[#ffffffb2] bg-halfBlack flex-col flex justify-center items-center gap-4"
        >
          <i className="fa-solid fa-people-group text-halfYellow text-5xl md:text-7xl"></i>
          <h1 className="text-center text-appYellow text-2xl md:text-3xl font-bold">
            {startCount ? (
              <CountUp
                start={0}
                end={400}
                duration={3}
                suffix="+"
                onEnd={() => triggerConfetti(1)}
              />
            ) : (
              '0+'
            )}
          </h1>
          <h1 className="text-center text-halfYellow text-[20px] md:text-xl font-[400]">
            Registered <br /> Members
          </h1>
        </div>

        {/* Card Item 3 */}
        <div
          ref={cardRefs[2]}
          className="md:h-[300px] ml-[100%] md:ml-0 h-[250px] w-[150px] md:w-[200px] rounded-md border border-[#ffffffb2] bg-halfBlack flex-col flex justify-center items-center gap-4"
        >
          <i className="fa-solid fa-building text-halfYellow text-5xl md:text-7xl"></i>
          <h1 className="text-center text-appYellow text-2xl md:text-3xl font-bold">
            {startCount ? (
              <CountUp
                start={0}
                end={3}
                duration={4.5}
                onEnd={() => triggerConfetti(2)}
                prefix='0'
              />
            ) : (
              '0'
            )}
          </h1>
          <h1 className="text-center text-halfYellow text-[20px] md:text-xl font-[400]">
            Success <br /> Branches
          </h1>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./thought.css";
import { thoughtsArray } from "../../constant/data";

const Thought = () => {

    // console.log(thoughtsArray.length);

  const [thoughtOfTheDay, setThoughtOfTheDay] = useState("");
  // eslint-disable-next-line
  const [lastGeneratedDate, setLastGeneratedDate] = useState(null);

  // Function to generate a random number between 0 and 9
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  // Function to handle generating a new thought only once per day
  const handleDailyThought = () => {
    const currentDate = new Date().toLocaleDateString();

    // Check if we already have a thought stored and it's for today
    const storedThought = sessionStorage.getItem("thoughtOfTheDay");
    const storedDate = sessionStorage.getItem("lastGeneratedDate");

    // If there's a stored thought and the stored date is today, use that
    if (storedThought && storedDate === currentDate) {
      setThoughtOfTheDay(storedThought);
      setLastGeneratedDate(storedDate);
    } else {
      // If it's a new day or there's no stored thought, generate a new one
      const randomIndex = generateRandomNumber();
      const newThought = thoughtsArray[randomIndex];

      // Store the new thought and date in sessionStorage
      sessionStorage.setItem("thoughtOfTheDay", newThought);
      sessionStorage.setItem("lastGeneratedDate", currentDate);

      setThoughtOfTheDay(newThought);
      setLastGeneratedDate(currentDate);
    }
  };

  // useEffect to call handleDailyThought on component mount
  useEffect(() => {
    handleDailyThought();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="thought-container">
      <div className="thought-wrapper">
        <h1 className="thought-header">Thought of the Day</h1>
        <p className="thought-text">{thoughtOfTheDay}</p>
      </div>
    </div>
  );
};

export default Thought;

import React, { useState } from "react";
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ header, good, neutral, bad, all, average, positive }) => {
  if (all == 0) {
    return <p>No feedback given</p>;
  } else if (all > 0) {
    return (
      <div>
        <h1>{header}</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={all} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const header = "Give Feedback";
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (all ? (good * 100) / all : 0) + "%";
  const handleGood = () => {
    setGood(good + 1);
    console.log("clicked");
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    console.log("clicked");
  };
  const handleBad = () => {
    setBad(bad + 1);
    console.log("clicked");
  };

  return (
    <div>
      <h1>Give Feedback</h1>

      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      <Statistics
        header={header}
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;

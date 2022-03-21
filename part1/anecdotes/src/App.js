import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Anecdote = ({ anecdotes, selected, vote }) => {
  return (
    <>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Anecdote has {vote[selected]} votes</p>
    </>
  );
};
const BestAnecdote = ({ maxVotedQuote, maxVotes }) => {
  return (
    <>
      <h1>Anecdote with the most votes</h1>
      <p>{maxVotedQuote}</p>
      <p>It has {maxVotes} votes</p>
    </>
  );
};
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(7).fill(0));

  const getNextAnecdote = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNum);
  };
  const updateCurrentVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  const maxVotes = Math.max(...vote);
  const maxVotedQuote = anecdotes[vote.indexOf(maxVotes)];
  {
    console.log(maxVotedQuote);
  }
  return (
    <div>
      <Anecdote anecdotes={anecdotes} selected={selected} vote={vote} />
      <Button onClick={updateCurrentVote} text="Vote" />
      <Button onClick={getNextAnecdote} text="Next Anecdote" />
      <BestAnecdote maxVotedQuote={maxVotedQuote} maxVotes={maxVotes} />
    </div>
  );
};

export default App;

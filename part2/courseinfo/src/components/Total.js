const Total = ({ parts }) => {
  let sum = 0;
  const numArray = parts.map((val) => (sum += val.exercises));
  return (
    <h5>
      Total number of exercises{" "}
      {parts.reduce((acc, val) => acc + val.exercises, 0)}
    </h5>
  );
};
export default Total;

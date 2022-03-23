import Part from "./Part";
const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((val) => (
        <Part key={val.id} partName={val.name} partNum={val.exercises} />
      ))}
    </ul>
  );
};
export default Content;

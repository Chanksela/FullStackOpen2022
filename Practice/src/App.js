const Footer = () => {
  return (
    <div>
      greeting app created by{" "}
      <a href="https://github.com/chanksela">Chanksela</a>
    </div>
  );
};
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={"Maya"} age={10 + 26} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

export default App;

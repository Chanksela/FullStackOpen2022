import { useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const matchName = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    {
      matchName.length > 0
        ? alert(`${newName}${newNumber} is already added to phonebook`)
        : setPersons(persons.concat(newPerson));
    }

    setNewName("");
    setNewNumber("");
  };
  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  const filteredArray = persons.filter((val) =>
    val.name.toLowerCase().includes(searchInput)
  );
  console.log(filteredArray);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchInput={handleSearchInput} searchInput={searchInput} />
      <h1>Add New</h1>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
      />
      <h2>Numbers</h2>
      <Persons filteredArray={filteredArray} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    personsService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);
  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const matchName = persons.filter(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    {
      matchName.length > 0
        ? alert(`${newName}${newNumber} is already added to phonebook`)
        : personsService
            .addPerson(newPerson)
            .then((addedPerson) => setPersons(persons.concat(addedPerson)));
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
  };
  const handleDelete = (id) => {
    const personName = persons.find((person) => person.id === id);
    const result = window.confirm(`Delete ${personName.name}?`);
    result &&
      personsService
        .removePerson(id)
        .then(setPersons(persons.filter((person) => person.id !== id)));
  };
  const filteredArray = persons.filter((val) =>
    val.name.toLowerCase().includes(searchInput)
  );

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
      <Persons filteredArray={filteredArray} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

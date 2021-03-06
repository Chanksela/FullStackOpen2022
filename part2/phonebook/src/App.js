import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import Notification from "./components/Notification";
import Error from "./components/Error";
import personsService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    personsService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);
  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    const matchName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    const changedNum = { ...newPerson, number: newNumber };
    const id = matchName?.id;

    console.log(matchName);
    console.log(newNumber.toString());
    if (matchName && newNumber.length > 0) {
      const result = window.confirm(
        `${newName} already has a number, do you want to update it?`
      );
      if (result) {
        personsService
          .updateInfo(id, changedNum)
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            )
          )
          .catch(
            () => setMessage(null),
            setErrorMessage(
              `Information about ${newName} already been deleted`
            ),
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000)
          );
        setMessage(`Added ${newNumber}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    } else if (matchName) {
      alert(`${newName} already exists`);
    } else if (!matchName) {
      personsService
        .addPerson(newPerson)
        .then((addedPerson) => setPersons(persons.concat(addedPerson)));
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
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
      <Error message={errorMessage} />
      <Notification message={message} />
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

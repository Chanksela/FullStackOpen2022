import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "./components/SearchBar";
import { List } from "./components/List";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <SearchBar searchInput={searchInput} handleSearch={handleSearch} />
      <List filteredCountries={filteredCountries} searchInput={searchInput} />
    </div>
  );
}

export default App;

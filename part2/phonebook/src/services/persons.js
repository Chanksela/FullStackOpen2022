import axios from "axios";
const baseURL = "http://localhost:3001/persons";
const getAll = () => axios.get(baseURL);
const addPerson = (newPerson) => axios.post(baseURL, newPerson);
export default { getAll, addPerson };

import axios from "axios";
const baseURL = "/api/persons";
const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((res) => res.data);
};
const addPerson = (newPerson) => {
  const request = axios.post(baseURL, newPerson);
  return request.then((res) => res.data);
};
const removePerson = (id) => {
  const request = axios.delete(`${baseURL}/${id}`);
  return request.then((res) => res.data);
};
const updateInfo = (id, newPerson) => {
  const request = axios.put(`${baseURL}/${id}`, newPerson);
  return request.then((res) => res.data);
};
export default { getAll, addPerson, removePerson, updateInfo };

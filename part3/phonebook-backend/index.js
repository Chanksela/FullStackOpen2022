const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
morgan.token("body", (req) => JSON.stringify(req.body));
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(express.json());
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
app.get("/", (req, res) => {
  res.send("<h1>Hello World of Phonebook</h1>");
});
app.get("/info", (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`);
});
app.get("/api/persons", (req, res) => {
  res.json(persons);
});
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  person
    ? res.json(person)
    : res.status(404).send("<h1>Person Not Found Error 404</h1>").end();
});
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

const generateID = () => {
  return Math.floor(Math.random() * 10);
};

app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name && !body.number)
    return res.status(400).json({ error: "name and number missing" });
  if (!body.name) return res.status(400).json({ error: "name missing" });
  if (!body.number) return res.status(400).json({ error: "number missing" });

  const person = { id: generateID(), name: body.name, number: body.number };
  const matchingName = persons.find(
    (person) => person.name.toLowerCase() === body.name.toLowerCase()
  );
  if (matchingName) {
    return res.status(409).json({ error: "name already exists" });
  }
  persons = persons.concat(person);
  res.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

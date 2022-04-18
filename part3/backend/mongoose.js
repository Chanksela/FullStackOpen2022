const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("Please enter the password");
  process.exit(1);
}
const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@list.0j0kh.mongodb.net/PhonbookDB?retryWrites=true&w=majority`;

mongoose.connect(url);
const personSchema = new mongoose.Schema({ person: String, number: String });

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  person: process.argv[3],
  number: process.argv[4],
});
if (process.argv.length < 4) {
  Person.find({}).then((result) => {
    result.forEach((persons) => {
      console.log(persons.person, persons.number);
      mongoose.connection.close();
    });
  });
} else if (process.argv.length > 2) {
  person.save().then((result) => {
    console.log(`added ${process.argv[3]} ${process.argv[4]} saved`);
    mongoose.connection.close();
  });
}

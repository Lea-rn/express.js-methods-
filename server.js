const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("page home");
});

/////// keep eye on order ...

// app.get("/about/contactus", (req, res) => {
//   res.send("page about");
// });

// app.get("/about/:name", (req, res) => {
//   res.send(req.params.name);
// });

///// params
// app.get("/profil/:name/:id", (req, res) => {
//   res.send(req.params.name + " " + req.params.id);
// });

///// query && params:::

// app.get("/about/:name", (req, res) => {
//   res.send(req.params.name + " " + req.query.id);
// });

const Students = [
  { id: 0, firstName: "imene", speciality: "Programmer" },
  { id: 1, firstName: "mouna", speciality: "Designer" },
  { id: 2, firstName: "houssem", speciality: "SEO" },
];

app.get("/students", (req, res) => {
  res.send(Students);
});

app.get("/students/:id", (req, res) => {
  let newId = req.params.id;
  let theStudent = Students.find((ele) => ele.id == newId); ////// undefined
  if (theStudent) {
    res.send(theStudent);
  } else {
    res.send("we don't have this student");
  }
});

app.get("/students/delete/:id", (req, res) => {
  let Student = Students.find((ele) => ele.id == req.params.id);
  let postion = Students.indexOf(Student);
  Students.splice(postion, 1);
  res.send(Students);
});

app.listen(4000, () => console.log("server run on port 4000"));

/////// `localhost4000/about${params}?${query}`

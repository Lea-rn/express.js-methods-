const express = require("express");

const router = express.Router();

const Students = [
  { id: 0, firstName: "imene", speciality: "Programmer" },
  { id: 1, firstName: "mouna", speciality: "Designer" },
  { id: 2, firstName: "houssem", speciality: "SEO" },
];

router.get("/", (req, res) => {
  res.send(Students);
});

router.get("/:id", (req, res) => {
  let newId = req.params.id;
  let theStudent = Students.find((ele) => ele.id == newId); ////// undefined
  if (theStudent) {
    res.send(theStudent);
  } else {
    res.send("we don't have this student");
  }
});

router.delete("/delete/:id", (req, res) => {
  let Student = Students.find((ele) => ele.id == req.params.id);
  let postion = Students.indexOf(Student);
  Students.splice(postion, 1);
  res.send(Students);
});

router.post("/addStudent", (req, res) => {
  let newStudent = {
    id: req.body.id,
    firstName: req.body.firstName,
    speciality: req.body.speciality,
  };
  Students.push(newStudent);
  res.send(Students);
});

router.put("/update/:id", (req, res) => {
  let studentToUpdate = Students.find((ele) => ele.id == req.params.id);
  studentToUpdate.firstName = req.body.firstName;
  studentToUpdate.speciality = req.body.speciality;
  res.send(Students);
});

module.exports = router;

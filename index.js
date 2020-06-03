var inquirer = require("inquirer");
var fs = require('fs');
var markdown = require('./markdown')

inquirer.prompt([
  {
    type: "input",
    name: "badge",
    message: "Badge"
  },
  {
    type: "input",
    name: "title",
    message: "Project Tittle"
  },
  {
    type: "input",
    name: "description",
    message: "Project Description"
  },
  {
    type: "input",
    name: "contents",
    message: "Table of Contents"
  },
  {
    type: "input",
    name: "installation",
    message: "Installation"
  },
  {
    type: "input",
    name: "usage",
    message: "Usage"
  },
  {
    type: "input",
    name: "license",
    message: "License"
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing"
  },
  {
    type: "input",
    name: "tests",
    message: "Tests"
  },
  {
    type: "input",
    name: "questions",
    message: "Questions"
  }
]).then(function(data) {

    var filename = "Output_Readme"+".md";
    console.log("Data: "+JSON.stringify(data, null, '\t'));
 
    var readme = markdown(data);
    console.log("Readme: "+readme);

    fs.writeFile(filename, readme, function(err) {

        if (err) {
        return console.log(err);
        }

        console.log("Success!");

    });
});

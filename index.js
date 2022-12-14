// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeamPage = require("./src/template.js");


// lib modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const newMemberData = [];

//User Questions
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])


      //manager questions
      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number?",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newMemberData.push(newManager);
          
        //engineer questions
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub username?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newMemberData.push(newEngineer);
          
        //intern questions
      } else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "What school did you/are you attending?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newMemberData.push(newIntern);          
      } 

};
//function to either add a member or create the teamm
async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();
//use fs to write file in dist folder
function createTeam () {
  console.log("new member!", newMemberData)
  fs.writeFileSync(
    "./dist/index.html",
    generateTeamPage(newMemberData),
    "utf-8"
  );
}
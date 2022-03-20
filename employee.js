const inquirer = require("inquirer");
const mysql =("mysql")

// beginning of questions
inquirer
.prompt({
    type:"list",
    message:"What would you like to do?",
    name:"Options",
    choices:["add","view","remove"]
})
.then(function(answer){
    console.log(answer);
    if (answer.Options === "add"){
        inquirer
        .prompt({
            type:"list",
            message:"What would you like to add?",
            name:"Add",
            choices:["department","role","employee"]
        })
        .then(function(answer){
            console.log(answer);
            // adding department 
            if (answer.Add === "department") {
               inquirer
               .prompt({
                   type:"input",
                   message:"What is the name of the department you want to add?",
                   name:"Depname"
               })
               .then(function(answer){
                   console.log(answer);
               })
            }
            // adding role
            else if (answer.Add === "role"){
                inquirer
                .prompt([{
                    type:"input",
                    message:"What is the title of the role you want to add?",
                    name:"rolname"
                },{
                    type:"input",
                    message:"What is the salary for this position",
                    name:"amount"
                },{
                    type:"input",
                    message:"What department does this role work in?",
                    name:"DepID"
                }])
                .then(function(answer){
                    console.log(answer);
                });
            }
            
            // adding employee
            else if (answer.Add === "employee") {
                inquirer
                  .prompt([
                      {
                    type: "input",
                    message: "What is the first name of the employee you want to add?",
                    name: "first"
                  },
                      {
                    type: "input",
                    message: "What is the last name of the employee you want to add?",
                    name: "last"
                  },
                      {
                    type: "input",
                    message: "What role does this employee have?",
                    name: "Emrole"
                  },
                      {
                    type: "input",
                    message: "Who is the manager of this employee?",
                    name: "Emboss"
                  }
                ])
                .then(function(answer){
                    console.log(answer);
                })
            }

        })    
    } else if (answer.Options === "view") {
        inquirer
        .prompt({
          type: "list",
          message: "What do you want to VIEW?",
          name: "View",
          choices: ["department", "role", "employee"]
        });
        
    }

   
})
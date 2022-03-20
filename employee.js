const inquirer = require("inquirer");
const mysql =("mysql2");

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

        })    //Viewing stuff// 
    } else if (answer.Options === "view") {
        inquirer
        .prompt({
          type: "list",
          message: "What do you want to VIEW?",
          name: "View",
          choices: ["department", "role", "employee"]
        })
        .then(function(answer){
            console.log(answer);
            // viewing departments
            if (answer.View === "department") {
                connection.query(
                    "SELECT * FROM department",
                    {name: answer.View},
                    function(error,result,fields) {
                        if (error) throw error;
                        console.log(result);
                    }
                );
            }
            //view roles
             else if (answer.View === "role") {
                connection.query(
                    "SELECT * FROM role",
                    {name: answer.View},
                    function(error,result,fields) {
                        if (error) throw error;
                        console.log(result);
                    }
                );
            }
            // view employee
            else if (answer.View === "employee") {
                connection.query(
                    "SELECT * FROM employee",
                    {name: answer.View},
                    function(error,result,fields) {
                        if (error) throw error;
                        console.log(result);
                    }
                );
            }
        });
        /// Removing  stuff start 
 } else if (answer.Options === "remove"){
     inquirer
     .prompt({
         type:"list",
         message:"Where do you want to remove from?",
         name:"Remove",
         choices:["department","role","employee"]
     })
     .then(function(answer){
         console.log(answer);
         // remove department 
         if (answer.Remove === "department") {
             inquirer
             .prompt({
                 type:"input",
                 message:"What is the name of the department you would like to remove?",
                 name:"removeDep"
             })
             .then(function(answer){
                 console.log(answer);
                 connection.connect();

                 connection.query(
                     "DELETE FROM department WHERE ?",
                     {name:answer.removeDep},
                     function(error,results,field) {
                         if (error) throw error;
                         console.log(results);
                     }
                 );
             });
         }
      //// remove role start
     else if (answer.Remove === "role") {
        inquirer
        .prompt({
            type:"input",
            message:"What is the name of the role you would like to remove?",
            name:"removeRole"
        })
        .then(function(answer){
            console.log(answer);
            connection.connect();

            connection.query(
                "DELETE FROM role WHERE ?",
                {name:answer.removeRole},
                function(error,results,field) {
                    if (error) throw error;
                    console.log(results);
                }
            );
        });
    }
    /// remove employeee 
     else if (answer.Remove === "employee") {
        inquirer
        .prompt({
            type:"input",
            message:"What is the name of the employee you would like to remove?",
            name:"removeEmploy"
        })
        .then(function(answer){
            console.log(answer);
            connection.connect();

            connection.query(
                "DELETE FROM department WHERE ?",
                {name:answer.removeEmploy},
                function(error,results,field) {
                    if (error) throw error;
                    console.log(results);
                }
            );
        });
    }

     });
 
    } 
});
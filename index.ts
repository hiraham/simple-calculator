#! /usr/bin/env node

import inquirer from 'inquirer';

const answers = await inquirer.prompt([
    {massage:"enter first number",type: "number", name:"firstnumber"},
    {massage:"enter second number",type: "number", name:"secondnumber"},
    {massage:"Select one of the operators to perform operation",
        type:"list",
        name:"operator",
        choices:["addition","subtraction","division","multiplication"],
    }
])
// condition statement

if (answers.operator === "addition"){
    console.log( answers.firstnumber + answers.secondnumber);
}else if (answers.operator === "subtraction"){
    console.log( answers.firstnumber - answers.secondnumber);
}else if (answers.operator === "division"){
    console.log( answers.firstnumber / answers.secondnumber);
}else if (answers.operator === "multiplication"){
    console.log(answers.firstnumber * answers.secondnumber);
}else{
    console.log("please select a valid operator")
}


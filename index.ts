#! /usr/bin/env node
import inquirer from "inquirer";


let Conversion = {
    "PKR": {
    "USD": 0.0035965731,
    "GBP": 0.0028477497,
    "PKR": 1
    },
    "GBP": {
    "USD": 1.2628732,
    "PKR": 351.15446,
    "GBP": 1
    },
    "USD": {
    "PKR": 278.07024,
    "GBP": 0.79198747,
    "USD": 1
    },
    }
    
    const answer: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
    } = await inquirer.prompt([
    {
    type: "list",
    name: "from",
    choices: ["PKR", "USD", "GBP",],
    message: "Select your currency:"
    },
    {
    type: "list",
    name: "to",
    choices: ["PKR", "USD", "GBP",],
    message: "Select your conversion currency:"
    },
    {
    type: "number",
    name: "amount",
    message: "Enter your conversion amount:"
    }
    ]);
    
    const {from, to, amount} = answer;
    
    if(from && to && amount) {
    let result = Conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`)
    } else {
    console.log("Invalid inputs")
    }
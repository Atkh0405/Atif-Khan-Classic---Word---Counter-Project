#! /usr/bin/env node
// iImporting inquirer nd chalk packages
// import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";

// Display a coluorful wellcome massege
console.log(chalk.bold.cyanBright("\n \t\t Atif Ullah Khan - Classic Work Counter"));
console.log("=" .repeat(60));


// Declare a constant 'answer' and assign is to the result of inquirer.prompt function
 
const answers:{
    Sentence: string
} = await inquirer.prompt([
    {
    name: "Sentence",
    type: "input",
    message: "Enter your Sentence to count the word",
    }
])
const words  =  answers.Sentence.trim().split(" ");

// print the arry of words to the console
console.log(words)
const myName = "    Atif Ullah Khan     "
// print the word count of sentence to the console
console.log("=".repeat(60));
console.log(chalk.bold("- Sentece Words:"));
console.log(words);
console.log(chalk.bold(`\n -Word Count: ${chalk.bold.redBright(words.length)}`));
console.log(`Your sentence word count is ${words.length}`);
console.log("=".repeat(60));

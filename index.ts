#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'

async function welcome() {
  let rainbow = chalkAnimation.rainbow('Welcome to Shoaib Calculator')
  await sleep()
  rainbow.stop()
}
const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000)
  })
}
await welcome()
async function askQuestion() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'operator',
      message: 'Which operation you want to perform \n',
      choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
    {
      type: 'number',
      name: 'num1',
      message: 'Enter First Number ',
    },
    {
      type: 'number',
      name: 'num2',
      message: 'Enter Second  Number ',
    },
  ])

  if (answer.operator == 'Addition') {
    console.log(
      chalk.green(
        `${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`,
      ),
    )
  } else if (answer.operator == 'Subtraction') {
    console.log(
      chalk.green(
        `${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`,
      ),
    )
  } else if (answer.operator == 'Multiplication') {
    console.log(
      chalk.green(
        `${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`,
      ),
    )
  } else if (answer.operator == 'Division') {
    console.log(
      `${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`,
    )
  }
}

async function startAgain() {
  do {
    await askQuestion()
    var again = await inquirer.prompt({
      type: 'input',
      name: 'restart',
      message: 'Do you want to continue ? Press Y or N :',
    })
  } while (
    again.restart == 'y' ||
    again.restart == 'Y' ||
    again.restart == 'yes' ||
    again.restart == 'Yes'
  )
}
startAgain()

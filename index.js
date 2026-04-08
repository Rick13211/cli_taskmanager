#!/usr/bin/env node

import fs from 'node:fs'
import getTasks from './utils/getTasks.js';
import saveTasks from './utils/saveTaks.js';
import pc from 'picocolors'





const FILE_PATH = './tasks.json'
console.log("CLI Task Manager is running!!")

const argument = process.argv.slice(2)

const command = argument[0]



if(command == 'add'){
    const taskText = argument.slice(1).join(' ')
    const tasks = getTasks(FILE_PATH)
    const newId = tasks.length>0?tasks[tasks.length-1].id+1:1
    tasks.push({id:newId, text:taskText, completed:false, createdAt:new Date().toISOString()})
    saveTasks(tasks)
    console.log(`${pc.green('Task added successfully!')} ${taskText}`)
}
if (command == 'list') {
    const tasks = getTasks(FILE_PATH);
    if (tasks.length === 0) {
        console.log(pc.yellow("Your list is empty! Add a task with 'add'."));
    } else {
        tasks.forEach(task => {
            const status = task.completed ? pc.green('✔ Done') : pc.yellow('⏳ Pending');
            const id = pc.gray(`[${String(task.id)}]`); 
            console.log(`${id} ${status.padEnd(20)} | ${task.text} | ${pc.gray(task.createdAt)}`);
        });
    }
}

if(command == 'delete'||command == 'del'){

 const idToDelete = parseInt(argument[1])

 const tasks = getTasks(FILE_PATH)

 const filteredTasks = tasks.filter(task => task.id!=idToDelete)
 if(filteredTasks.length === tasks.length){
    console.log(`Task with ID ${idToDelete} ${pc.red('not found')}`)
 }else{
    saveTasks(filteredTasks)
    console.log(`Task with ID ${idToDelete} ${pc.green('deleted successfully')}`)
 }
 
}

if(command == 'complete'){
    const taskID = argument[1]
    const tasks = getTasks(FILE_PATH)
    const task = tasks.find(task=>(task.id) === parseInt(taskID))
    if(!task){
        console.log(`Task with ID ${taskID} ${pc.red('not found')}`)
    }else{
        task.completed = true
        saveTasks(tasks)
        console.log(`${task.text} ${pc.green('completed!!')}`)
    }
}

if(command == 'help'){
    const commands = JSON.parse(fs.readFileSync('./commands.json'))
    commands.forEach(command => {
        console.log(`${pc.green(command.command)} | ${pc.yellow(command.description)} | ${pc.yellow(command.usage)}`)
    });
}

if(command == 'clear-all'){
    const tasks = getTasks(FILE_PATH)
    if(tasks.length === 0){
        console.log(`${pc.red('No tasks to clear')}`)
    }else{
        saveTasks([])
        console.log(pc.green("All tasks cleared successfully"))
    }
}
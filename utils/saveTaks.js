import fs from 'node:fs'

const FILE_PATH = './tasks.json'

const saveTasks = (tasks) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
};

export default saveTasks
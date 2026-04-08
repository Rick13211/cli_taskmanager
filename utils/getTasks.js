import fs from 'node:fs'


const getTasks = (FILE_PATH)=>{
    if(!fs.existsSync(FILE_PATH)){
        return []
    }
    const data = fs.readFileSync(FILE_PATH, 'utf-8')
    return JSON.parse(data)
}

export default getTasks
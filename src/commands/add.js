import { colors } from "../utils.js";
import { insertDB } from "../db.js";

export const add = async (task) => {
    if (!task) {
        console.log(`${colors.red}Please provide a task!${colors.reset}`);
        return;
    }
    const data = {
        id: Date.now(),
        description: task,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatesAt: null
    };

    await insertDB(data);
    console.log(`${colors.green}Task added: ${task}${colors.reset}`);
}
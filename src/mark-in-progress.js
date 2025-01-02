import { colors } from "./utils.js";
import { getDB, saveDB } from "./db.js";

export const markInProgress = async (id) => {
    if (!id) {
        console.log(`${colors.red}Please provide an id!${colors.reset}`);
        return;
    }
    if (+id < 0 || isNaN(id)) {
        console.log(`${colors.red}Please provide a valid id!${colors.reset}`);
        return;
    }
    const { tasks } = await getDB();
    const match = tasks.filter((task) => task.id === +id);
    if (match.length === 0) {
        console.log(`${colors.red}Task not found!${colors.reset}`);
        return;
    }
    const newTasks = tasks.map((task) => {
        if (task.id === +id) {
            task.status = 'in-progress';
        }
        return task;
    });
    await saveDB({ tasks: newTasks });
    console.log(`${colors.green}Task marked as in-progress!${colors.reset}`);
}
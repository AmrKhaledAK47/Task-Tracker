import { colors } from "../utils.js";
import { getDB, saveDB } from "../db.js";

export const update = async (id, updatedTask) => {
    if (!id || !updatedTask) {
        console.log(`${colors.red}Please provide an id and a updated task!${colors.reset}`);
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
    const updatedTasks = tasks.map((task) => {
        if (task.id === +id) {
            task.description = updatedTask;
            task.updatesAt = new Date().toISOString();
        }
        return task;
    });
    await saveDB({ tasks: updatedTasks });
    console.log(`${colors.green}Task updated: ${updatedTask}${colors.reset}`);
}
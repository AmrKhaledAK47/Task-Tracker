import { colors, listAllTasks, listFilteredTasks} from "./utils.js";
import { getDB} from "./db.js";

export const list = async (cmd) => {
    if(cmd !== 'todo' && cmd !== 'done' && cmd !== 'in-progress' && cmd !== undefined) {
        console.log(`${colors.red}Please provide a valid command!${colors.reset}`);
        return;
    }
    const { tasks } = await getDB();
    switch(cmd) {
        case 'todo':
            const todoTasks = tasks.filter((task) => task.status === 'todo');
            console.log(`${colors.blue}Todo Tasks:${colors.reset}`);
            listFilteredTasks(todoTasks);
            break;
        case 'in-progress':
            const inProgressTasks = tasks.filter((task) => task.status === 'in-progress');
            console.log(`${colors.blue}In-Progress Tasks:${colors.reset}`);
            listFilteredTasks(inProgressTasks);
            break;
        case 'done':
            const doneTasks = tasks.filter((task) => task.status === 'done');
            console.log(`${colors.blue}Done Tasks:${colors.reset}`);
            listFilteredTasks(doneTasks);
            break;
        default:
            console.log(`${colors.blue}All Tasks:${colors.reset}`);
            listAllTasks(tasks);
    }
}
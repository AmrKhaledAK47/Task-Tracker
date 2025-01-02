import fs from 'fs/promises';

export const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
};

export const createJsonFile = async (fileName, data) => {
    return await fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

export const isJsonExists = async (path) => {
    try {
        await fs.access(`${path}db.json`);
        return true;
    } catch {
        return false;
    }
}

export const showHelp = () => {
    console.log(`
        task-cli add <task> - Add a task
        task-cli list - List all tasks
        task-cli list done - List all done tasks
        task-cli list todo - List all todo tasks
        task-cli list in-progress - List all in-progress tasks
        task-cli mark-done <id> - Mark a task as done
        task-cli mark-in-progress <id> - Mark a task as in progress
        task-cli delete <id> - Delete a task
        task-cli update <id> <task> - Update a task
        task-cli help - Show help
        task-cli version - Show version
        task-cli - Show help
    `);
};

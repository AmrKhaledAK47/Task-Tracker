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
import fs from 'node:fs/promises';

const DB_PATH = new URL('.././db.json', import.meta.url);

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH);
    return await JSON.parse(db);
}

export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
}

export const insertDB = async (data) => {
    const db = await getDB();
    db.tasks.push(data);
    await saveDB(db);
    return data;
}
import { colors, createJsonFile, isJsonExists } from './utils.js';

if (!await isJsonExists('./')) {
    console.log(`${colors.red}db.json file not found!${colors.reset}`);
    createJsonFile('db.json', { tasks: [] });
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'add':
        import('./add.js').then(({ add }) => add(args[1]));
        break;
    case 'list':
        import('./list.js').then(({ list }) => list(args[1]));
        break;
    case 'mark-done':
        import('./mark-done.js').then(({ markDone }) => markDone(args[1]));
        break;
    case 'mark-in-progress':
        import('./mark-in-progress.js').then(({ markInProgress }) => markInProgress(args[1]));
    case 'delete':
        import('./remove.js').then(({ remove }) => remove(args[1]));
        break;
    case 'update':
        import('./update.js').then(({ update }) => update(args[1], args[2]));
        break;
    case undefined:
        console.log(`${colors.red}Please provide a command!${colors.reset}`);
        break;
    default:
        console.log(`${colors.red}Invalid command!${colors.reset}`);
        break;
}

import { colors, createJsonFile, isJsonExists, showHelp } from './utils.js';

if (!await isJsonExists('./')) {
    console.log(`${colors.red}db.json file not found!${colors.reset}`);
    createJsonFile('db.json', { tasks: [] });
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'add':
        import('./commands/add.js').then(({ add }) => add(args[1]));
        break;
    case 'list':
        import('./commands/list.js').then(({ list }) => list(args[1]));
        break;
    case 'mark-done':
        import('./commands/mark-done.js').then(({ markDone }) => markDone(args[1]));
        break;
    case 'mark-in-progress':
        import('./commands/mark-in-progress.js').then(({ markInProgress }) => markInProgress(args[1]));
        break;
    case 'delete':
        import('./commands/remove.js').then(({ remove }) => remove(args[1]));
        break;
    case 'update':
        import('./commands/update.js').then(({ update }) => update(args[1], args[2]));
        break;
    case 'help':
        showHelp();
        break;
    case 'version':
        console.log('1.0.0');
        break;
    case undefined:
        showHelp();
        break;
    default:
        console.log(`${colors.red}task-cli: '${args[0]}' is not a valid command. See 'task-cli help'.${colors.reset}`);
        break;
}

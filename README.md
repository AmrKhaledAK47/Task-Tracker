# Task Tracker CLI

Task Tracker CLI is a command-line interface (CLI) tool for managing tasks. It allows you to add, list, update, and delete tasks, as well as mark them as done or in-progress.

## Table of Contents

- [Project Details](#project-details)
- [Installation](#installation)
- [Usage](#usage)
  - [Add a Task](#add-a-task)
  - [List All Tasks](#list-all-tasks)
  - [List Tasks by Status](#list-tasks-by-status)
  - [Mark a Task as Done](#mark-a-task-as-done)
  - [Mark a Task as In-Progress](#mark-a-task-as-in-progress)
  - [Delete a Task](#delete-a-task)
  - [Update a Task](#update-a-task)
  - [Show Help](#show-help)
  - [Show Version](#show-version)
- [Contributing](#contributing)
- [License](#license)

## Project Details

The Task Tracker CLI is designed to help you manage your tasks efficiently from the command line. It supports various commands to add, list, update, and delete tasks, making it a versatile tool for task management. For more details, visit the [Task Tracker project page](https://roadmap.sh/projects/task-tracker).

## Installation

To install the Task Tracker CLI, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AmrKhaledAK47/Task-Tracker.git
   cd Task-Tracker
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To use the Task Tracker CLI, run the following commands:

### Add a Task

```bash
node src/command.js add "Your task description"
```

### List All Tasks

```bash
node src/command.js list
```

### List Tasks by Status

```bash
node src/command.js list todo
node src/command.js list done
node src/command.js list in-progress
```

### Mark a Task as Done

```bash
node src/command.js mark-done <task-id>
```

### Mark a Task as In-Progress

```bash
node src/command.js mark-in-progress <task-id>
```

### Delete a Task

```bash
node src/command.js delete <task-id>
```

### Update a Task

```bash
node src/command.js update <task-id> "Updated task description"
```

### Show Help

```bash
node src/command.js help
```

### Show Version

```bash
node src/command.js version
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License.

## NPM Package

You can find the npm package [here](https://www.npmjs.com/package/task-tracker-cli-app).

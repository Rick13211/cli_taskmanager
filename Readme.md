# 📝 Task Manager CLI

A simple, fast, and colorful Command Line Interface for managing your daily tasks. Built with Node.js.

## 🚀 Features
- **Add Tasks:** Quickly add new things to your list.
- **List Tasks:** View all your tasks with color-coded status.
- **Complete Tasks:** Mark tasks as done using their unique ID.
- **Delete Tasks:** Remove tasks from your list.
- **Persistence:** All tasks are saved to a local `tasks.json` file.
- **Help:** Built-in command list for quick reference.

## 📦 Installation

Install globally via npm:

```bash
npm install -g task-mgr
```

## 🛠️ Usage

### Add a Task
```bash
task-mgr add "Buy Milk"
```

### List All Tasks
```bash
task-mgr list
```

### Complete a Task
```bash
task-mgr complete 1
```

### Delete a Task
```bash
task-mgr delete 1
```

### Clear All Tasks
```bash
task-mgr clear-all
```

### Help
```bash
task-mgr help
```

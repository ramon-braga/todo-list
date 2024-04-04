# Todo List Application

This is a simple todo list application built using React, result of my first steps learning it.

## Usage

- Enter a task in the input field.
- Click on the "Add" button to add the task to the list.
- Tasks will be displayed in a list format with a checkbox and a delete button.
- Click on the checkbox to mark a task as complete.
- Click on the "Delete" button to remove a task from the list.

## Code Overview

- `use client`: This line imports the client module.
- `import { todoList } from "@/types/todoList";`: Importing the `todoList` type from the todoList module.
- `import { useState } from "react";`: Importing the `useState` hook from React.
- `function Page()`: Defining the main component `Page`.
- `const [ inputValue, setInputValue ] = useState('');`: Initializing state for the input value.
- `const [ list, setList ] = useState<todoList[]>([]);`: Initializing state for the todo list.
- `function handleAddButton()`: Function to handle adding a new task to the list.
- `function handleDeleteButton(index: number)`: Function to handle deleting a task from the list.
- `function toggleCheckBox(index: number)`: Function to toggle the checkbox of a task.
- The return statement contains the JSX code for rendering the todo list UI.

## Component Structure

- The `Page` component is the main component that renders the todo list.
- It consists of an input field to add new tasks, a list of tasks with checkboxes, and delete buttons for each task.

## Dependencies

- This application uses React for building the user interface.

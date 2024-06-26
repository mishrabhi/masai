# Task Management App

This Task Management App allows users to create, view, edit, and delete tasks. The tasks have a title, description, status, and due date. This app uses a JSON server for the backend to manage the tasks.

## Features

- Add new tasks with title, description, status, and due date.
- Display a list of tasks.
- Edit existing tasks.
- Delete tasks.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON Server

## Steps to set up json-server on your local machine to store data

- Install Node.js on your machine.
- Run these commands:

```
npm init -y
```

- Install JSON Server

```
npm install -g json-server
```

- Start JSON Server

```
json-server --watch db.json --port 3000
```

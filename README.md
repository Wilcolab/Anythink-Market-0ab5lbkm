# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

## Node.js Express Server

This repository now includes a simple Node.js Express server under the `node-server` directory that implements the same `/tasks` routes (in-memory store).

1. Install dependencies

```bash
cd node-server
npm install
```

2. Run the Node.js server

The Express server listens on port `3000` by default. Start it in the foreground with:

```bash
npm run start:express
```

Or run it in the background and capture logs:

```bash
nohup npm run start:express > node-server.log 2>&1 &
```

3. Test the endpoints

- GET /tasks (should return an array):

```bash
curl http://localhost:3000/tasks
```

- POST /tasks (add a task):

```bash
curl -X POST http://localhost:3000/tasks \
  -H 'Content-Type: application/json' \
  -d '{"title":"Buy milk"}'
```

The POST returns the created task JSON, and subsequent GET /tasks will include the new task. Note: tasks are stored in memory and will be lost when the server restarts.

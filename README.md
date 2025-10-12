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

  # Anythink-Market

  This repository contains two implementations of a simple tasks API (two endpoints: `GET /tasks` and `POST /tasks`):

  - A Python FastAPI implementation (in `python-server`).
  - A migrated Node.js Express implementation (in `node-server`). The Node server is a migration of the Python FastAPI `/tasks` routes.

  Both implementations use an in-memory task list for demo purposes.

  ---

  ## Python (FastAPI) server

  Location: `python-server`

  Quick start (using Docker Compose):

  ```bash
  docker compose up
  ```

  This will build and run the Python FastAPI service. By default the FastAPI server in this project runs on port `8000` (see `python-server` code / Dockerfile).

  API routes (FastAPI):

  - `POST /tasks` — add a task. Request body should be JSON with at least a `title` field.
  - `GET /tasks` — return a JSON array of tasks.

  Example curl commands (Python server):

  ```bash
  # GET all tasks (FastAPI)
  curl http://localhost:8000/tasks

  # POST a task (FastAPI)
  curl -X POST http://localhost:8000/tasks \
    -H 'Content-Type: application/json' \
    -d '{"title":"Buy milk"}'
  ```

  Note: refer to `python-server/src/main.py` for implementation details.

  ---

  ## Node.js (Express) server — migrated from Python

  Location: `node-server`

  This Node.js server is a migration of the Python FastAPI `/tasks` routes. It provides the same API surface (`GET /tasks` and `POST /tasks`) and stores tasks in memory.

  1) Install dependencies

  ```bash
  cd node-server
  npm install
  ```

  2) Run the server

  The Express server listens on port `3000` by default. Start it in the foreground with:

  ```bash
  npm run start:express
  ```

  Or run it in the background and capture logs:

  ```bash
  nohup npm run start:express > node-server/node-server.log 2>&1 &
  ```

  3) API routes (Node/Express)

  - `POST /tasks` — add a task. Request body: JSON with `title` (string) and optional `completed` (boolean).
  - `GET /tasks` — return a JSON array of tasks.

  Example curl commands (Node server):

  ```bash
  # GET all tasks (Node)
  curl http://localhost:3000/tasks

  # POST a task (Node)
  curl -X POST http://localhost:3000/tasks \
    -H 'Content-Type: application/json' \
    -d '{"title":"Buy milk"}'
  ```

  Notes
  - The Node.js server was migrated from the Python FastAPI implementation so the API endpoints match.
  - Both servers store tasks in memory — data is lost on restart. If you want persistence, I can add file-based storage or a small database (SQLite).

  ---

  If you'd like, I can:

  - Commit `node-server` files into this branch and update the PR.
  - Add additional endpoints (PUT/PATCH/DELETE) to manage tasks.
  - Add tests or CI configuration to satisfy required status checks on the PR.

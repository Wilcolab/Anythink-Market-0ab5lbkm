# Simple Express Server

This project is a simple Express server scaffolded to listen on port 8001. It uses Nodemon for automatic code reloading during development.

## Project Structure

```
simple-express-server
├── src
│   └── server.js          # Entry point of the application
├── package.json           # npm configuration file
├── nodemon.json           # Nodemon configuration file
├── Dockerfile             # Dockerfile to build the application image
├── .dockerignore          # Files to ignore when building the Docker image
├── .gitignore             # Files to ignore by Git
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

### Docker

To build and run the application in a Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.
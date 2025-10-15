# Node.js Express Server

This project is a simple Express server scaffolded to listen on port 8001. It is set up to use `nodemon` for automatic code updates during development.

## Project Structure

```
node-server
├── src
│   ├── index.js       # Entry point of the application
│   └── app.js         # Express application setup
├── package.json        # Project configuration and dependencies
├── yarn.lock           # Dependency version lock file
├── nodemon.json        # Configuration for nodemon
├── Dockerfile          # Docker image instructions
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore in Git
└── README.md           # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd node-server
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the server:**
   ```bash
   yarn start
   ```

The server will start and listen on `http://localhost:8001`.

## Docker Instructions

To build and run the Docker container:

1. **Build the Docker image:**
   ```bash
   docker build -t node-server .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## Usage

This project currently does not define any endpoints. You can extend the application by adding routes in the `src/app.js` file.
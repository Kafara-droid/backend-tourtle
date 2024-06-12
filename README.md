# PALOMADE API

Team ENTS-H105 | Bangkit Capstone Project 2024

```markdown
# Prerequisites

Before running the application, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

# Tech We Use

- Express.js
- MySQL
- Sequelize
- Cloud Run
- SQL Instance
- Cloud Build
- Google Secret Manager
```

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-tourtle
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## SETTING UP .ENV File

before starting running the application, set env file based on your needs:

```bash
NODE_ENV=

# Database Config
DB_DATABASE=
DB_HOST=
DB_USER=
DB_PASSWORD=

# Server Config
SERVER_ADDRESS=
PORT=
CORS_PORT=
SECRET_KEY=

# HashIds
HASH_KEY=

# GMAPS KEY
MAPS_KEY=
```

You Must Create a Database First before going to next step.

## Running the Application

To start the Express.js server and run the database setup:

```bash
# Choose your command :
npm start
```

## API Endpoint List

```bash
# Users

```

## API Endpoints

List and describe the available endpoints of your API. Provide details such as the HTTP methods supported, expected parameters, and example responses. Organize this section logically based on the different functionalities your API offers.

### 1. Register User

- **Method:** `POST`
- **Path:** `/api/register`
- **Description:** endpoint for register users
- **Important Notes:** password must 8 character
- **Request Body:**
  ```json
  {
    "name": "Ibar Tourtle",
    "email": "ibar@tourtle.com",
    "password": "Yangpenting8"
  }
  ```
- **Response Body:**
  ```json
  {
    "message": "Verification email sent! User created successfully!",
    "data": {
        "name": "Ibar Tourtle",
        "email": "ibar@tourtle.com"
    }
  }
  ```

### 2. Login User

- **Method:** `POST`
- **Path:** `/api/users/login`
- **Description:** endpoint for login users
- **Request Body:**
  ```json
  {
    "email": "ibar@tourtle.com",
    "password": "Yangpenting8"
  }
  ```
- **Response Body:**
  ```json
  {
    "id": "9JapwN5yB7qd013y",
    "name": "Ibar Tourtle",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzAyNjUwOTk4LCJleHAiOjE3MDI3MzczOTh9.pXE-RsOctbzb4Ft0nwlWeJrfdFLaX8ksPcH7COGYIvI",
  }
  ```








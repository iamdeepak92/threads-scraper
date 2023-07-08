# Threads Scraper

A scraper for the Threads app, built with Node.js and Express.js.

This application provides three API endpoints to fetch user-related data from the Threads app.

## Prerequisites

- Node.js (version X.X.X or higher)
- npm (version X.X.X or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pingdeepak/threads-scraper.git
   ```

2. Install the dependencies:

   ```bash
   cd threads-scraper
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory of the project.
   - Define the following environment variables in the `.env` file:
     - `PORT`: The port number on which the server will run (default: 3000).

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will start running at `http://localhost:3000` (or the specified port).

2. API Endpoints:

   - Fetch userid by username:
     - Endpoint: `GET /userid/:username`
     - Example: `GET /userid/johndoe`
     - Response: `{ "userid": "12345" }`

   - Fetch user profile by userid:
     - Endpoint: `GET /userprofile/:userid`
     - Example: `GET /userprofile/12345`
     - Response: User profile JSON data

   - Fetch threads or posts of userid:
     - Endpoint: `GET /threads/:userid`
     - Example: `GET /threads/12345`
     - Response: Threads or posts JSON data

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to update the sections as per your project's requirements. Include any additional information, guidelines, or usage instructions that you feel are relevant.

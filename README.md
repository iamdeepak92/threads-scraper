# 🧵 Threads Scraper

A scraper for the Threads app, built with Node.js and Express.js.

This application provides three API endpoints to fetch user-related data from the Threads app.

## Prerequisites

- ⚙️ Node.js (version 12.20.0 or higher)

## Installation

1. 🚀 Clone the repository:

   ```bash
   git clone https://github.com/pingdeepak/threads-scraper.git
   ```

2. 📦 Install the dependencies:

   ```bash
   cd threads-scraper
   npm install
   ```

## Usage

1. ▶️ Start the server:

   ```bash
   npm start
   ```

   The server will start running at `http://localhost:3000` (or the specified port).

2. API Endpoints:

   - 🔍 Fetch userid by username:

     - Endpoint: `GET /userid/:username`
     - Example: `GET /userid/johndoe`
     - Response: `{ "userid": "12345" }`

   - 👤 Fetch user profile by userid:

     - Endpoint: `GET /userprofile/:userid`
     - Example: `GET /userprofile/12345`
     - Response: User profile JSON data

   - 💬 Fetch threads or posts of userid:
     - Endpoint: `GET /threads/:userid`
     - Example: `GET /threads/12345`
     - Response: Threads or posts JSON data

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.

const http = require('http');

// Define the port the server will listen on
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Create a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with a status code and content type.
  // We're now sending HTML instead of plain text.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Create the HTML content to be sent to the browser
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js Server</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          padding: 2rem;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #007bff;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello from my Node.js Server!</h1>
        <p>This is were the backend work my the node.js will be taking place</p>
        <p>The server is running on port ${port}.</p>
      </div>
    </body>
    </html>
  `;

  // Send the HTML content as the response body
  res.end(htmlContent);
});

// Start the server and log a message to the console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

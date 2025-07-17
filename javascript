// Paste this in server.js (Glitch auto-updates!)
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>IELTS Simulator Sign Up</h1>
    <form action="/signup" method="POST">
      <input type="text" name="username" placeholder="Name">
      <button>Submit</button>
    </form>
  `);
});

app.post("/signup", (req, res) => {
  res.send("Account created! 🎉");
});

app.listen(3000);

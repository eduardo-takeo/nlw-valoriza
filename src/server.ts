import express from "express";

const app = express();

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Eduardo",
      age: 29,
    },
    {
      name: "Maria",
      age: 20,
    },
    {
      name: "Clau",
      age: 19,
    },
  ];

  res.send(users);
});

app.post("/users", (req, res) => {
  res.send("Success");
});

app.listen(3000, () => {
  console.log("Server is running");
});

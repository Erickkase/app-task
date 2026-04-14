const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Primera tarea", completed: false }
];

// Ruta principal
app.get("/", (req, res) => {
  res.send("API funcionando");
});

// Obtener tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Crear tarea
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.json(newTask);
});

// Eliminar tarea
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  tasks = tasks.filter(task => task.id !== id);

  res.json({ message: "Tarea eliminada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
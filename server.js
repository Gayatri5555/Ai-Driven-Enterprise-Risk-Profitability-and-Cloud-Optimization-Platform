
const express = require("express")
const cors = require("cors")

const cloudRoutes = require("./routes/cloudRoutes")

const projectRoutes = require("./routes/projectRoutes")
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", projectRoutes)
app.use("/api", cloudRoutes)

app.get("/", (req, res) => {
  res.send("Backend server is running!")
})

const PORT = 5000

app.listen(PORT, () => {
  console.log("Server running on port 5000")
})


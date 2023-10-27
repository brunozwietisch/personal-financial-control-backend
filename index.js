const express = require("express");
const cors = require("cors");

const conn = require("./db/conn");

const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.static("public"));

// ROUTES
const userRoutes = require("./routes/UserRoutes");
const authRoutes = require("./routes/AuthRoutes");
const CashFlowEntryRoutes = require("./routes/CashFlowEntryRoutes");
const CashFlowExitRoutes = require("./routes/CashFlowExitRoutes");
const RecurrenceRoutes = require("./routes/RecurrenceRoutes");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/cashflowentry", CashFlowEntryRoutes);
app.use("/cashflowexit", CashFlowExitRoutes);
app.use("/recurrence", RecurrenceRoutes);

conn
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

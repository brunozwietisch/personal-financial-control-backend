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
const CashFlowOutflowRoutes = require("./routes/CashFlowOutflowRoutes");
const RecurrenceRoutes = require("./routes/RecurrenceRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const PaymentMethodRoutes = require("./routes/PaymentMethodRoutes");
const SourceRoutes = require("./routes/SourceRoutes");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/cashflowentries", CashFlowEntryRoutes);
app.use("/cashflowoutflows", CashFlowOutflowRoutes);
app.use("/recurrences", RecurrenceRoutes);
app.use("/categories", CategoryRoutes);
app.use("/paymentmethods", PaymentMethodRoutes);
app.use("/sources", SourceRoutes);

conn
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

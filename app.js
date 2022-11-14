const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/test", (req, res) => {
    const data = req.body;

    console.log(data);
})

app.listen(3040, () => console.log(`PORT AT: 3040`));
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { getPokeAbilities } = require("./controllers");
const app = express();
const { PORT, FRONT, BACK } = process.env;

const corsOptions = {
  origin: FRONT,
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

/* ERROR_MIDDLEWARE */
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.httpStatus || 500).send({
    status: `ERROR: ${error.httpStatus}`,
    message: error.message,
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, () => console.log(`Server listening in ${BACK}:${PORT}`));

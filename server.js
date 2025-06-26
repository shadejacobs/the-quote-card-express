const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use("/api/v1/getRandomImage", (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

require("dotenv").config();
const cors = require("cors");

app.use(cors());
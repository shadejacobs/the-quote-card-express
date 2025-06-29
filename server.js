const express = require('express');
const app = express();
const PORT = 3000;
require("dotenv").config();
const cors = require("cors");

app.use(cors());
const corsOptions = {
    origin: `http://localhost:${port}`
}


async function getRandomImage () {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;

        return receivedPhotoUrl;
    } catch (error) {
        console.error(error);
    }
}

app.use(express.static('public'));

app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

require("dotenv").config();

app.use(cors(corsOptions));
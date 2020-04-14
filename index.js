const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();

app.use(cors());
app.use(bp.json());

app.listen(3000, () => console.log('Server is up on port 3000.'));

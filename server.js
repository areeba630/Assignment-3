const express = require('exress');
const path = require('path');

const app = express();
const PORT = Process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(_dirname)));

//Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'index'));
});

app.listen(PORT,() => {
    console.log('Server is running on https://localhost:${PORT}');  
});
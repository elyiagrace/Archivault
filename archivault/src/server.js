const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); //Import multer

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'museumEntries.json');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure you create an 'uploads' folder in your project
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with a timestamp
    }
});
const upload = multer({ storage });

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // To serve the uploaded files

// Handle form data with file upload
app.post('/entries', upload.single('image'), (req, res) => {
    const newEntry = req.body;
    const imageFile = req.file; // Access the uploaded image

    if (imageFile) {
        newEntry.imageUrl = `/uploads/${imageFile.filename}`; // Add image path to the entry
    }

    // Read the existing entries
    fs.readFile(DATA_FILE, (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send('Error reading data file');
        }

        const entries = data && data.length ? JSON.parse(data) : [];
        entries.push(newEntry);

        // Write the updated entries back to the file
        fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error saving entry');
            }
            res.status(201).send('Entry saved successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

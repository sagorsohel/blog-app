const multer = require('multer');
const path = require('path');

// Define the storage configuration properly
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '..', 'public', 'uploads'); // Ensure correct path
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

fdfsdfsafafdsf
// Initialize multer with the correct storage value.
const upload = multer({
  storage: storage, // Call the function, not pass it directly
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB limit
  },
  fileFilter: (req, file, cb) => {
    // Filter for JPEG and PNG files only
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only JPG and PNG files are allowed!'));
    }
  },
});

module.exports = upload;

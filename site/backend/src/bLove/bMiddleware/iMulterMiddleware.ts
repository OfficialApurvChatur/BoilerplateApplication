import multer, { StorageEngine, FileFilterCallback } from "multer";
import { Request, Response } from "express";
import cloudinary from "cloudinary";
import path from "path";
import fs from "fs/promises";
import fileStorageConnection from "../../aConnection/fFileStorageConnection";


// Cloudinary Connection
fileStorageConnection();

// Storage
const storage: StorageEngine = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");

    // Ensure the uploads directory exists, create if it doesn't
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir); // Proceed with storing the file
    } catch (error) {
      cb(new Error("Error creating upload directory"), "");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Image Filter
const imageFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedMimeTypes = [
    "image/jpeg", 
    "image/png", 
    "image/jpg", 
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and document files (.pdf, .doc, .docx) are allowed!"));
  }
};

// Video Filter
const videoFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedMimeTypes = [
    "video/mp4",
    "video/mpeg",
    "video/ogg",
    "video/webm",
    "video/quicktime",
    "video/x-msvideo", 
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and document files (.pdf, .doc, .docx) are allowed!"));
  }
};

// Audio Filter
const audioFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedMimeTypes = [
    "audio/mpeg",
    "audio/wav", 
    "audio/ogg", 
    "audio/webm",
    "audio/aac", 
    "audio/flac",
    "audio/mp4", 
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only images and document files (.pdf, .doc, .docx) are allowed!"));
  }
};

export const singleImageMiddleware = multer({ 
  storage, 
  fileFilter: imageFilter 
}).single("image");

export const singleVideoMiddleware = multer({ 
  storage, 
  fileFilter: videoFilter 
}).single("video");

export const singleAudioMiddleware = multer({ 
  storage, 
  fileFilter: audioFilter 
}).single("audio");



import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file URL and convert it to a directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the directory you want to scan
const directoryPath = path.join(__dirname);

// Specify the file extensions you want to import
const importExtensions = [
  ".js",
  ".json",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".mp4",
  ".avi",
  ".svg",
];

// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // Filter and import files based on the specified extensions
  files.forEach((file) => {
    const extname = path.extname(file);
    if (importExtensions.includes(extname) && file !== "generateImports.js") {
      const basename = path.basename(file, extname);
      console.log(`import ${basename} from './${file}';`);
    }
  });
});

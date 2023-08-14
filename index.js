const fs = require("fs");

const wipeLogs = (inputFile) => {
  try {
    const data = fs.readFileSync(inputFile, "utf-8");
    const lines = data.split("\n");
    const filteredLines = lines.filter((line) => !line.includes("console.log"));

    const cleanedContent = filteredLines.join("\n");

    fs.writeFileSync(inputFile, cleanedContent, "utf8");
    console.log("console.logs removed successfully.");
  } catch (e) {
    console.error(e);
  }
};

wipeLogs("sample.js");

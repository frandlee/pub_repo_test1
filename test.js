import { exec } from 'child_process';

// Take user input from the command line arguments
const userInput = process.argv[2];

// Vulnerable to command injection
exec(`ls ${userInput}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});

//
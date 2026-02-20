# 🚀 JavaScript CLI App Fundamentals

### 1. Handling User Input (`readline`)
* **`rl.question(prompt, callback)`**: Displays a message and waits for the user's response.
* **`rl.close()`**: Essential to shut down the interface so the program can exit.

### 2. File System Operations (`fs`)
* **`fs.readFile()`**: Opens an existing file to read data.
* **`fs.appendFile()`**: Adds data to the end of a file (the "Log" feature).
* **`fs.writeFile()`**: Overwrites the whole file (the "Delete/Reset" feature).

### 3. Logic & Formatting
* **`if / else if`**: How the app makes decisions based on user input.
* **`parseFloat()`**: Converts text input into a number for math.
* **`.toFixed(2)`**: Rounds numbers to 2 decimal places (perfect for money).

### 4. Dates & Loops
* **`new Date()`**: Grabs the current system time from your MacBook Pro.
* **Functions**: We wrapped the app in `mainMenu()` to keep it running until the user quits.
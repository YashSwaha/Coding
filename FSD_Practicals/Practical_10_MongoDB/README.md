# Practical 10: Node.js and MongoDB CRUD Operations

## Objective
Demonstrate Create, Read, Update, and Delete (CRUD) operations on a `students` collection using Node.js and the official `mongodb` driver.

---

## Prerequisites
1. **Node.js** installed on your system.
2. Either of the following MongoDB setups:
   - **Local MongoDB**: MongoDB Community Server running on `localhost:27017`
   - **MongoDB Atlas**: Free cloud MongoDB cluster (https://www.mongodb.com/cloud/atlas)

---

## Step 1: Install Dependencies
Open your terminal in this directory (`FSD_Practicals/Practical_10_MongoDB`) and run:
```bash
npm install
```

---

## Step 2: Configure MongoDB Connection

### Option A: Local MongoDB (Default)
If you have MongoDB installed locally, start the MongoDB service:
- **Windows**: Start the MongoDB service via `services.msc` or run `net start MongoDB`
- **Linux / macOS**:
  ```bash
  sudo systemctl start mongod
  ```
The default connection string in `app.js` (`mongodb://127.0.0.1:27017`) will connect automatically.

### Option B: MongoDB Atlas (Cloud)
1. Log in to [MongoDB Atlas](https://cloud.mongodb.com).
2. Go to your Cluster -> **Connect** -> **Connect your application**.
3. Copy your connection string (e.g. `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`).
4. You can pass it as an environment variable without modifying the code:
   ```bash
   # Linux / macOS / Codespaces:
   export MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
   node app.js

   # Windows (CMD):
   set MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   node app.js

   # Windows (PowerShell):
   $env:MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
   node app.js
   ```
   Or directly replace the `URI` variable at the top of `app.js`.

---

## Step 3: Run the Practical
```bash
node app.js
```

---

## Expected Output Sequence
1. **Connect**: Connects to the database server.
2. **Create**: Inserts two student records (`Aarav Sharma` & `Neha Verma`).
3. **Read**: Fetches and prints all documents in a formatted console table.
4. **Update**: Updates `Aarav Sharma`'s email address.
5. **Delete**: Removes student `Neha Verma` (rollNo: `CS102`).
6. **Close**: Closes the client connection cleanly.

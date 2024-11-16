
# Amazon Product Search Aggregator

This project is a full-stack web application that allows users to search for products on Amazon.in and displays the results in a structured responsive table. The project is built using Node.js for the backend and React (with Vite) for the frontend along with Ant Design for a modern UI.

## Project Structure

```
amazon-product-aggregator/
├── backend/                # Backend folder
│   ├── server.js           # Main backend server file
│   ├── package.json        # Backend dependencies and scripts
│   └── ... (other backend files)
├── frontend/               # Frontend folder
│   ├── dist/               # Build output of the React app (generated after running `npm run build`)
│   ├── src/                # React source files
│   │   ├── pages/          # Directory for React pages
│   │   │   └── SearchPage.jsx  # Main page component for product search
│   │   ├── App.jsx         # Main React component
│   │   └── ... (other React components)
│   ├── public/             # Public directory for static files
│   ├── package.json        # Frontend dependencies and scripts
│   ├── SearchPage.css      # Custom CSS for `SearchPage`
│   └── App.css             # Global CSS for the React app
├── .gitignore              # List of files/folders to ignore in Git
└── README.md               # Project documentation
```

## Features
- Full-stack web application with a Node.js backend and React frontend.
- Responsive UI built with Ant Design.
- Search functionality that fetches data from Amazon.in and displays it in a sortable table.

## Prerequisites
- **Node.js**: Ensure Node.js is installed. You can download it [here](https://nodejs.org/).
- **Git**: Ensure Git is installed. You can download it [here](https://git-scm.com/).

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/amazon-product-aggregator.git
cd amazon-product-aggregator
```

### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Run the backend server:
   ```bash
   node server.js
   ```

### 3. Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Build the frontend:
   ```bash
   npm run build
   ```

### 4. Integrating Frontend and Backend
- Ensure the `frontend/dist` folder is served by the backend by adding the following code to `server.js` in the `backend` directory:

   ```javascript
   const path = require('path');
   app.use(express.static(path.join(__dirname '../frontend/dist')));
   app.get('*' (req res) => {
       res.sendFile(path.join(__dirname '../frontend/dist/index.html'));
   });
   ```

### 5. Run the Combined Application
1. Ensure you are in the `backend` directory:
   ```bash
   cd ../backend
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. Visit `http://localhost:5000` to see the application in action.

## Deployment Instructions

### Deploying the Backend on Render

1. **Log in to Render**:
   - Go to [Render](https://render.com) and create a free account or log in.

2. **Create a New Web Service**:
   - Click on **New** > **Web Service**.
   - Connect Render to your GitHub repository.
   - Choose the `backend` folder as the root directory for deployment.

3. **Configure the Build and Start Commands**:
   - **Build Command**:
     ```bash
     cd backend && npm install
     ```
   - **Start Command**:
     ```bash
     node server.js
     ```

4. **Add Environment Variables**:
   - Add environment variables in the **Environment** section of your Render service as needed.

5. **Deploy**:
   - Choose the **Free plan** and deploy the service.

### Deploying the Frontend on Vercel

1. **Log in to Vercel**:
   - Go to [Vercel](https://vercel.com) and create a free account or log in.

2. **Create a New Project**:
   - Click **New Project** and import your `amazon-product-aggregator` repository.
   - Choose the `frontend` folder as the project root.

3. **Configure Build Settings**:
   - **Build Command**:
     ```bash
     npm run build
     ```
   - **Output Directory**:
     ```bash
     dist
     ```

4. **Set Environment Variables**:
   - Go to **Settings** > **Environment Variables** and add `REACT_APP_BACKEND_URL`.

5. **Deploy**:
   - Click **Deploy** and wait for the process to complete.

## Final Steps and Verification
- Visit the deployed URLs and test the functionality.
- Ensure API requests work and the app behaves as expected.

## Technologies Used
- **Backend**: Node.js Express Axios Cheerio.
- **Frontend**: React (Vite) Ant Design Axios.
- **Deployment Platforms**: Render (backend) Vercel (frontend).

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

### Steps to Push the `README.md` to GitHub

1. **Navigate to Your Project Directory**:
   ```bash
   cd path/to/amazon-product-aggregator
   ```

2. **Create or Replace the `README.md`**:
   - Ensure the `README.md` file is saved in your project root directory.

3. **Stage the `README.md` File**:
   ```bash
   git add README.md
   ```

4. **Commit the Changes**:
   ```bash
   git commit -m "Added complete README.md file"
   ```

5. **Push the Changes to GitHub**:
   ```bash
   git push origin main
   ```

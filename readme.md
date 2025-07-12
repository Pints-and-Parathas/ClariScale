## 🧠 Project Description

**ClariScale** is a full-stack web application featuring a Django backend and a React frontend, developed as a Chrome extension.

The project automatically analyses the political sentiment of a given article in real time. By highlighting bias or ideological leanings in online news content, it empowers users to develop greater media literacy and recognise framing techniques.

The backend uses Google’s Gemini API for article analysis, while the React-based Chrome plugin integrates the results directly into the user’s browsing experience.

## 👥 Team Roles

- **James** – Worked exclusively on the backend using Django. Took the opportunity to learn Python and also served as a mentor, helping guide overall project structure and backend design.

- **Paul** – Contributed to the backend. As someone new to coding, he gained hands-on experience with Django and Python, working closely with James for support and learning.

- **Jyo** – Led frontend development with React. Used the project to explore React fundamentals and component design, while also mentoring Omair.

- **Omair** – Worked on the frontend, gaining experience with React and contributing UI elements. As a beginner in programming, he collaborated closely with Jyo for guidance and learning.
  
## 🛠️ Backend Setup

This section walks you through setting up the backend environment for **Pints and Parathas**.

### 📦 Prerequisites

Make sure you have the following installed:

- **Python** (3.10+ recommended)
- **Git**

---

### 📁 Project Setup

1. **Create and enter a working directory**  
   You can name it anything, e.g., `Pints-And-Parathas`:

   ```bash
   mkdir Pints-And-Parathas
   cd Pints-And-Parathas
   ```

2. **Clone the repository**

   ```bash
   git clone https://github.com/Pints-and-Parathas/Hackathon2024.git
   ```

3. **Create and activate a virtual environment**

   In an **admin Command Prompt**:

   ```bash
   python -m venv pints-env  # You can rename "pints-env" if desired
   pints-env\Scripts\activate.bat
   ```

4. **Install project dependencies**

   Navigate into the repo and install the packages:

   ```bash
   cd Hackathon2024
   python -m pip install -r requirements.txt
   ```

   If `Django` isn’t included in `requirements.txt`, install it explicitly:

   ```bash
   python -m pip install Django
   ```

---

### 🚀 Running the Django Server

1. Navigate to the Django project directory:

   ```bash
   cd backend/political_scale
   ```

2. Start the development server:

   ```bash
   python manage.py runserver
   ```

3. Open your browser and go to:

   ```
   http://127.0.0.1:8000
   ```

---
## 🧩 Frontend Setup (React + Chrome Extension)

### Prerequisites

- Node.js & npm installed

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/Pints-and-Parathas/Hackathon2024.git
   cd Hackathon2024/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build the extension**

   ```bash
   npm run build
   ```

   This will generate a `dist/` or `build/` folder (depending on your configuration) containing the extension files.

4. **Load into Chrome**

   - Open **Chrome** and navigate to `chrome://extensions/`
   - Enable **Developer Mode** (top-right corner)
   - Click **Load unpacked**
   - Select the `build/` or `dist/` folder inside `frontend/`

Your extension is now installed and should be active in your browser.

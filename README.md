# 📝 React Notes App

A simple notes app built with React, Firebase (Firestore), and Vite.

## Features

- Create, update, and delete notes
- Real-time syncing with Firebase Firestore

---

## 📦 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/talhahappani/react-notes-app.git
cd react-notes-app
```

2. **Install dependencies**:

```bash
npm install
```

---

## 🔧 Firebase Configuration

This project uses Firebase for storing and syncing notes. To run the project locally, you'll need to provide your own Firebase credentials.

### ✅ Steps:

1. **Create a Firebase project** at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable **Cloud Firestore** in the Firebase console
3. Go to your Firebase project settings and find your web app configuration
4. Create a `.env` file in the **root** of the project:

```bash
touch .env
```

5. Copy the following variables into `.env` and replace the placeholder values:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

---

## 🧪 Run the Project (Vite)

After setting up Firebase and installing dependencies, run the development server with:

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

---

```
react-notes-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── firebase.jsx
│   ├── main.jsx
│   ├── App.css
│   └── components/
├── .env
├── .gitignore       ← Ignores .env and node_modules
├── package.json
├── vite.config.js
├── README.md
```

---

## 🛠 Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase Firestore](https://firebase.google.com/docs/firestore)

---

## 📄 License

[MIT](LICENSE)

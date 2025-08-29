import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import CreatePost from './pages/CreatePost/CreatePost';
import Profile from './pages/Profile/Profile';
import PostDetail from './pages/PostDetail/PostDetail';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<>
              <Header />
              <main className="main-content">
                <Home />
              </main>
            </>} />
            <Route path="/explore" element={<>
              <Header />
              <main className="main-content">
                <Explore />
              </main>
            </>} />
            <Route path="/create" element={
              <ProtectedRoute>
                <>
                  <Header />
                  <main className="main-content">
                    <CreatePost />
                  </main>
                </>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={<>
              <Header />
              <main className="main-content">
                <Profile />
              </main>
            </>} />
            <Route path="/post/:id" element={<>
              <Header />
              <main className="main-content">
                <PostDetail />
              </main>
            </>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

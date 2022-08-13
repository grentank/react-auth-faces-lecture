import './App.css';
import React from 'react';
import { Container } from 'reactstrap';
import { Route, Routes } from 'react-router-dom';
import MyNavBar from './components/MyNavBar/MyNavBar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import PostPage from './components/PostPage/PostPage';
import FacesPage from './components/FacesPage/FacesPage';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Container>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route
          path="/faces"
          element={(
            <RequireAuth>
              <FacesPage />
            </RequireAuth>
        )}
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;

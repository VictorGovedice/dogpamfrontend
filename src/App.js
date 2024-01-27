import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Template/Home";
import GlobalStyles from "./styles/GlobalStyles";
import SignIn from "./Template/Signin";
import CriarConta from './Template/CriarConta';
import CadastroUsuarioPet from './Template/CadastroUsuarioPet';
import UsuarioPet from './Template/UsuarioPet';
import AreaUsuarioPet from './Template/AreaUsuarioPet';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/criarConta" element={<CriarConta />} />
          <Route path="/cadastroUsuarioPet" element={<CadastroUsuarioPet />} />
          <Route path="/usuarioPet" element={<UsuarioPet />} />
          <Route path="/areaUsuarioPet" element={<PrivateRoute><AreaUsuarioPet /></PrivateRoute>} />
        </Routes>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;

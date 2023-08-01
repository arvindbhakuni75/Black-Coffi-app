
// import { Container } from '@chakra-ui/react';
import { Box, 
  useColorMode,
  useColorModeValue, } from '@chakra-ui/react';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home /> } />
    </Routes>

    <Box w="full" h="100vh">hello</Box>
    </BrowserRouter>
  );
}

export default App;

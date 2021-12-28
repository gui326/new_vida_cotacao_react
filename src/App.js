import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Passo1 from './components/Passo1';
import Passo2 from './components/Passo2';
import Passo3 from './components/Passo3';
import { Box } from '@mui/system';

function App() {
  const [step, setStep] = useState([1]);

  const nextStep = () => {
    setStep(parseInt(step) + 1);
  };

  console.log('passo: ' + step);

  return (
    <div className="App">
      <Header/>
      <Box sx={{ p: '10% 20%' }}>
        {step == 1 &&
          <Passo1/>
        }
        {step == 2 &&
          <Passo2/>
        }
        {step == 3 &&
          <Passo3/>
        }
      </Box>
      <Footer nextStep={nextStep}/>
    </div>
  );
}

export default App;

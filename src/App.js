import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Passo1 from './components/Passo1';
import Passo2 from './components/Passo2';
import Passo3 from './components/Passo3';
import Passo4 from './components/Passo4';
import Passo5 from './components/Passo5';
import Passo6 from './components/Passo6';
import Passo7 from './components/Passo7';
import Passo8 from './components/Passo8';
import { Box } from '@mui/system';


function App() {
  const [step, setStep] = useState([1]);

  const nextStep = () => {
    setStep(parseInt(step) + 1);
  };

  const backStep = () => {
    if(step > 1){
      setStep(parseInt(step) - 1);
    }
  };

  console.log('passo: ' + step);

  return (
    <div className="App">
      <Header step={step * 10}/>
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
            {step == 4 &&
              <Passo4/>
            }
            {step == 5 &&
              <Passo5/>
            }
            {step == 6 &&
              <Passo6/>
            }
            {step == 7 &&
              <Passo7/>
            }
            {step == 8 &&
              <Passo8/>
            }
          
      </Box>
      <Footer nextStep={nextStep} backStep={backStep} step={step}/>
    </div>
  );
}

export default App;

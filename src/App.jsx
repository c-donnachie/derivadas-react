import React, { useState } from 'react';
import { CircularProgress } from "@nextui-org/react";
import { usePhysicsSimulation } from './hooks/usePhysicsSimulation';

import { InputForm } from './components/InputForm/InputForm';
import { Simulation } from './components/Simulation/Simulation';

export const App = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  
  const [params, setParams] = useState('');
  const simulationData = usePhysicsSimulation(params);

  return (
    <div className='w-screen flex flex-col justify-center items-center gap-6 my-8'>
      <h1 className='text-2xl font-bold text-center md:text-4xl px-10'>Simulador de Movimiento Físico</h1>
      <InputForm onSimulate={setParams} />
      {
        params && (
          <Simulation data={simulationData} />
        )
      }
    </div>
  );
};

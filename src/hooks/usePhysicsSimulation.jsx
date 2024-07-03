import { useState, useEffect } from 'react';

export const usePhysicsSimulation = ({ mass, force, time }) => {
  const [simulationData, setSimulationData] = useState([]);

  useEffect(() => {
    const acceleration = force / mass;
    const data = [];
    for (let t = 0; t <= time; t += 0.1) {
      const velocity = acceleration * t;
      const position = 0.5 * acceleration * t * t;
      data.push({ time: t, velocity, position });
    }
    setSimulationData(data);
  }, [mass, force, time]);

  return simulationData;
};

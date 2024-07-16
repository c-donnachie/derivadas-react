import { useState, useEffect } from 'react';

export const usePhysicsSimulation = ({ mass, force, time }) => {
  const [simulationData, setSimulationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const acceleration = force / mass;
      const data = [];
      for (let t = 0; t <= time; t += 0.1) {
        const velocity = acceleration * t;
        const position = 0.5 * acceleration * t * t;
        data.push({ time: t, acceleration, velocity, position });
      }
      setSimulationData(data);
    } catch {
      setSimulationData([]);
    } finally {
      setLoading(false);
    }
  }, [mass, force, time]);

  return loading ? null : simulationData;
};

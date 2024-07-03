import React, { useState } from 'react';
import { Button, Input, Card } from "@nextui-org/react";

export const InputForm = ({ onSimulate }) => {
  const [mass, setMass] = useState();
  const [force, setForce] = useState();
  const [time, setTime] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSimulate({ mass, force, time });
  };

  return (
    <form className='w-72' onSubmit={handleSubmit}>
      <Card className="py-10 px-6">
        <Input
          type="number"
          value={mass}
          label="Masa (kg)"
          required
          onChange={(e) => setMass(e.target.value)}
        />
        <br />
        <Input
          type="number"
          value={force}
          label="Fuerza (N)"
          required
          onChange={(e) => setForce(e.target.value)}
        />
        <br />
        <Input
          type="number"
          value={time}
          label="Tiempo (s)"
          required
          onChange={(e) => setTime(e.target.value)}
        />
        <br />
        <Button
          color="primary"
          type="submit">Simular</Button>
      </Card>
    </form>
  );
};

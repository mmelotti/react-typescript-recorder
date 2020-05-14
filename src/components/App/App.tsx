import React from 'react';
import './App.css';
import Recorder from '../Recorder';
import Calendar from '../Calendar';
import MaterialDatePicker from '../MaterialDatePicker';
import Button from '@material-ui/core/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
      <MaterialDatePicker />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Recorder from '../Recorder';
import Calendar from '../Calendar';
import MaterialDatePicker from '../MaterialDatePicker';

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
      <MaterialDatePicker />
    </div>
  );
};

export default App;

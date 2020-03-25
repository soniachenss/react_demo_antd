import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

function App() {
  return (
    <div className="App">
        <RangePicker picker="month" />
    </div>
  );
}

export default App;

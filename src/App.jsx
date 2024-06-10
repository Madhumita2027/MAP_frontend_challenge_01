import React from 'react';
import Card from './Cards.jsx';
import sampleData from './data.js';
import './index.css';

const App = () => {
  const cards = sampleData.map((data) => (
    <Card key={data.id} {...data} />
  ));

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="flex overflow-x-scroll p-4">
        {cards}
      </div>
    </div>
  );
};

export default App;

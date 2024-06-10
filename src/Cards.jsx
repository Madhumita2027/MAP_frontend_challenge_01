import React, { useState } from 'react';

const Card = ({ image, title, description, tag }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-44 h-80 bg-white shadow-md rounded-md m-4 flex-shrink-0 hover:scale-105 transform transition duration-300 relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md"></div>
      )}
      <img
        src={image}
        alt={title}
        className={`w-full h-2/3 p-2 object-cover rounded-t-md ${loading ? 'hidden' : 'block'}`}
        onLoad={() => setLoading(false)}
      />
      <div className="p-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        {tag && <span className="text-xs text-white bg-blue-500 rounded-full px-2 py-1">{tag}</span>}
      </div>
      <div className="absolute bottom-2 right-2 flex space-x-2">
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-bookmark"></i>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-share"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;

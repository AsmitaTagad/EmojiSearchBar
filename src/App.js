import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  var emoji = require('emoji.json');
  console.log(emoji[1]);

  useEffect(() => {
    const newData = emoji.filter((emoji) => 
      emoji.name.toLowerCase().includes(search.toLowerCase())
    );

    setData(newData);
  }, [search]);

  console.log(data);

  return (
    <div className="main-container">
      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="input-Field"
          />
        </div>
        <div className="subContainer">
          {data.map((item) => {
            return (
              <div key={item.codes}>
                <h1>{item.char}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

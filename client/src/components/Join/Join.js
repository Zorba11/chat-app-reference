import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

// Difference between <Route path> and <Link> - https://stackoverflow.com/questions/50807929/how-does-react-router-works-and-what-is-the-difference-between-link-androute/50808647
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder=""
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder=""
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

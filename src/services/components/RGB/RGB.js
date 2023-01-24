import './RGB.css';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function RGB() {
  const { red, green, blue } = useParams();

  function handleColorChange(color) {
    console.log('color', color);
  }

  return (
    <div className="alpha-container">
      <div className="rgb-container">
        <NavLink to={'/rgb/244/55/55'}>
          <button
            className="red-div"
            value="red"
            onClick={(e) => handleColorChange(e.target.value)}
          >
            Red
          </button>
        </NavLink>
        <NavLink to={'/rgb/244/135/55'}>
          <button
            className="orange-div"
            value="orange"
            onClick={(e) => handleColorChange(e.target.value)}
          >
            Orange
          </button>
        </NavLink>
        <NavLink to={'/rgb/244/210/55'}>
          <button
            className="yellow-div"
            value="yellow"
            onClick={(e) => handleColorChange(e.target.value)}
          >
            Yellow
          </button>
        </NavLink>
      </div>
    </div>
  );
}

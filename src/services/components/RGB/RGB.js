import './RGB.css';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function RGB() {
  const { red, green, blue } = useParams();

  function handleColorChange(value) {}

  return (
    <div className="alpha-container">
      <div className="rgb-container">
        <NavLink to={'/rgb/244/55/55'}>
          <div className="red-div" value="red" onClick={(e) => handleColorChange(e.target.value)}>
            Red
          </div>
        </NavLink>
        <NavLink to={'/rgb/244/135/55'}>
          <div
            className="orange-div"
            value="orange"
            onClick={(e) => handleColorChange(e.target.value)}
          >
            Orange
          </div>
        </NavLink>
        <NavLink to={'/rgb/244/210/55'}>
          <div
            className="yellow-div"
            value="yellow"
            onClick={(e) => handleColorChange(e.target.value)}
          >
            Yellow
          </div>
        </NavLink>
      </div>
    </div>
  );
}

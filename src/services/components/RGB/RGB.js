import './RGB.css';
import React from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

export default function RGB() {
  const { red, green, blue } = useParams();
  const history = useHistory();

  const redInt = Number(red);
  const greenInt = Number(green);
  const blueInt = Number(blue);

  if (isNaN(redInt) || isNaN(greenInt) || isNaN(blueInt)) {
    history.push('/404');
  } else {
    return (
      <div
        className="alpha-container"
        style={{ background: `rgb(${redInt}, ${greenInt}, ${blueInt})` }}
      >
        <div className="rgb-container">
          <NavLink to={'/rgb/244/55/55'}>
            <button className="red-btn btn">Red</button>
          </NavLink>
          <NavLink to={'/rgb/244/135/55'}>
            <button className="orange-btn btn">Orange</button>
          </NavLink>
          <NavLink to={'/rgb/244/210/55'}>
            <button className="yellow-btn btn">Yellow</button>
          </NavLink>
          <NavLink to={'/rgb/55/244/55'}>
            <button className="green-btn btn">Green</button>
          </NavLink>
          <NavLink to={'/rgb/55/135/244'}>
            <button className="blue-btn btn">Blue</button>
          </NavLink>
          <NavLink to={'/rgb/75/0/135'}>
            <button className="indigo-btn btn">Indigo</button>
          </NavLink>
          <NavLink to={'/rgb/244/135/244'}>
            <button className="violet-btn btn">Violet</button>
          </NavLink>
        </div>
        <span className="color-span">
          rgb({redInt}, {greenInt}, {blueInt})
        </span>
      </div>
    );
  }
}

import './RGB.css';
import React from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

export default function RGB() {
  const { red, green, blue } = useParams();
  const history = useHistory();

  const redInt = Number(red);
  const greenInt = Number(green);
  const blueInt = Number(blue);

  if (isNaN(redInt) || isNaN(redInt) || isNaN(redInt)) {
    history.push('/404');
  } else {
    return (
      <div
        className="alpha-container"
        style={{ background: `rgb(${redInt}, ${greenInt}, ${blueInt})` }}
      >
        <div className="rgb-container">
          <NavLink to={'/rgb/244/55/55'}>
            <button className="red-div">Red</button>
          </NavLink>
          <NavLink to={'/rgb/244/135/55'}>
            <button className="orange-div">Orange</button>
          </NavLink>
          <NavLink to={'/rgb/244/210/55'}>
            <button className="yellow-div">Yellow</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <p>Sorry not found</p>
      <Link to={'/rgb/244/55/55'}>Go home</Link>
    </>
  );
}

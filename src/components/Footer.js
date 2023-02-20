import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      copyrightⓒFreddyKaberuka
      {' '}
      <Link to="https://github.com/freddykaberuka/math-calculation" />
    </div>
  );
}

export default Footer;
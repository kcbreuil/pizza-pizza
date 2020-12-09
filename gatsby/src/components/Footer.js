import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">&copy; Pizza Pizza {new Date().getFullYear()}</p>
    </footer>
  );
}

import React, { useState } from 'react';
import HamburgerMenuButton from './HamburgerMenuButton';
import HamburgerMenu from './HamburgerMenu';

function HamburgerMenuContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerMenuButton onClick={toggleMenu} />
      <HamburgerMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}
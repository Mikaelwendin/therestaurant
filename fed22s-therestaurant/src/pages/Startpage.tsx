
import ModalpopUp from "./ModalpopUp";
import React, { useState, useEffect } from 'react';


//varför kallar den inte tillbaka till HOME efter att man har klickat på boka?

export const Startpage = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  const handleCloseModal = () => {
    setIsShown(false);
  };

  return (
    <>
      <p>Startpage is working</p>

      {isShown && (
        <ModalpopUp open={isShown} onClose={handleCloseModal}>
          <p>This is the modal content</p>
        </ModalpopUp>
      )}
    </>
  );
};
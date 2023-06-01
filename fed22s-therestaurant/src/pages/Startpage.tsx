import React, { useState, useEffect } from 'react';
import GreenButton from '../components/Btn';

export const Startpage = () => {
  const handleButtonClick = () => {
    console.log('Clicked that button!');
  };

  return (
    <>
      <p>Startpage is working</p>
      <GreenButton></GreenButton>
    </>
  );
};
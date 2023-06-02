import React, { useState, useEffect } from 'react';
import GreenButton from '../components/GreenBtn';
import RedButton from '../components/RedBtn';
import NeutralButton from '../components/NeutralBtn';

export const Startpage = () => {
  return (
    <>
      <p>Startpage is working</p>
      <GreenButton></GreenButton>
      <RedButton></RedButton>
      <NeutralButton></NeutralButton>
    </>
  );
};
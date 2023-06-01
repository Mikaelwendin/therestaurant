import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  // Egenskaper för knappen
}

const GreenButton = styled.button<ButtonProps>`
  background-color: green;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
`;

const Button: React.FC<ButtonProps> = () => {
  return (
    <div>
      <GreenButton>Grön knapp</GreenButton>
    </div>
  );
};

export default Button;

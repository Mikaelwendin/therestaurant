import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    // Egenskaper för knappen
}

const NeutralButton = styled.button<ButtonProps>`
  background-color: #F7E0A6;
  color: white;
  padding: 5px 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.3s ease;

&:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Button: React.FC<ButtonProps> = () => {
    return (
        <div>
            <NeutralButton>VIDARE</NeutralButton>
        </div>
    );
};

export default Button;

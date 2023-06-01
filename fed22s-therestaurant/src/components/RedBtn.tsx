import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    // Egenskaper för knappen
}

const RedButton = styled.button<ButtonProps>`
  background-color: red;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
`;


const Button: React.FC<ButtonProps> = () => {
    return (
        <div>
            <RedButton>Röd knapp</RedButton>

        </div>
    );
};

export default Button;

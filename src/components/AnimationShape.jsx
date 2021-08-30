import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: cornflowerblue;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;


    animation: square 25s linear alternate infinite;
    
        @keyframes square {
            to{
                transform : translate(100vw, 100vh);
        }
    }
`;

const AnimationShape = () => {
    return <Square/>;
};

export default AnimationShape;

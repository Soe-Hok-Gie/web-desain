import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: 60px;
    height: 60px;
    background-color: cornflowerblue;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
`;

const AnimationShape = () => {
    return <Square/>;
};

export default AnimationShape;

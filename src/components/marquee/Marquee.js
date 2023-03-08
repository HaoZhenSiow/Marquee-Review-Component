import React from 'react';
import styled from 'styled-components'

const MarqueeStyled = styled.div`

  line-height: 0;
  display: flex;
  overflow-x: hidden;
  
  
  & > div {
    line-height: 0;
    min-width: 100vw;
    translate: -100%;
    animation-name: move;
    animation-duration: ${props => props.duration ? props.duration : '10s'};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: ${props => props.reverse && 'reverse'};
  }

  @keyframes move {
    from {
      translate: -100%;
    }
    to {
      translate: -200%;
    }
  }
`

export default function Marquee({children, duration, reverse}) {
  return (
    <MarqueeStyled duration={duration} reverse={reverse}>
      {React.Children.only(children)}
      {React.Children.only(children)}
      {React.Children.only(children)}
    </MarqueeStyled>
  );
}
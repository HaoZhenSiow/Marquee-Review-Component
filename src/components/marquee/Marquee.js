import React from 'react';
import styled from 'styled-components'

const MarqueeStyled = styled.div`

  line-height: 0;
  display: flex;
  overflow-x: hidden;
  
  
  & > div {
    line-height: 0;
    min-width: 100vw;
    flex-shrink: 0;
    animation-name: move;
    animation-duration: ${props => props.duration ? props.duration : '10s'};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: ${props => props.reverse && 'reverse'};
    animation-play-state: ${props => props.paused && 'paused'};

    & > * {
      line-height: normal;
    }
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

export default function Marquee({children, duration, reverse, paused}) {
  return (
    <MarqueeStyled duration={duration} reverse={reverse} paused={paused}>
      {React.Children.only(children)}
      {React.Children.only(children)}
      {React.Children.only(children)}
    </MarqueeStyled>
  );
}
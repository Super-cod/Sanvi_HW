import React from 'react';
import styled from 'styled-components';

const EarthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 540px;
  margin: 2rem 0;
  position: relative;
  overflow: hidden;
  background-color: #000;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  margin-top: 100px;
  width: 540px;
`;

const VideoWrapper = styled.div`
  width: 540px;
  height: 540px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.15);
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const Earth = () => {
  return (
    <EarthContainer>
      <VideoWrapper>
        <VideoBackground
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          src="/71428-538962667_small.mp4"
        />
      </VideoWrapper>
    </EarthContainer>
  );
};

export default Earth; 
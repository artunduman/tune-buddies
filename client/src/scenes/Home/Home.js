import React from 'react';
import {keyframes} from '@emotion/core';
import styled from "@emotion/styled";
import {SpotifyButton} from "../../components/buttons";
import Bunny from "./Bunnies/Bunny";

const fadein = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Title = styled('h3')`
  text-decoration: underline;
  animation: ${fadein} .5s ease-in both;
`;

const Subtitle = styled('h4')`
  animation: ${fadein} 1s ease-in 1.5s both;
`;

const ButtonContainer = styled('div')`
  margin-top: 1.75em;
  margin-bottom: 2em;
  display: flex;
  justify-content: center;

  @media (min-width: 35em) {
    margin-top: 3em;
  }
`;

const Home = ({ onLoginButtonClicked }) => (
    <div className="Home">
        <Bunny />
        <h1>Tune Bunnies</h1>
        <Title>Souffle up your playlists</Title>
        <Subtitle>
            Swap out each track with another track on the same album or by the same artist.
        </Subtitle>

        <ButtonContainer>
            <SpotifyButton onClick={onLoginButtonClicked}>Login with Spotify</SpotifyButton>
        </ButtonContainer>
    </div>
);

export default Home;

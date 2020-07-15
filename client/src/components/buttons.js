import {css} from '@emotion/core';
import styled from '@emotion/styled'
import colors from "../theme";

const base = css`
  color: ${colors.white};
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  padding: .5em 3em;
  border-radius: 5em;
  border: solid 0px;
  cursor: pointer;

  @media (min-width: 50em) {
    font-size: 2rem;
  }
`;

const spotify = css`
  background-color: ${colors.green};
  transition: background .05s linear;
  &:hover {
    background: ${colors.lightGreen};
  }
`;

export const SpotifyButton = styled('button')(css`${base} ${spotify}`);

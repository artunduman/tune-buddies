import styled from "@emotion/styled";
import colors from "../../../theme";
import BunnyGif from './bunny.gif';

const Bunny = styled('div')`
  background: white;
  margin-top: 0em;
  height: 15em;
  background-image: url(${BunnyGif});
  background-repeat: repeat-x;
  background-color: ${colors.yellow};
  background-size: cover;
  background-position: center;
  background-blend-mode: luminosity;

  @media (min-width: 35em) {
    margin-top: 0em;
    background-size: 35em;
    height: 30em;
  }

  @media (min-width: 50em) {
    background-size: 50em;
  }
`;


export default Bunny;

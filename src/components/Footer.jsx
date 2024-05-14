import styled from "styled-components";
import { Web, Facebook, Linkedin, Twitter } from "../assets/icons/index";

const FootDiv = styled.div`
  margin: .25rem;
  border-radius: 2rem;
  background: var(--green);
`;
const MediaButton = styled.button`
  background: none;
  border: none;

  & :hover {
    transform: scale(1.1);
  }
`;

export default function Footer() {
  return (
    <>
      <FootDiv>
        <div>About US</div>
        <div>
          <MediaButton>
            <img src={Facebook}></img>
          </MediaButton>
          <MediaButton>
            <img src={Twitter}></img>
          </MediaButton>
          <MediaButton>
            <img src={Linkedin}></img>
          </MediaButton>
          <MediaButton>
            <img src={Web}></img>
          </MediaButton>
        </div>
        <form type="text">Email</form>
      </FootDiv>
    </>
  );
}

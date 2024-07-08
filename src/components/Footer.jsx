import styled from "styled-components";
import { Web, Facebook, Linkedin, Twitter } from "../assets/icons/index";

const FootDiv = styled.div`
  margin: 0.25rem;
  display: grid;
  grid-auto-flow: column;
  gap: 3rem;
  padding: 1rem;
  border-radius: 2rem;
  background: var(--green);

  & div {
    width: 18rem;
  }
`;
const MediaButton = styled.button`
  background: none;
  border: none;

  & :hover {
    transform: scale(1.1);
  }
`;

const MediaContainer = styled.div`
  padding-left: 5rem;
`;

export default function Footer() {
  return (
    <>
      <FootDiv>
        <div>
          About US: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          neque nam totam, et sapiente ducimus placeat ad omnis commodi, unde
          similique saepe aspernatur quas, illum vero beatae temporibus aperiam
          tempora.
        </div>
        <MediaContainer>
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
        </MediaContainer>
        <form type="text">Email</form>
      </FootDiv>
    </>
  );
}

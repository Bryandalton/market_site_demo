import Basket_Logo from "../assets/basket_logo.png";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 3rem;
  padding: 1rem;
  border-bottom: .2rem solid var(--green);

  & img {
    justify-self: start;
    max-height: 5rem;
    max-width: auto;
  }

  & h1 {
    justify-self:center;
    margin: 0;
    font-size: 4rem;
  }
`;
const LoginButton = styled.button`
  justify-self: end;
  max-height: 5rem;
  max-width: auto;
`;

export default function Header() {
  return (
    <>
      <HeaderDiv>
        <img className="logo" src={Basket_Logo}></img>
        <h1>Fart Market</h1>
        <LoginButton>
          <h6>Login/Signup</h6>
        </LoginButton>
      </HeaderDiv>
    </>
  );
}

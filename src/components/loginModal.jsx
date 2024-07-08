import styled from "styled-components";
import { useState } from "react";

const LoginModalDiv = styled.div``;

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
};

const handleLogin = (e) => {
  e.preventDefault();
  console.log("Username:", username);
  console.log("Password:", password);
  // Add login logic here
};

export default function LoginModal() {
  return(
  <LoginModalDiv>

  </LoginModalDiv>);
}

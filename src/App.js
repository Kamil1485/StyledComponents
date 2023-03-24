import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Button } from "./components/ButtonStyle";
import { DarkButton } from "./components/ButtonStyle";
import React, { useState } from "react";
import InputAttr from "./components/InputStyle";
import { Spinner } from "./components/AnimationStyle";
import { AnimatedLogo } from "./components/AnimationStyle";

//1
const Wrapper = styled.div`
  width: 100%;
  height: 150vh;
  border: 2px solid red;
`;
const SingleDiv = styled.div`
  border: 2px solid green;
  width: 100%;
  height: 250px;
`;

const Ptag = styled.p`
  width: 300px;
  background: orange;
`;

const Input = styled.input`
  width: 300px;
  font-size: 12px;
  border: 10px 10px;
`;

const Heading = styled.h1`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  &:hover {
    background: ${(props) => props.background};
  }
`;

//Global oalrak tüm  elementleri etkiler tanımlananlar dahil,örneğin pTag componenti color:red; iken globalStyle ile color:green olarak degistirildi. 
const GlobalStyle = createGlobalStyle` 
body{
margin:50px;
}
p{
  color:green;
}
.title{
  color:pink;
}

`;

function App() {
  const [size, setSize] = useState(24);
  return (
    //2
    <Wrapper>
      <GlobalStyle />
      <SingleDiv>
        <Heading size={size} color="purple" background="yellow">
          {" "}
          Header Element
        </Heading>
        <p className="title">Local P-tag</p>
        <p>Global P-tag</p>
      </SingleDiv>
      <SingleDiv>
        <Ptag>Lorem, ipsum.</Ptag>
        <Heading color="red">Change Header Element Font-Size</Heading>
        <Input value={size} onChange={(e) => setSize(e.target.value)} />
      </SingleDiv>

      <SingleDiv>
        <Heading>Buttons</Heading>
        <Button primary>Submit</Button>
        <Button color="red" hoverBg="yellow">
          Save
        </Button>
        <DarkButton>Edit</DarkButton>
      </SingleDiv>
      <SingleDiv>
        <Heading>Passing Props and Adding Attributes</Heading>
        <InputAttr
          type="text"
          required={true}
          placeholder="Enter a Username"
          placeholdercolor="green"
        />
      </SingleDiv>
      <SingleDiv>
        <Heading>Animations</Heading>
        <Spinner seconds="1" />
        <br />
        <AnimatedLogo
          seconds="1"
          src="https://www.logodesignlove.com/wp-content/uploads/2022/11/carebibi-logo-01-1200x1200.jpeg"
          alt="logo"
        />
      </SingleDiv>
    </Wrapper>
  );
}

export default App;

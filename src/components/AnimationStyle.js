import styled, { keyframes } from "styled-components";

//2 adet animasyon tanımla,Spinner  Componentine animation  özelliğine  props olarak geç
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const tada = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%, 20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;


const Spinner = styled.div`
  border: 5px solid rgba(210, 172, 199, 205);
  border-left-color: green;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background: ${(props) => props.background};
  animation: ${spin} ${props=>props.seconds? props.seconds:"5"}s linear infinite;
  &:hover{
    animation: ${tada} ${props=>props.seconds? props.seconds:"5"}s linear infinite;
}
`;

const AnimatedLogo = styled.img`
width:70px;
height:70px;
border-radius: 50%;
animation: ${tada} ${props=>props.seconds? props.seconds:"5"}s linear infinite;
&:hover{
    animation: ${spin} ${props=>props.seconds? props.seconds:"5"}s linear infinite;
}
`;


export {AnimatedLogo,Spinner};

//  animation: ${(props) => props.type ? props.type :"spin"} ${(props) => props.seconds ? props.seconds:"1"}s linear infinite;

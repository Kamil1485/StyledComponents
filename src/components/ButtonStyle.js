import styled from "styled-components";//3
//<Button primary></Button> bu componente primary adında özellik  verilirse veya verilmezse arka plan rengi degisecek.
export const Button = styled.button`
  background: ${props => props.primary ? '#4caf50' : '#2196f3'}; {/**Button primary özelliği içeriyorsa ve içermiyorsa  durumları */}
  border: none;
  color: ${props=>props.color}; {/**color: ${props=>props.color? "yellow":"white"}; */}
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px; 
  cursor: pointer;
  transition:0.3s;
  &:hover{
    background: ${props=>props.hoverBg?props.hoverBg:"pink"}; {/**color: ${props=>props.color? "yellow":"white"}; */}

  }
`;

//DarkButton Button componentinin childı yani 
export const DarkButton = styled(Button)`
background:black;
color:white;
`;
//4
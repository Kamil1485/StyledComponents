import styled from 'styled-components';

const InputAttr = styled.input.attrs(props => ({//elementin attributelerini dinamik olarak degistirebilirsin.
  type: props.type || 'text',
  placeholder: props.placeholder ? props.placeholder: 'Username',//1.yöntem
  required: true
}))`
  font-size: 18px;
  padding:5px;
/* //2.yöntem
  ::placeholder {
    color: ${props => props.placeholdercolor || "grey"};
  }
*/
  
`;

export default InputAttr;
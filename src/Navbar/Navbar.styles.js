import styled from 'styled-components';


const Header = styled.header`
    background: ${props => props.theme.primaryColor}/*var(--main-primary-color)*/;
    display: flex;
    padding: 10px 20px;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    position: sticky;
    top: 0;
    z-index:2;
`
  
const Brand = styled.div`
   flex: 1;
   a { text-align: left;}
   a span{ display:none; }
   a img {
       height: 30px;
       margin: 5px 10px 0  0; 
   } 
   /* mobile styles */

   /* small tablet styles */
   @media screen and (min-width: 620px) {
      a img{display:none;} 
      a span{
          display:block;
          color: var(--main-secondary-color);
      }
   }
`


const Form = styled.form`
    display: flex;
    margin-left: 5px;
    border-radius: 20px;
    background: var(--main-secondary-color);
    padding: 0 15px;
    width: 100%;
    img {
        height: 20px;
        margin: 10px -5px 0 0;
        opacity: 0.2;
        cursor: pointer;
    }
    /* mobile styles */

    /* small tablet styles */
    @media screen and (min-width: 620px){
        &{
            border-radius: 10px;  
            width: 200px;
        }
        img {
            height: 15px;
            margin: 3px -5px 0 0;
            opacity: 0.2;
        }
    }      
`

const Input = styled.input`
    border: none;
    padding: 4px;
    outline: none;
    width: 100%;
    ::placeholder {
        opacity: 0.8;
    }
  
`


export {Input, Form, Brand, Header}
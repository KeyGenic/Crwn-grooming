import styled, {css} from "styled-components";

const regularBtn = css`
    bacground-color : black;
    color : white:
    border : none

    :hover{
        bacground-color : white;
    color : black:
    border: 1px solid black
    }
`

const googleBtn = css`
    background-color: #4285f4;
    color: #fff;

    &:hover{
    background-color: #357ae8;
    border: none
    }
`

const invertedBtn = css`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover{
    background-color: #000;
    color: #fff;
    border: none;
    }
`
const buttonConditions = props => {
    if(props.isGoogleIn){
        return googleBtn
    }else{
        return props.Isinverted? invertedBtn :regularBtn
    }
}



export const ButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }

    ${buttonConditions}
`
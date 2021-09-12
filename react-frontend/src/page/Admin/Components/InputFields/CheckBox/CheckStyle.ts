import styled from 'styled-components'

export const LabelSyle = styled.label`
   width: 50px;
   height: 50px;
   background-color: #f72414;
   transform: translateY(-50%);
   border-radius: 50%;
   box-shadow: 0 7px 10px #ffbeb8;
   cursor: pointer;
   transition: 0.2s ease transform, 0.2s ease background-color, 0.2s ease box-shadow;
   overflow: hidden;
   z-index: 1;
   &:before {
      content: '';
      width: 70px;
      height: 70px;
      background-color: #fff;
      transform: translateY(-50%);
      border-radius: 50%;
      box-shadow: inset 0 7px 10px #ffbeb8;
      transition: 0.2s ease width, 0.2s ease height;
   }
   &:before:hover {
      width: 55px;
      height: 55px;
      box-shadow: inset 0 7px 10px #ff9d96;
   }
   &:active {
      transform: translateY(-50%) scale(0.9);
   }
`

export const TickMark = styled.div`
   /* position: absolute;
   top: -1px;
   right: 0;
   left: 0; */
   width: 60px;
   height: 60px;
   margin: 0 auto;
   margin-left: 14px;
   transform: rotateZ(-40deg);
   &:before,
   &:after {
      content: '';
      position: absolute;
      background-color: #fff;
      border-radius: 2px;
      opacity: 0;
      transition: 0.2s ease transform, 0.2s ease opacity;
   }
   &:before {
      left: 0;
      bottom: 0;
      width: 10px;
      height: 30px;
      box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
      transform: translateY(-68px);
   }
   &:after {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10px;
      box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
      transform: translateX(78px);
   }
`

export const StyledCheckBox = styled.input`
   display: none;
   &:checked {
      background-color: #07d410;
      box-shadow: 0 7px 10px #92ff97;
   }
`

// https://codepen.io/himalayasingh/pen/dBJBMO?editors=1100

import styled from 'styled-components'

export const FormSubmitButton = styled.span<{ buttonText: string }>`
   transform-style: preserve-3d;
   transform: translateZ(-25px);
   transition: all 0.3s;
   font-size: 1.2rem;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.15rem;

   &:before,
   &:after {
      position: absolute;
      box-sizing: border-box;
      content: '${({ buttonText }) => buttonText}';
      margin: 1rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 180px;
      height: 55px;

      cursor: pointer;
      border: 5px #f39c12 solid;
      border-radius: 5px;
   }
   &:before {
      color: #000;
      background: #f39c12;
      transform: rotateY(0deg) translateZ(25px);
   }
   &:after {
      color: #fff;
      transform: rotateX(90deg) translateZ(25px);
   }
   &:hover {
      transform: translateZ(-25px) rotateX(-90deg);
   }
`

export const FormSubmitButtonContainer = styled.span`
   position: relative;
   display: inline-flex;
   width: 185px;
   height: 60px;
   margin: 0 15px;
   perspective: 1000px;
`

// https://codepen.io/Anon_satyam/pen/JjXLoNJ?editors=1100

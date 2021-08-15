import styled from 'styled-components'

const blankColor = `hsl(0, 0%, 50%)`
// FORM
export const FormTitle = styled.div`
   border-radius: 5px;
   width: 200px;
   height: 30px;
   align-self: center;
   margin-top: 1rem;
   margin-bottom: 3rem;
   background: ${blankColor};
`
export const StyledForm = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #ffffff;
   color: white;
   width: 500px;
   min-height: 430px;
   border-radius: 5px;
   box-shadow: 7px 4px 25px #333;
`

export const InputSection = styled.section`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: left;
   margin-bottom: 3rem;
   margin-left: 1rem;
`

export const StyledLabel = styled.div`
   border-radius: 5px;
   background-color: ${blankColor};
   width: 30%;
   height: 20px;
   margin-bottom: 0.5rem;
`

export const StyledInput = styled.div`
   border-radius: 5px;
   background-color: ${blankColor};
   width: 80%;
   height: 45px;
`

export const AuthFormStyle = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Button = styled.div`
   align-self: center;
   background-color: ${blankColor};
   width: 160px;
   height: 50px;
   border-radius: 15px;
   margin: 1rem;
`

// CONTAINER

export const AuthContainer = styled.section`
   min-height: 100vh;
   display: grid;
   grid-template-columns: repeat(2, 50%);
   justify-content: center;
   align-items: center;
`

export const ImageStyle = styled.section`
   background-color: ${blankColor};
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 100%;
`

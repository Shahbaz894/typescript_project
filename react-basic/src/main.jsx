// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import SignUp from './signup.jsx'

// const anotherElement=(
//   <a href="https://google.com" target='_blank'> visit google</a>
// )
let userName= 'shahbaz ';

const reactElement=React.createElement(
  
  'a',
  {href:'https://google.com',target:'_blank'},
   'click me to visit google',
   userName
   

)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App/>
  //   <anotherElement/>
  //   <br />
  //   <SignUp/>
reactElement
  // </StrictMode>
)



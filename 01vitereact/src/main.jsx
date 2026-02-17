import ReactDOM from 'react-dom/client';

import App from './App';

/*
function MyApp(){
  return(
    <div>
      <h1>Custom App | Akshat !</h1>
    </div>
  )
} 
*/

// this is also not working here!!
// const reactElement = {
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }


// this is the method that not working here !!
// const anotherElement = (
//   <a href="https://google.com" target = '_blank'>Visit Google </a>
// )

/*
const AnotherUser = "Chai Aur React";
// only this is working here !!
import React from 'react';
const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target :'_blank'},
  'click me to visit Google',
  AnotherUser
)
*/
ReactDOM.createRoot(document.getElementById('root')).render(

    // Any of one is Working only.
    <App />
    // reactElement   
    
    
    

)

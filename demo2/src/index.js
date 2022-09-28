import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));



const name = 'jesus'
const sesion = true;
const apellido = 'reyes'
const alumnos = ["Andrea","Abraham","Emilio"];

const jsx = 
(
  <>
    {sesion===true ?
    (
      <>
        <h1 className='Titulo' style={{color: 'red'}}>hola {name}</h1>
        {apellido &&<p>tu apelliso es: {apellido}</p>}
        <h3>lista de alumnos</h3>
        <ul>
          {alumnos.map((nombre,i)=>{
            return <li>key={i}>{nombre}</li>
          })}
        </ul>


      </>

    ):(
      <h2>No iniciaste sesion</h2>
    )
    }
    
  </>
);

/*const comprubaSesion = (sesion) => {
  if (sesion === true)
  {
    return jsx;
  }
  else
  {
    return <h2>No iniciaste sesion</h2>
  }

}*/

root.render(jsx);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

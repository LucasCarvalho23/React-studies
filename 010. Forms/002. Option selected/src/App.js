//import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css'

export default function App() { 

  const [form, formFunc] = useState({"name":"","curso":"","year":""})

  const handleChange = (e) => { 

    if(e.target.getAttribute('name') == 'form-name') {
      formFunc({"name":e.target.value, "curso":form.curso, "year": form.ano})
    } else if (e.target.getAttribute('name') == 'form-curso') {
        formFunc({"name":form.name, "curso":e.target.value, "year": form.ano}) 
      } else if (e.target.getAttribute('name') == 'form-year') {
        formFunc({"name":form.name, "curso":form.curso, "year": e.target.value})
      }

  }

  return (
    <>

      <p>
        <label>
          Name
        </label>
        <input
          type = "text"
          name = "form-name"
          value = {form.name}
          onChange = { (e) => handleChange(e) }
        ></input>
      </p>

      <p>
        <label>
          Curso
        </label>
        <input
          type = "text"
          name = "form-curso"
          value = {form.curso}
          onChange = { (e) => handleChange(e) }
        ></input>
      </p>

      <p>
        <label>
          Year 
        </label>
        <input
          type = "text"
          name = "form-year"
          value = {form.year}
          onChange = { (e) => handleChange(e) }
        ></input>
      </p>

      <p>Name typed: {form.name}</p>
      <p>Curso typed: {form.curso}</p>
      <p>Year typed: {form.year}</p>

    </>
  );

}
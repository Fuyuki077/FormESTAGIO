import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
      <h1>Formulário de Estágio</h1>
      <div className='container'>
      <form action="/processar-dados" method="post">
        <div className="onHover">
          <label  htmlFor="nome">Nome</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            placeholder="Digite seu nome" 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="seu@email.com" 
            required 
          />
        </div>
        <div>
          <label htmlFor="date">Data de Nascimento</label>
          <input 
            type="date" 
            id="date" 
            name="date"
            required 
          />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default App

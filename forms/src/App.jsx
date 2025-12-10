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
          <label htmlFor="telefone">Telefone</label>
          <input 
            type="tel" 
            pattern="(\([0-9]{2}\)\s?)?[9]?[0-9]{4,5}-?[0-9]{4}"
            id="telefone" 
            name="telefone" 
            placeholder="(00) 90000-0000 ou 0000-0000"
            title="Formato: (DDD) 9XXXX-XXXX ou XXXX-XXXX"
            required
          />
        </div>

        <div>
          <label htmlFor="endereço">Endereço</label>
          <input 
            type="text" 
            id="endereço" 
            name="endereço" 
            placeholder="Digite seu Endereço" 
            required 
          />
        </div>

        <div>
          <label htmlFor="semestre">Semestre Atual</label>
          <input 
            type="number" 
            id="semestre" 
            name="semestre" 
            min="5" 
            max="10" 
            placeholder="Digite seu semestre atual" 
            required 
          />
        </div>

        <div>
          <label htmlFor="RG">Número do RG</label>
          <input 
            type="text" 
            id="RG" 
            name="RG" 
            placeholder="Digite seu RG" 
            required 
          />
        </div>

        <div>
          <label htmlFor="CPF">Número do CPF</label>
          <input 
            type="text" 
            id="CPF" 
            name="CPF" 
            placeholder="Digite seu CPF" 
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
          <label htmlFor="instituicao">Universidade/Faculdade</label>
          <input 
            type="text" 
            id="instituicao" 
            name="instituicao" 
            placeholder="Digite sua Universidade/Faculdade" 
            required 
          />
        </div>

        <div>
          <label htmlFor="reservista_pcd">
            Sou pessoa com deficiência (PCD) e quero me candidatar às vagas reservadas aos(às) candidatos(as) PCD.
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input 
              type="checkbox" 
              id="reservista_pcd" 
              name="reservista_pcd" 
            />
            <label htmlFor="reservista_pcd">
              Marque aqui se é PCD.
            </label>
          </div>
        </div>


        <div>
          <label htmlFor="especifico_reservista">Especificar a deficiência</label>
          <input 
            type="text" 
            id="especifico_reservista" 
            name="especifico_reservista" 
            placeholder="Especificar a deficiência" 
          />
        </div>

        <div>
          <label htmlFor="pdf_laudo">Inserir o Laudo Médico (original ou cópia autenticada) em pdf. (PCD)</label>
          <input 
            type="file" 
            id="pdf_laudo" 
            name="pdf_laudo" 
            accept=".pdf"
          />
        </div>

       <div>
  <label>
    Quero me candidatar às vagas reservadas...
  </label>
  
  <div style={{ display: 'flex', gap: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" id="teste1" />
      <label htmlFor="teste1">
        Negro
      </label>
    </div>
    
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" id="teste2" />
      <label htmlFor="teste2">
        Indígena
      </label>
    </div>
  </div>
</div>

        <div>
          <label htmlFor="pdf_historico">Inserir o Histórico Escolar em pdf.</label>
          <input 
            type="file"
            id="pdf_historico" 
            name="pdf_historico" 
            accept=".pdf"
            required 
          />
        </div>

        <div>
          <label htmlFor="pdf_matricula">Inserir aqui o arquivo (pdf) da Declaração de Matrícula. </label>
          <input 
            type="file"
            id="pdf_matricula" 
            name="pdf_matricula" 
            accept=".pdf"
            required
          />
        </div>
        <label htmlFor="pdf_foto">Inserir aqui o arquivo (em pdf) do Documento Oficial com foto.</label>
        <input 
          type="file"
          id="pdf_foto" 
          name="pdf_foto" 
          accept=".pdf"
          required
        />
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

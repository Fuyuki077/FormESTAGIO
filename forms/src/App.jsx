import { useState } from 'react'
import './App.css'

function App() {

  return (
  <div>
      <h1><span></span></h1>
      <form action="/processar-dados" method="post">
    <div className='container'>
      <h1>Caro(a) candidato(a). Faça sua inscrição aqui.</h1>
      <p><b>Período de Inscrição: 5 a 24 de novembro de 2024 ..... (ATENÇÃO: ATÉ 24.11.2024, ÀS 23h59min)</b></p>
      <p><b>Quem pode se inscrever:</b> Alunos(as) matriculados(as) no curso de Graduação em Direito a partir do 5º Semestre</p>
      <p><b>Quem pode ser convocado:</b> Alunos(as) matriculados(as) no curso de Graduação em Direito a partir do 7º Semestre</p>
      <p>Especial atenção às respostas e aos arquivos obrigatórios.</p>
      <p>Boa sorte!</p>
      <p>A Comissão Organizadora.</p>
    </div>

    <div className='container'>
      <div /* Nome Completo */>
        <label  htmlFor="nome">Nome</label>
        <input 
          type="text" 
          id="nome" 
          name="nome" 
          placeholder="Digite seu nome" 
          required 
        />
      </div>

      <div /* Email */>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="seu@email.com" 
          required 
        />
      </div>

      <div /* Telefone */>
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

      <div /* Endereço */>
        <label htmlFor="endereço">Endereço</label>
        <input 
          type="text" 
          id="endereço" 
          name="endereço" 
          placeholder="Digite seu Endereço" 
          required 
        />
      </div>

      <div /* Semestre Atual */>
        <label htmlFor="semestre">Semestre Atual</label>
        <input 
          type="number" 
          id="semestre" 
          name="semestre" 
          min="5" 
          max="10" 
          pattern="[5-10]*"
          placeholder="Digite seu semestre atual (min 5°)" 
          required 
        />
      </div>

      <div /* RG */>
        <label htmlFor="RG">Número do RG</label>
        <input 
          type="text" 
          id="RG" 
          name="RG" 
          placeholder="Digite seu RG" 
          required 
        />
      </div>

      <div /* CPF */>
        <label htmlFor="CPF">Número do CPF</label>
        <input 
          type="text" 
          id="CPF" 
          name="CPF" 
          placeholder="Digite seu CPF"
          required 
        />
      </div>

      <div /* Data de Nascimento */>
        <label htmlFor="date">Data de Nascimento</label>
        <input 
          type="date" 
          id="date" 
          name="date"
          required 
        />
      </div>
    </div>

    <div className='container'>
        <div /* Instituição de Ensino */>
          <label htmlFor="instituicao">Universidade/Faculdade</label>
          <input 
            type="text" 
            id="instituicao" 
            name="instituicao" 
            placeholder="Digite sua Universidade/Faculdade" 
            required 
          />
        </div>


        <div /* Histórico Escolar */>
          <label htmlFor="pdf_historico">Inserir o Histórico Escolar em pdf.</label>
          <input 
            type="file"
            id="pdf_historico" 
            name="pdf_historico" 
            accept=".pdf"
            required 
          />
        </div>

        <div /* Declaração de Matrícula */>
          <label htmlFor="pdf_matricula">Inserir aqui o arquivo (pdf) da Declaração de Matrícula. </label>
          <input 
            type="file"
            id="pdf_matricula" 
            name="pdf_matricula" 
            accept=".pdf"
            required
          />
        </div>

        <div /* Documento Oficial com Foto */>
        <label htmlFor="pdf_foto">Inserir aqui o arquivo (pdf) do Documento Oficial com foto.</label>
        <input 
          type="file"
          id="pdf_foto" 
          name="pdf_foto" 
          accept=".pdf"
          required
        />
        </div>
    </div>

    <div className='container'>
      <div /* Vagas Reservadas para Negros e Indígenas */>
        <label>
          Quero me candidatar às vagas reservadas...
        </label>
        <ul>
          <li> 
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input 
              type="checkbox" 
              id="teste1" />
              <label htmlFor="teste1">
                Negro
              </label>
            </div>
          </li>

          <li>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input 
              type="checkbox" 
              id="teste2" />
              <label htmlFor="teste2">
                Indígena
              </label>
            </div>
          </li>

        </ul>
      </div>

      <div /* PCD */>
        <label htmlFor="reservista_pcd">
          Sou pessoa com deficiência (PCD) e quero me candidatar às vagas reservadas aos(às) candidatos(as) PCD.
        </label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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

      <div /* Especificar a deficiência */>
        <label htmlFor="especifico_pcd">Especificar a deficiência</label>
        <input 
          type="text" 
          id="especifico_pcd" 
          name="especifico_pcd" 
          placeholder="Especificar a deficiência" 
        />
      </div>

      <div /* Laudo Médico PCD */>
        <label htmlFor="pdf_laudo">Inserir o Laudo Médico (original ou cópia autenticada) em pdf. (PCD)</label>
        <input 
          type="file" 
          id="pdf_laudo" 
          name="pdf_laudo" 
          accept=".pdf"
        />
      </div>

<div class="parent">
      <div /* Reset Button */>
        <input type="reset" />
      </div>
      <div /* Submit Button */>
      <input type="submit" value="Enviar" />
      </div>
</div>


    </div>
      </form>
  </div>
  )
}

export default App

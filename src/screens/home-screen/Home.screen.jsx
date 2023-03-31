import './Home.style.css'
import React, { useState } from 'react'

export function HomeScreen() {
  const [filme, setFilme] = useState('')
  const [listaFilmes, setLista] = useState([])

  function handleChange(event) {
    const { name, value } = event.target
    setFilme({ ...filme, [name]: value })
  }

  function handleSubmit(event) {
    listaFilmes.push(filme)
    console.log(listaFilmes)
    event.preventDefault()
  }

  console.log(filme)

  return (
    <>
      <section className='home'>
        <h1>HOME</h1>
        <form className='form'>
          <label htmlFor='filme'>Adicione um filme</label>
          <input
            type='text'
            name='filme'
            id='filme'
            placeholder='Adicione'
            value={filme.filme}
            onChange={handleChange}
          />
          <button className='button' onClick={handleSubmit}>
            {' '}
            Adicionar{' '}
          </button>
        </form>

        <div className='lista-filme'>
          {listaFilmes.length > 0
            ? listaFilmes.map((filme) => (
                <div className='lista'>
                    <p className='filme'>{filme.filme}</p>
                </div>
              ))
            : <h2>Sem filmes na lista</h2>}
        </div>
      </section>
    </>
  )
}

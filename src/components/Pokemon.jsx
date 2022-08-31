import { useParams } from 'react-router-dom'
import { useState } from 'react'
import useAxiosRequestPokemon from '../hooks/useAxiosRequestPokemon'

const Pokemon = () => {
    const [dataPokemon, setDataPokemon] = useState({})
    const [species, setSpecies] = useState({})
    const { id } = useParams()
    useAxiosRequestPokemon(id, setSpecies, setDataPokemon)

    const changeColor = color => color === 'yellow' ? '#f7d708' : color === 'white' ? 'gray' : color

  return (
    <main className='pokemon'>
        <section 
            className='pokemon__principal' 
            style={{background: `white`, border: `10px solid ${changeColor(species.color?.name)}`}}
        >
            <figure className='pokemon__image'>
                <img src={dataPokemon.sprites?.other['official-artwork'].front_default} alt={`${dataPokemon.name} image`} />
            </figure>
           <br />
           <br />
            
            <section className='pokemon__name'>
                
                <p>{dataPokemon.name}</p>
               
            </section>
            <section className='pokemon__features'>
                <article className='pokemon__feature'>
                    <p>Weight</p>
                    <p>{dataPokemon.weight}</p>
                </article>
                <article className='pokemon__feature'>
                    <p>Height</p>
                    <p>{dataPokemon.height}</p>
                </article>
            </section>
           
            <h3>Stats</h3>
            <section className='pokemon__stats'>
                {dataPokemon.stats?.map(stat => (
                    <article className='pokemon__stat' key={stat.stat.name}>
                        <section className='stat__tittle'>
                            <p>{stat.stat.name}</p>
                            <p>{`${stat.base_stat} / 150`}</p>
                        </section>
                        <section className='stat-main'>
                            <div className='stat-decor' style={{width: `${stat.base_stat}`}}></div>
                        </section>
                    </article>
                ))}
            </section>
        </section>
    </main>
  )
}

export default Pokemon
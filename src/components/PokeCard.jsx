import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { changeNameStats, changeColor, changeFirstLetter } from "../helpers/helpers"
import useAxiosRequestPokeCard from "../hooks/useAxiosRequestPokeCard"


const PokeCard = ({ urlPokemon }) => {
    const [dataPokemon, setDataPokemon] = useState({})
    const [species, setSpecies] = useState({})
    const navigate = useNavigate()
    const loading = useAxiosRequestPokeCard(setSpecies, setDataPokemon, urlPokemon)
    const handleClickCard = () => navigate(`/pokedex/${dataPokemon.id}`)

  return (
    <article 
        className="pokeCard" 
        style={{background: `white `, border: `8px  solid ${changeColor(species.color?.name)}`}}
        onClick={handleClickCard}
    >
        <figure className="pokeCard__image">
            <img src={dataPokemon.sprites?.other['official-artwork'].front_default} alt="Pokemon Image" />
        </figure>
        <h3 className="pokeCard__name">{dataPokemon.name}</h3>
        <section className="pokeCard__type">
            <p>{dataPokemon.types?.map(type => changeFirstLetter(type.type.name)).join(' / ')}</p>
            
        </section>
        <section className="pokeCard__stats">
            {
                dataPokemon.stats?.map(stat => (
                    <article className="pokeCard__stat" key={stat.stat.url}>
                        <p className="stat__name">{changeNameStats(stat.stat.name)}</p>
                        <p className="stat__number" style={{color: `${changeColor(species.color?.name)}`}}>{stat.base_stat}</p>
                    </article>
                ))
            }
        </section>
        
    </article>
  )
}

export default PokeCard
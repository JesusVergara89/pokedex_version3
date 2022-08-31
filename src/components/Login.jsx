import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux/es/exports"
import { setTrainerName } from "../store/slices/trainerName.slice"
import Logo from '../images/logo.png'

const Login = () => {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const inputText = e.target.searchText.value
        if(inputText === ''){
            window.alert('Write ur name and let the fun begin!');
        }else{
            dispatch(setTrainerName(inputText))
            navigate('/pokedex')
        }
    }

  return (
    <main className="login">
        <section className="login__body">
            <figure className="login__image">
                <img src={Logo} alt="Pokedex logo" />
            </figure>
            <h2 className="login__tittle">Hello pokemón master!</h2>
            <p className="login__paragraph">Put your name here and let the fun begin!</p>
            <form className="login-main" onSubmit={handleSubmit}>
                <input type="text" id='searchText' placeholder="Name here"/>
                <button>Enter</button>
            </form>
        </section>
        <section className="login__footer">
            <div className="footer__redBlock"></div>
            <div className="footer__blackBlock"></div>
           
        </section>
    </main>
  )
}

export default Login
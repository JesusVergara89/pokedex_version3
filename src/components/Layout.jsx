import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Logo from '../images/logo.png'
import { useDispatch } from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.slice'

const Layout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const trainerName = useSelector(state => state.trainerName)

    const goToLogout = () => {
        dispatch(setTrainerName(''))
    }

    const goToPokedex = () => {
        navigate('/pokedex')
    }

  return (
    <>
        <>
            {trainerName === '' ? <Navigate to={'/'}/> : null }
        </>
        <header className="header">
            <section className="header__redBlock">
                <figure onClick={goToPokedex} className="header__image">
                </figure>
            </section>
        </header>
        <Outlet />
    </>
  )
}

export default Layout
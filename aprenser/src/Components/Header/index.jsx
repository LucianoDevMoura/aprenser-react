import Style from './Header.module.css';
import Logo from '../../assets/img/logoAprenser.png';
import { NavBar } from '../Navegacao';


export const Header = () => {
    return (
        <div className={ Style.dark }>
            <header className= { Style.cabecalho }>
                <img src={ Logo }
                    alt="logo aprenser"
                />
                <ul>
                    <NavBar/>
                </ul>
            </header>
        </div>
    )
}
import './estilo.css'
import logo from '../../imagem/logo.svg'

function Logo () {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Site</strong>Exemplo</p>
        </div>
    )
}

export default Logo
import logo from '../../imagem/logo.svg'
import styled from 'styled-components'

const LogoConteiner = styled.div`
    display: flex;
    font-size: 30px;
`

const ImgConteiner = styled.img`
    margin-right: 10px;
` 

function Logo () {
    return (
        <LogoConteiner>
            <ImgConteiner
                src={logo}
                alt='logo'
            />
            <p><strong>Site</strong>Exemplo</p>
        </LogoConteiner>
    )
}

export default Logo
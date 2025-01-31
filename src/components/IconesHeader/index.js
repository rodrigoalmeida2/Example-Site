import perfil from '../../imagem/perfil.svg'
import sacola from '../../imagem/sacola.svg'
import styled from 'styled-components'

const IconesConteiner = styled.ul`
  display: flex;
`

const IconeConteiner = styled.li`
  margin-right: 40px;
  width: 25px;
` 

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <IconesConteiner>
          {icones.map ((icone) => (
            <IconeConteiner><img src={icone} alt='icone'></img></IconeConteiner>
          ))}
        </IconesConteiner>
    )
}

export default IconesHeader
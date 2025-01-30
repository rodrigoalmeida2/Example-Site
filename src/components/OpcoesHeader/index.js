import styled from 'styled-components'

const OpcoesConteiner = styled.ul`
  display: flex;
`

const OpcaoConteiner = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
` 

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <OpcoesConteiner>
            {textoOpcoes.map ((texto) => (
                <OpcaoConteiner><p>{texto}</p></OpcaoConteiner>
            ))}
        </OpcoesConteiner>
    )
}

export default OpcoesHeader
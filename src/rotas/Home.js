import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa'
import UltimosLancamentos from '../components/UltimosLancamentos';

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Home() {
  return (
    <AppConteiner>
      <Pesquisa />
      <UltimosLancamentos />
    </AppConteiner>
  );
}

export default Home

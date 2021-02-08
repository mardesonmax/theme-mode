import { Container } from "../../styles/global"
import { MyHome } from "./styled"

const Home = () => {
  return (
    <MyHome>
      <Container>
        <div className="item">
          <h1>Exemplo simples de Theme Switch</h1>
        </div>
      </Container>
    </MyHome>
  )
}

export default Home;

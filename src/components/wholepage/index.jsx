import rocket from "../../images/rocket.svg";
import topImage from "../../images/top-image.svg";
import bottomImage from "../../images/bottom-image.svg";
import { Container } from "./style";
import Timer from "../timer";

function WholePage() {
  return (
    <Container>
      <img src={topImage} alt="" className="Image" />
      <section>
        <div>
          <h1>READY TO LAUNCH IN...</h1>
          <Timer />
          <p>Inscreva-se para saber mais dobre o lançamento</p>
          <button>Inscreva-se</button>
        </div>
        <img src={rocket} alt="rocket" className="rocket"></img>
      </section>
      <img src={bottomImage} alt="" className="Image2" />
    </Container>
  );
}

export default WholePage;

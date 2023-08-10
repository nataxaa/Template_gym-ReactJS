import { Container } from "./style";
import image2 from "../../images/back-view.png"
import image1 from '../../images/muscular.png'
import image3 from '../../images/Luzes.png'

 export function Home(){
    return(
        <Container>
            <div style={{width: '30rem'}}>
                <h1>Transforme seu corpo <span>5x</span> mais <span>rápido</span></h1>
                <p>
                    Faça parte do método mais utilizado por atletas de alto nível. 
                    Venha transformar seu corpo e reconquistar a sua autoestima
                </p>
                <button>COMEÇAR AGORA</button>
            </div> 
           
            <div className="area-images">
                <img className="luz" src={image3} alt="" />
                <img className="back" src={image2} alt="" />
                <img className="front" src={image1} alt="" />

            </div>
        </Container>
    )
}
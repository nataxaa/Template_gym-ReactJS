import { Card, Container } from "./style";
import image from '../../images/card2.png'
export function Worked(){

    return(
        <Container>
            <h1>COMO FUNCIONA O <span>MÉTODO 5X</span></h1>
             <div className="x">
                <Card>
                    <img src={image} alt="" />
                    <div>
                    <p>transformando a alimentação</p>
                    <button>MÓDULO 1</button>
                    </div>
                    <footer>SAIBA MAIS</footer>
                </Card>
                <Card>
                    <img src={image} alt="" />
                    <div>
                    <p>transformando a alimentação</p>
                    <button>MÓDULO 1</button>
                    </div>
                    <footer>SAIBA MAIS</footer>
                </Card>
                <Card>
                    <img src={image} alt="" />
                    <div>
                    <p>transformando a alimentação</p>
                    <button>MÓDULO 1</button>
                    </div>
                    <footer>SAIBA MAIS</footer>
                </Card>
                <Card>
                    <img src={image} alt="" />
                    <div>
                    <p>transformando a alimentação</p>
                    <button>MÓDULO 1</button>
                    </div>
                    <footer>SAIBA MAIS</footer>
                </Card>
                
             </div>   
             <button className="bottom">QUERO COMEÇAR AGORA</button>
        </Container>
    )
}
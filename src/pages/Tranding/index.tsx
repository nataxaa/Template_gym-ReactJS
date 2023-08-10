import { Container } from "./style";
import img from '../../images/img.png'

export function Tranding(){
    return(
        <Container>
            <div className="cart-price">
                <div>

                <h2>INVESTIMENTO</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit voluptatem odio explicabo culpa repr
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit voluptatem odio explicabo culpa repr
                </p>
                <span>Por apenas R$1.940,00</span>
                <span style={{fontSize: 20}}>Ou 12x de <span style={{color:'red'}}>R$175,80</span></span>
                <button>QUERO COMEÇAR AGORA</button>
                </div>
            </div>
            <div className="area-image">
                <img className="logo" src={img} alt="" />
                <p>
                    Se em 7 dias você perceber que esse método não é para você, 
                    é só solicitar seu dinheiro de volta que a devolução será 
                    realizada de maneira simples e rápida, não precisa de justificativa.
                </p>
            </div>
        </Container>
    )
}
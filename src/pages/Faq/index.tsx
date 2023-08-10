import { Container } from "./style";

export function Faq(){
    return(
        <Container>
        <div className="faq">
        <p className="back">FAQ</p>
        <p className="w">Perguntas Frenquentes:</p>
        </div>
        <div>
            <ul>
                <li>Qual tempo de participação do método?</li>
                <li>Qual tempo de participação do método?</li>
                <li>Qual tempo de participação do método?</li>
                <li>Qual tempo de participação do método?</li>
            </ul>
        </div>
        </Container>
    )
}
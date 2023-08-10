import { Container } from "./style"
import image1 from '../../images/Vector3.png'
import image2 from '../../images/Group.png'
import image3 from '../../images/Vector2.png'
export function ForYou(){
    return(
        <Container>
            <h1>FEITO PARA VOCÊ</h1>
            <div style={{display:'flex', gap:'40px', alignItems:'center', justifyContent:'center'}}>
            <div className="area-icon" style={{marginTop:'15px'}}>
                <img src={image1} alt="" />
                <p>iniciante na busca do corpo perfeito.</p>
            </div>
            <div className="area-icon">
                <img src={image2} alt="" />
                <p>Praticante que não conseguem mais evoluir</p>
            </div>
            <div className="area-icon">
                <img src={image3} alt="" />
                <p>Atleta em evolução e em competições fisiculturistas</p>
            </div>
            </div>
            
        </Container>
    )
}
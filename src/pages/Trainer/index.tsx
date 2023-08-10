import { Container } from "./style";
import trainer from '../../images/trainer.png'
import luzes from '../../images/Luzes.png'
export function Trainer(){
    return(
        <Container>
            <div className="area-text">
                <h1>QUEM É SEU TREINADOR</h1>
                <p style={{width:'80%', marginBottom:'20px'}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi vitae tenetur 
                    ipsum itaque est corrupti molestias blanditiis, numquam sit et 
                    voluptatem voluptatibus optio culpa mollitia iste assumenda aperiam expedita aut.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi vitae tenetur 
                    ipsum itaque est corrupti molestias blanditiis, numquam sit et 
                    voluptatem voluptatibus optio culpa mollitia iste assumenda aperiam expedita aut.
                </p>
                <div className="informations">
                    <p style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                        <span className="span">+200</span>
                        VIDAS TRANSFORMADAS
                    </p>
                    <p style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                        <span className="span">+14</span>
                        ATLETAS PROFISSIONAIS
                    </p>
                    <p style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                        <span className="span">+8</span>
                        FILIAIS CONSTRUIDAS
                    </p>
                </div>
            </div>
            <div className="area-image">
                <img src={trainer} alt="" />
                <img className="luzes" src={luzes} alt="" />
            </div>
        </Container>
    )
}
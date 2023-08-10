import { styled } from "styled-components";
import image from '../../images/card1.png'


export const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
h1{
    font-size: 35px;
    margin-bottom: 3rem;
}
span{
    color: var(--red-primary);
}

button.bottom{
    background-color: var(--red-secundary);
    color: var(--white);
    padding: 8px 25px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}


div.x{
    display: flex;
    gap: 10px;
    margin-top: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
}


`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius:4px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -70px;
        width: 100%;
       margin-bottom:15px;

        button{
            background-color: var(--red-secundary);
            color: var(--white);
            padding: 5px 25px;
            border: none;
            border-radius: 100px;
        }
    }
    footer{
        background-color: var(--red-secundary);
        color: var(--white);
        width: 100%;
        padding: 5px 0;
        text-align: center;
        
    }
    img{
        object-fit: cover;
        width:15rem ;
    }

`
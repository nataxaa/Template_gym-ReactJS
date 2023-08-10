import { styled } from "styled-components";


export const Container = styled.div`
    height: 100vh;
    padding: 20px 30px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    h2{
        border-bottom: 1px solid var(--red-primary);
        width: fit-content;
    }
    div.cart-price{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        div{
            width: 23rem;
            text-align: center;
            gap: 10px;
            display:flex ;
            flex-direction: column;
            align-items: center;
            border: 1px solid var(--red-primary);
            padding: 20px;
            background-color:var(--black-secundary); 
            border-radius: 5px;
        }
        button{
            background-color: var(--red-secundary);
            color: var(--white);
            padding: 10px 25px;
            border: none;
            border-radius: 5px;
        }
    }
    div.area-image{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        p{
            width: 50%;
        }
    }
    img.logo{
        width: 10rem;
    }

`
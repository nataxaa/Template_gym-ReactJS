import { styled } from "styled-components";

export const Container = styled.div`
    padding: 0 20px;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    h1{
        margin-bottom: 20px;
    }
    div.area-text{
        width: fit-content;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
        span.span{
            color: var(--red-primary);
            font-size: 20px;
            font-weight: bold;
        }
        div.informations{
            display:flex;
            align-items: center;
           gap: 20px;
            text-align: center;
            width: 50%;
        }
    }
    div.area-image{
        position: relative;
        margin-top:-30rem;  
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 80%;
        }
        img.luzes{
            width: 40rem;
            margin-left: -4rem ;
            margin-top: 10rem;
            
        }
    }
    

`
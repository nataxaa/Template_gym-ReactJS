import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    height: 100vh;
    div.faq{
        position: relative;
        p{
            position: absolute;
            top: -5rem;
            right: 10rem;
            font-size: 10rem;
            color: var(--black-secundary);
        }
        p.w{
            font-size: 2rem;
            padding-top: 6rem;
            color: var(--white);
        }
        
    }
    ul{
        margin-left: 5rem;
        margin-top: 5rem;
        li{
            border-bottom: 1px solid var(--red-secundary);
            width: fit-content;
            padding: 5px 10px ;
        }
    }
        `
import styled from "styled-components";

export const Container = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-items: center;
height: 100vh;
padding: 0 4rem;
span{
    color: var(--red-primary)
}
button{
    background-color: var(--red-secundary);
    color: var(--white);
    padding: 10px 20px;
    border:none ;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.7;
    font-size: 20px;
    margin-top: 10px;
}
button:hover{
    opacity: 0.8;

}
h1{
    width: 35rem;
    font-size:40px;

}
img.back{
    width: 32rem;
    margin-left: -6rem;
    margin-top: -2rem;
}
img.front{
    width: 20rem;
}
img.luz{
    width: 38rem;
    margin-left: -10rem;
    margin-top: 4rem;
    z-index: 2;
}

div.area-images{
    position: relative;
    margin-top: -20rem;
    margin-left: -30rem;
    img{
        top: 0;
        left: 0;
        position: absolute;
    }
}


`
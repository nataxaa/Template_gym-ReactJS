import { styled } from "styled-components";

export const Container = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.swiper {
  margin-top:4rem ;
  width: 50%;
  z-index:0 ;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: var(--black-secundary);
  position:initial ;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 1px solid red;
}

div.area-card{
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  img.footer{
    position:fixed ;
    width:40px ;
    right: 0;
    bottom:0;
    
  }
}




`
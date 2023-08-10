import { Container } from "./style";
import image from '../../images/Rectangle.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import footerImage from '../../images/Vector.png'

export function About(){
    return(
        <Container>

        <h1>O QUE ESTÃO FALANDO DO NOSSO MÉTODO DE TREINAMENTO.</h1>
           
        
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={() => {}}
      navigation={true}
      >

        <SwiperSlide>

        <div className="area-card" >
            <div style={{display:'flex', gap:'15px'}} className='area-user'>
                <img src={image} alt="Slide 1" />
                <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign:'left'}}>
                    <span>Fernando</span>
                    <span style={{color: 'red'}}>Fisiculturista</span>
                </p>
            </div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laudantium natus itaque fugiat 
               dignissimos dolorem, reiciendis ea! Temporibus harum a aperiam ducimus nobis
            </p>
            <img className="footer" src={footerImage} alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="area-card" >
            <div style={{display:'flex', gap:'15px'}} className='area-user'>
                <img src={image} alt="Slide 1" />
                <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign:'left'}}>
                    <span>Fernando</span>
                    <span style={{color: 'red'}}>Fisiculturista</span>
                </p>
            </div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laudantium natus itaque fugiat 
               dignissimos dolorem, reiciendis ea! Temporibus harum a aperiam ducimus nobis
            </p>
            <img className="footer" src={footerImage} alt="" />
        </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className="area-card" >
            <div style={{display:'flex', gap:'15px'}} className='area-user'>
                <img src={image} alt="Slide 1" />
                <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign:'left'}}>
                    <span>Fernando</span>
                    <span style={{color: 'red'}}>Fisiculturista</span>
                </p>
            </div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laudantium natus itaque fugiat 
               dignissimos dolorem, reiciendis ea! Temporibus harum a aperiam ducimus nobis
            </p>
            <img className="footer" src={footerImage} alt="" />
        </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className="area-card" >
            <div style={{display:'flex', gap:'15px'}} className='area-user'>
                <img src={image} alt="Slide 1" />
                <p style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign:'left'}}>
                    <span>Fernando</span>
                    <span style={{color: 'red'}}>Fisiculturista</span>
                </p>
            </div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non laudantium natus itaque fugiat 
               dignissimos dolorem, reiciendis ea! Temporibus harum a aperiam ducimus nobis
            </p>
            <img className="footer" src={footerImage} alt="" />
        </div>
        </SwiperSlide>
      </Swiper>
      
      </Container>
      
    )
}
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickCarousel.css'
import image from '../../images/Rectangle.png'
import footerImage from '../../images/Vector.png'
const SlickCarousel = () => {
  const settings = {
    dots: true, // Mostrar os pontos de navegação
    infinite: true, // Navegação infinita
    speed: 1000, // Velocidade da animação
    slidesToShow: 2, // Quantidade de slides visíveis
    slidesToScroll: 1 // Quantidade de slides para avançar/retroceder
  };

  return (
      
      <div className="slick-carousel-container">
      <Slider {...settings}>
        <div style={{padding:'10px'}}>
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
            <img style={{position:'relative', bottom: '0', left: '0'}} src={footerImage} alt="" />
        </div>

        <div style={{padding:'10px'}}>
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
            <img style={{position:'relative', bottom: '0', left: '0'}} src={footerImage} alt="" />
        </div>

        <div style={{padding:'10px'}}>
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
            <img style={{position:'relative', bottom: '0', left: '0'}} src={footerImage} alt="" />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
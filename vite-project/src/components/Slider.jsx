import React, { useRef } from 'react';
import '../styles/Home.css'; // Importing CSS styles
import card1 from '../images/card1.webp'; // Importing image resources
import card2 from '../images/card2.avif';
import card3 from '../images/card3.webp';
import card4 from '../images/card4.avif';
import card5 from '../images/card5.webp';
import card6 from '../images/card6.webp';
import card7 from '../images/card7.jpg';
import card8 from '../images/card8.webp';


const Slider = () => {
  const carouselInnerRef = useRef(null); // Reference for carousel inner container

  // Function to scroll carousel right
  const moveRight = () => {
    if (carouselInnerRef.current) {
      carouselInnerRef.current.scrollLeft += carouselInnerRef.current.clientWidth;
    }
  };

   // Function to scroll carousel left
  const moveLeft = () => {
    if (carouselInnerRef.current) {
      carouselInnerRef.current.scrollLeft -= carouselInnerRef.current.clientWidth;
    }
  };

  return (
    <div className="slider">
      <h2>Featured Products</h2>
      <div id="carouselExampleControls" className="carousel">
        <div className="carousel-inner mb-5" ref={carouselInnerRef}>
          {/*carousel items*/}
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img className="card-img-top" src={card1} alt="dress"/> {/* Image for dress */}
                </div>
                <div className="card-body">
                  <h5 className="card-title">Chiffon A-line Dress (Red)</h5>
                  <p className="card-text">This dress made using only the finest super combed material. These are
                    lightweight, breathable, and soften with every wear, a perfect match for any outfit and any
                    occasion.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card2} className="card-img-top" alt="pant"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Cotton Relaxed Ankle Pants</h5>
                  <p className="card-text">Versatile pants for relaxing at home or wearing out and about. Comfortable 100%
                    cotton.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card4} className="card-img-top" alt="shirt"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Mens Printed Casual Shirt</h5>
                  <p className="card-text">expand your collection of casual staples with this modish shirt from showoff.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card3} className="card-img-top" alt="skirt"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pleated Midi Skirt</h5>
                  <p className="card-text">Unveil the magic of our Wardrobe midi skirt - the epitome of boho-chic
                    sophistication.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card5} className="card-img-top" alt="hoody"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Print Hoodies</h5>
                  <p className="card-text">You'll love the cosiness and design of this super-modish zip-up from showoff. you
                    can match this piece with your favourite t-shirt, dark denims, and sneakers when you're going to run
                    errands.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card6} className="card-img-top" alt="kidshortsset"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Boys Multicolor All-Over Print Shirt and Shorts Set</h5>
                  <p className="card-text">Features top material 100 polyester bottom material 100 polyester fit type regular the actual product may differ slightly in color from the one illustrated in the images. </p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card7} className="card-img-top" alt="girltop"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Nauti Nati Girls Pink Checked Top with Shorts</h5>
                  <p className="card-text">Nauti Nati Presents To You This Trendy Girls Dress For Your Lil Princess. This Square-neck, Multi-coloured Top And Shorts Set Is Perfect To Wear On Any Given Occasion.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card">
                <div className="image-wrapper">
                  <img src={card8} className="card-img-top" alt="greyshirt"/>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Funday Fashion Women Solid Casual Grey Shirt</h5>
                  <p className="card-text">Fit Is Boxy. Style Code Is 4868-70. Pattern Is Solid. Reversible Is No. Hem Is Curved. Pack Of Is 1. Color Is Grey. Fabric Care Is Gentle Machine Wash.</p>
                  <a href="#" className="btn btn-primary button"><span><i className="fa-solid fa-cart-shopping"></i></span>Add
                    to cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel navigation buttons */}
        <button className="carousel-control-prev" type="button" onClick={moveLeft}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={moveRight}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;


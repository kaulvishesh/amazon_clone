import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
            <img
            className="home__Image"
            src="https://cdn.pixabay.com/photo/2019/01/24/09/37/shoes-3952048_960_720.jpg" alt="img"
            ></img>
            <div className="home__Row">
              
                <Product id={1213123} title="Balenciaga runners" price={3500} image="https://balenciaga.dam.kering.com/m/4ca5d85929eac467/Large-656063W3RA11000_F.jpg?v=3" rating={4}  />           
                <Product id={1246343} title="Air Jordan 1 Mid SE" price={10025} image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/87afecf6-fc6c-430a-a66f-2f190efe3a84/air-jordan-1-mid-se-shoe-zgPD6z.png" rating={5} /> 
              
            </div>
            <div className="home__Row">
                <Product id={1554523} title="Nike Air Vapormax Evo SE" price={18965} image="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/69eb7d20-3d64-4012-b8d8-c13317a15253/air-vapormax-evo-se-shoe-74N0V6.png" rating={5} /> 
                <Product id={8798863} title="UNISEX ADIDAS ORIGINALS MARATHON 86 SPZL SHOES" price={12999} image="https://content.adidas.co.in/static/Product-H03893/adidas_H03893_1.jpg.zoom" rating={5} /> 
                <Product id={1256533} title="ADIDAS Men White & Navy Leather CAFLAIRE Sneakers" price={3639} image="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10395773/2020/3/13/433ea119-3234-44ef-aef0-cab880a3c8781584100424923-ADIDAS-Men-White--Navy-Leather-CAFLAIRE-Tennis-Shoes-4515841-4.jpg" rating={3} />           
            </div>
            <div className="home__Row">
                <Product id={9990823} title="Men's Gucci Basket sneaker" price={50000} image="https://media.gucci.com/style/White_Center_0_0_250x170/1621612806/661303_2SH90_1072_001_100_0000_Light-Mens-Gucci-Basket-sneaker.jpg" rating={5} /> 
            </div>
      </div>
    </div>
  );
}

export default Home;

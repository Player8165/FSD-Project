import React from 'react';

export default function CarouselComponent() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner" id="carousel">
        <div className="carousel-caption" style={{ zIndex: 2 }}>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark btn-info" type="submit">Search</button>
          </form>
        </div>
        <div className="carousel-item active">
          <img src="https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg" className="d-block w-100" style={{ filter: "brightness(55%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2023/01/go-GettyImages-1238187159-920x609.jpg" className="d-block w-100" style={{ filter: "brightness(55%)" }}  alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/736x/a1/9e/a4/a19ea4211403312d4eb63039d86dc56a.jpg" className="d-block w-100" style={{ filter: "brightness(55%)" }}  alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
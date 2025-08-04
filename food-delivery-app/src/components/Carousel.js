import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2023/01/go-GettyImages-1238187159-920x609.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/a1/9e/a4/a19ea4211403312d4eb63039d86dc56a.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
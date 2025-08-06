import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <Card />
          </div>
          <div className='col-md-4 mb-4'>
            <Card />
          </div>
          <div className='col-md-4 mb-4'>
            <Card />
          </div>
          <div className='col-md-4 mb-4'>
            <Card />
          </div>
          <div className='col-md-4 mb-4'>
            <Card />
          </div>
          <div className='col-md-4 mb-4'>
            <Card />
          </div>
          {/* Add more <Card /> in more columns as needed */}
        </div>
      </div>

      <div><Footer /></div>
    </div>
  );
}
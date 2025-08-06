import React from "react";

export default function Card() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px", minHeight: "360px", padding: "10px" }}>
        <img
          className="card-img-top"
          src="https://www.licious.in/blog/wp-content/uploads/2021/09/shutterstock_1650877375-750x750.jpg"
          alt="Food"
          style={{ objectFit: "cover", height: "160px" }}
        />
        <div className="card-body d-flex flex-column justify-content-between" style={{ height: "170px" }}>
          <div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some imp text</p>
          </div>
          <div className="mt-2">
            <div className="d-flex align-items-center mb-2">
              <select className="form-select me-2 bg-info rounded" style={{ width: "70px" }}>
                {Array.from({ length: 6 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select className="form-select bg-info rounded" style={{ width: "90px" }}>
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
            </div>
            <div className="fs-5 fw-bold">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
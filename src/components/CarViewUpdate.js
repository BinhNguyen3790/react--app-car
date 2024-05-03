import { Component } from "react";

import ArrayFeature from "../data/arrayFeatures.json";

import ArrayWheels from "../data/wheels.json";

class CarViewUpdate extends Component {
  state = {
    id: 1,
    title: "Crystal Black",
    type: "Pearl",
    img: "./assets/imgs/icons/icon-black.jpg",
    srcImg: "./assets/imgs/images-black/images-black-1/",
    color: "Black",
    price: "19,550",
    engineType: "In-Line 4-Cylinder",
    displacement: "1996 cc",
    horsepower: "158 @ 6500 rpm",
    torque: "138 lb-ft @ 4200 rpm",
    redline: "6700 rpm",
    wheels: [
      {
        idWheel: 1,
        srcImg: "./assets/imgs/images-black/images-black-1/",
      },
      {
        idWheel: 2,
        srcImg: "./assets/imgs/images-black/images-black-2/",
      },
      {
        idWheel: 3,
        srcImg: "./assets/imgs/images-black/images-black-3/",
      },
    ],
  };

  componentDidMount = () => {
    let scriptSrc = document.createElement("script");
    scriptSrc.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js";
    document.querySelector("#renderScript").appendChild(scriptSrc);
  };

  componentDidUpdate = () => {
    document.querySelector("#currentCar").innerHTML = "";
    let scriptSrc = document.createElement("script");
    scriptSrc.src = "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";

    document.querySelector("#renderScript").innerHTML = "";
    document.querySelector("#renderScript").appendChild(scriptSrc);
  };

  renderCar = (newCar) => {
    this.setState(newCar);
  };

  renderCarType = () => {
    return ArrayFeature.map((type, index) => {
      return (
        <li
          key={index}
          onClick={() => {
            this.renderCar(type);
          }}
          className="list-group-item py-3"
          style={{ cursor: "pointer" }}
        >
          <div className="row">
            <div className="col-3">
              <img className="w-100" alt="color-car" src={type.img} />
            </div>
            <div className="col-9">
              <h3>{type.title}</h3>
              <p>{type.type}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  renderWheels = () => {
    return ArrayWheels.map((wheel, index) => {
      return (
        <li key={index} className="list-group-item">
          <div className="row">
            <div className="col-3">
              <img className="w-100" src={wheel.img} alt={wheel.title}></img>
            </div>
            <div className="col-9">
              <p>{wheel.title}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-9">
            <div id="currentCar" className="cloudimage-360" data-folder={this.state.srcImg} data-filename="civic-{index}.jpg" data-amount="8"></div>
            <div id="renderScript"></div>

            <div className="card mt-4">
              <div className="card-header">See more Feature</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Color</td>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>$19,555</td>
                    </tr>
                    <tr>
                      <td>Engine Type</td>
                      <td>In-Line 4-Cylinder</td>
                    </tr>
                    <tr>
                      <td>Displacement</td>
                      <td>1996 cc</td>
                    </tr>
                    <tr>
                      <td>Horsepower</td>
                      <td>158 @ 6500 rpm</td>
                    </tr>
                    <tr>
                      <td>Torque</td>
                      <td>138 lb-ft @ 4200 rpm</td>
                    </tr>
                    <tr>
                      <td>Redline</td>
                      <td>6700 rpm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">Chose color</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">{this.renderCarType()}</ul>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">Wheels</div>
              <div className="card-body">
                <ul className="list-group">{this.renderWheels()}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarViewUpdate;

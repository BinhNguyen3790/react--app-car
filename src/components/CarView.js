import { Component } from "react";

class CarView extends Component {
  state = {
    img: require("../assets/imgs/products/black-car.jpg"),
    color: "Black",
    price: "$19,555",
  };

  handleChange = (newImg, newColor, newPrice) => {
    let newState = {
      img: newImg,
      color: newColor,
      price: newPrice
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-9">
            <img className="w-100" src={this.state.img} alt="car-img" />
            <div className="card mt-4">
              <div className="card-header">See more Feature</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Color</td>
                      <td>{this.state.color}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{this.state.price}</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
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
                <ul className="list-group list-group-flush">
                  <li
                    onClick={() => {
                      this.handleChange(require("../assets/imgs/products/black-car.jpg"), "Black", "$19,555");
                    }}
                    className="list-group-item py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <img className="w-100" alt="color-car" src={require("../assets/imgs/icons/icon-black.jpg")} />
                      </div>
                      <div className="col-9">
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                      </div>
                    </div>
                  </li>
                  <li
                    onClick={() => {
                      this.handleChange(require("../assets/imgs/products/red-car.jpg"), "Red", "$19,000");
                    }}
                    className="list-group-item py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <img className="w-100" alt="color-car" src={require("../assets/imgs/icons/icon-red.jpg")} />
                      </div>
                      <div className="col-9">
                        <h3>Crystal Red</h3>
                        <p>Metalic</p>
                      </div>
                    </div>
                  </li>
                  <li
                    onClick={() => {
                      this.handleChange(require("../assets/imgs/products/silver-car.jpg"), "Silver", "$18,555");
                    }}
                    className="list-group-item py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <img className="w-100" alt="color-car" src={require("../assets/imgs/icons/icon-silver.jpg")} />
                      </div>
                      <div className="col-9">
                        <h3>Crystal Silver</h3>
                        <p>Metalic</p>
                      </div>
                    </div>
                  </li>
                  <li
                    onClick={() => {
                      this.handleChange(require("../assets/imgs/products/steel-car.jpg"), "Steel", "$20,000");
                    }}
                    className="list-group-item py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="row">
                      <div className="col-3">
                        <img className="w-100" alt="color-car" src={require("../assets/imgs/icons/icon-steel.jpg")} />
                      </div>
                      <div className="col-9">
                        <h3>Crystal Steel</h3>
                        <p>Metalic</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarView;

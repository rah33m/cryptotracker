import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "cad": {
        setCurrency({ name: "cad", symbol: "C$" });
        break;
      }
      case "sgd": {
        setCurrency({ name: "sgd", symbol: "S$" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="cad">CAD</option>
          <option value="sgd">SGD</option>
        </select>
        <button>
          Sign up <img src={arrow_icon} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import logo from "../img/logo.svg";

export default function Logo() {
    return (
      <div className="logo">
        <img src={logo} alt="React logo" className="logo-img" />
        <h3 className="logo-text">ReactFacts</h3>
      </div>
    )
}
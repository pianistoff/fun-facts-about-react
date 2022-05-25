import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <Logo />
  )
}

function Logo() {
  return (
    <img src={logo} alt="React logo" className="logo-img" />
  )
}

function Main() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

function App() {
    return (
    <>
      <Header />
      <Main />
    </>
    )
}

export default App;

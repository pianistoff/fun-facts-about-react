import logo from "./logo.svg";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
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
      <h1 className="title">Fun facts about React</h1>
      <ul>
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 100K stars on GitHub</li>
        <li className="list-item">Is maintained by Facebook</li>
        <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
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

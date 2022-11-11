//import logo from './logo.svg';
import './App.css';
import Logo from './components/img/logo.png'

export default function App() {

  const channel = "Canal Nerdzagem"
  const messenger = "Passo a passo de diversos jogos"

  
  return (

    <section>

      <header>
        <p>Channel: {channel}</p>
        <p>{'Description: ' + messenger}</p>
      </header>

      <div>
        <img src = {Logo} />
        <br />
        <img src = '/img/logo.png' />
      </div>

    </section>

  );

}
import React, { useRef } from 'react';
import './App.css';
import logo from './logo.svg'
import reactLogo from './reactjs-icon.svg'
import davinci from './dvc.jpg';

function App() {

  const authorRef = useRef<HTMLElement>(null)
  const webRef = useRef<HTMLElement>(null)
  const downloadRef = useRef<HTMLElement>(null)

  return (
    <div className="app">
      <header className="header">
        <img className='logo' src={logo} alt='FEI logo'></img>
        <h1>MSAP</h1>
        <ul className='menu'>
          <li className='menu-item'><a onClick={() => authorRef.current?.scrollIntoView({ behavior: 'smooth' })}>Autor a Web</a></li>
          <li className='menu-item'><a onClick={() => webRef.current?.scrollIntoView({ behavior: 'smooth' })}>Video</a></li>
          <li className='menu-item'><a onClick={() => downloadRef.current?.scrollIntoView({ behavior: 'smooth' })}>Na stiahnutie</a></li>
        </ul>
      </header>
      <section className='video'>
        <iframe
          width='100%'
          height='100%'
          src="https://www.youtube.com/embed/1Lmdb9WOASM"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      </section>
      <section ref={authorRef} className='author'>
        <div>
          <h1>O autorovi a webovej stránke</h1>
          <p>Na úvod sa predstavím. Moje meno je Adam Vician, som študent vysokej školy STU v Bratislave na fakute elektrotechniky a informatiky. Študujem odbor telekomninikácie a som aktuálne v poslednom semestri 3. ročníka bakalárskeho štúdia. Táto webová stránka spolu aj s priloženým videom je riešením semestrálneho zadania predmutu MSAP. Web je písaný vo frameworku React, doploynutý pomovou technógie Docker na server z DigitalOceanu. </p>
          <p>PS: Už sú to 3 roky od vtedy čo som robil web stránky tak si ešte len oprašujem skúsenosti. Primárne sa teraz venujem mobilným aplikáciám. Ale ak by ste mali zájuem sa pozrieť na moje portfólio tak prikladám ešte nejaké weby čo som robil 3-4 roky dozadu v čistom html, css a php. Vtedy som ešte neovládal JS :) [Overiť si ma môžete tak že si otvoríte na zmienených stránkach chrome dev tools a nájdete meta tag s názvom autor v hlavicke html]</p>
          <p><a href={'http://www.deliciouscitytours.com/'}>www.deliciouscitytours.com</a></p>
          <p><a href={'https://www.proglance.sk/'}>www.proglance.sk</a></p>
        </div>
        <img className='react-logo' src={reactLogo} alt='React logo'></img>
      </section>
      <section ref={webRef} className='about light'>
        <img className='dvc' src={davinci} alt='React logo'></img>
        <div>
          <h1>O videu</h1>
          <p>Videoprezentácia je na tému softwarovej bezpečnosti. Toto video bolo mojím riešením zadania z predmetu EMAR v 4 semestri môjho štúdia a rozhodol som sa ho použiť aj ako riešenie tohoto zadania. Bohužial video nespĺňa všetky požadované body zadania ale rozhodol som sa ho použiť aj tak, lebo si myslím že téma, výskum za tou témou a celková náučná hodnota videa može nahradť niektoré chýbajúce body zadania. (Tu by som chcel spomenúť že video spĺňa väčšinu bodov.)</p>
          <p>Video bolo zaznamenané pomocu môjho telefónu a pomocou programo OBS. Tieto dva záznamy boli následne upravované v programe DaVicni Resolve v ktorom bolo do videa pridnaná hudba, titulky a iné efekty. Následne bolo video vyrenderované do požadovanej kvality a nahrané na YouTube.</p>
          <p>Ďalšie dodatočné informácie ohľadne videa alebo jeho témy sa dajú dohľadať v obsahu videa na platforme YouTube.</p>
        </div>
      </section>
      <section ref={downloadRef} className='download'>
        <h1>Súbory na stiahnutie</h1>
        <p>Všetky zdrojáky a súbory sú dostuné na stiahnutie na GitHube.</p>
        <p>Všetok obsah spadá pod licenciu MIT.</p>
        <button className='button'><span>Stiahnuť tu</span></button>
      </section>
      <footer className='footer'>
        <span>Adam Vician - 2021</span>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import JamieLeeCurtis from './Szereplokartyak/1';
import NancyKyes from './Szereplokartyak/2';
import DonaldPleasence from './Szereplokartyak/3';
import Nick from './Szereplokartyak/4';


const NavigationExample = () => {
  // Állapot a jelenlegi tartalom követésére
  const [activeSection, setActiveSection] = useState('section1'); // Kezdetben 'section1' a kiválasztott

  // Funkció a navigációs gombok kattintásának kezelésére
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>

    <div className="app-container">
      {/* Navigációs menü */}
      <nav className='navbarF'>
        <ul>
          <li>
            <button id="buttonF"
              onClick={() => handleNavClick('section1')}
              className={activeSection === 'section1' ? 'active' : ''}
            >
              Alaptörténet
            </button>
          </li>
          <li>
            <button id='buttonF'
              onClick={() => handleNavClick('section2')}
              className={activeSection === 'section2' ? 'active' : ''}
            >
              Szereplők
            </button>
          </li>
        </ul>
      </nav>
      <h1 className="FI1">Halloween Franchise</h1>

      {/* Tartalom megjelenítése */}
      <div className="content">
        {activeSection === 'section1' && (
          <div>
            <h2 className='FI2'>Alaptörténet</h2>
            <div className='T11'>
              <p className='T1'>1963-ban halloween éjszakáján egy fiatal lány, Judith lefekszik barátjával. Az aktus után a fiú elmegy, valaki pedig egy álarcban beoson a szobába, és több késszúrással végez a lánnyal. Ezután kimegy a ház elé, ahol egy házaspár megszólítja őt, és leveszik a maszkot az arcáról. Kiderül hogy a gyilkos a hatéves Michael, Judith öccse.

15 évvel később, 1978. október 30.-án egy esős éjszakán, egy pszichológus és egy ápolónő a Smith's Grove-i elmegyógyintézetbe tart. Útjuk során megtudjuk hogy Dr. Loomis, Michael Myers kezelőorvosa. Odaérvén a szanatóriumba, látják hogy a betegek szabadon járkálnak, kint az udvaron. Loomis épp belépne az intézet kapuján, amikor az egyik beteg ráugrik az autóra és az ápolónő Marion, ijedtében kiszáll abból, a férfi pedig elhajt az éjszakában. Megtudjuk, hogy Myers szökött meg. </p>
            </div>
          </div>
        )}

        {activeSection === 'section2' && (
          <div>
            <h2 className='FI2'>Szereplők</h2>
            <div className='Kartyak'>
              <p className='CardsEZ'><JamieLeeCurtis/></p>
              <p className='CardsEZ'><NancyKyes/></p>
              <p className='CardsEZ'><DonaldPleasence/></p>
              <p className='CardsEZ'><Nick/></p>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default NavigationExample;

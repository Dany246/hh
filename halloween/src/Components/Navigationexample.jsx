import React, { useState } from 'react';


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
              Szekció 1
            </button>
          </li>
          <li>
            <button id='buttonF'
              onClick={() => handleNavClick('section2')}
              className={activeSection === 'section2' ? 'active' : ''}
            >
              Szekció 2
            </button>
          </li>
          <li>
            <button id='buttonF'
              onClick={() => handleNavClick('section3')}
              className={activeSection === 'section3' ? 'active' : ''}
            >
              Szekció 3
            </button>
          </li>
          <li>
            <button id='buttonF'
              onClick={() => handleNavClick('section4')}
              className={activeSection === 'section4' ? 'active' : ''}
            >
              Szekció 4
            </button>
          </li>
        </ul>
      </nav>
      <h1 className="FI1">Halloween Franchise</h1>

      {/* Tartalom megjelenítése */}
      <div className="content">
        {activeSection === 'section1' && (
          <div>
            <h2 className='FI2'>Tartalom 1</h2>
            <p>Ez az első szekció tartalma, amely akkor jelenik meg, ha az első navigációs gombra kattintasz.</p>
          </div>
        )}

        {activeSection === 'section2' && (
          <div>
            <h2 className='FI2'>Tartalom 2</h2>
            <p>Ez a második szekció tartalma, amely akkor jelenik meg, ha a második navigációs gombra kattintasz.</p>
          </div>
        )}

        {activeSection === 'section3' && (
          <div>
            <h2 className='FI2'>Tartalom 3</h2>
            <p>Ez a harmadik szekció tartalma, amely akkor jelenik meg, ha a harmadik navigációs gombra kattintasz.</p>
          </div>
        )}

        {activeSection === 'section4' && (
          <div>
            <h2 className='FI2'>Tartalom 4</h2>
            <p>Ez a negyedik szekció tartalma, amely akkor jelenik meg, ha a negyedik navigációs gombra kattintasz.</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default NavigationExample;

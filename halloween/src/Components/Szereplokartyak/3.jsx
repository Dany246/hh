import React, { useState } from 'react';

const DonaldPleasence = () => {
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={styles.card}>
      <img
        src="../public/szereplok/Donald.jpg"
        alt="Card Image"
        style={styles.image}
      />
      <h3 className='KartyakNev'>Donald Pleasence</h3>
      <p className='KartyakNev2'>Dr. Sam Loomis</p>
      {showMore && (
        <p className='KartyakSzoveg'>
         1978-ban John Carpenter felajánlott számára egy szerepet készülő Halloween – A rémület éjszakája című filmjéhez. Noha eleinte nem akarta vállalni, végül a rendező filmjeit kedvelő lánya rábeszélésére beadta a derekát. Az eredetileg igen kis költségvetésű, napi horrornak szánt film hatalmas siker lett. Donald Pleasence viszont többé nem tudta magáról lerázni az okkult, kissé zavart hős képét. Meglepetésre a Halloween után többé nem volt képes komoly filmszerepeket kapni, a nyolcvanas évek során olcsó, „B” kategóriás horrorokban, okkult filmekben játszott leginkább. 
        </p>
      )}
      <button onClick={handleButtonClick} style={styles.button}>
        {showMore ? 'Kevesebb' : 'Több információ'}
      </button>
      <img
        src="../public/szereplok/Donald2.jpg"
        alt="Card Image"
        style={styles.image}
      />
    </div>
    
  );
};

const styles = {
  card: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#9d0c01',
  },
  image: {
    paddingTop: '10px',
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    marginTop: '10px',
    padding: '8px 15px',
    backgroundColor: '#000000',
    color: '#9d0c01',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default DonaldPleasence;


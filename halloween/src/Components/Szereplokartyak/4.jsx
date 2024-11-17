import React, { useState } from 'react';

const Nick= () => {
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={styles.card}>
      <img
        src="../public/szereplok/Nick.jpg"
        alt="Card Image"
        style={styles.image}
      />
      <h3 className='KartyakNev'>Nick Castle</h3>
      <p className='KartyakNev2'>Michael Myers</p>
      {showMore && (
        <p className='KartyakSzoveg'>
Nicholas Castle amerikai forgatókönyvíró, filmrendező és színész. Michael Myers szerepéről ismert John Carpenter Halloween című horrorfilmjében. Volt egy cameo-ja is, mint Myers a Halloweenben. Castle Carpenterrel együtt írta az Escape from New York-ot is.
        </p>
      )}
      <button onClick={handleButtonClick} style={styles.button}>
        {showMore ? 'Kevesebb' : 'Több információ'}
      </button>
      <img
        src="../public/szereplok/Nick2.jpg"
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

export default Nick;


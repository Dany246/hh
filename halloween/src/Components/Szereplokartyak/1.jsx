import React, { useState } from 'react';

const JamieLeeCurtis = () => {
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div style={styles.card}>
      <img
        src="../public/szereplok/jamielee.jpg"
        alt="Card Image"
        style={styles.image}
      />
      <h3 className='KartyakNev'>Jamie Lee Curtis</h3>
      <p className='KartyakNev2'>Lauri Strode</p>
      {showMore && (
        <p className='KartyakSzoveg'>
         Jamie Lee Curtis Oscar-, BAFTA-, valamint kétszeres Golden Globe-díjas amerikai színésznő, író. Laurie Strode szerepében debütált a mozivásznon John Carpenter Halloween – A rémület éjszakája című 1978-as horrorfilmjében, mellyel megalapozta Sikolykirálynő státuszát.
        </p>
      )}
      <button onClick={handleButtonClick} style={styles.button}>
        {showMore ? 'Kevesebb' : 'Több információ'}
      </button>
      <img
        src="../public/szereplok/Jamilee2.jpg"
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

export default JamieLeeCurtis;


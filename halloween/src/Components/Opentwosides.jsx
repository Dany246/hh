
const OpenTwoPages = () => {
  const openTwoPages = () => {
    // Első oldal új lapon
    window.open('https://www.facebook.com/tibordaniel.eri.1/?locale=hu_HU', '_blank');
    // Második oldal új lapon
    window.open('https://www.facebook.com/ezniezz?locale=hu_HU', '_blank');
  };

  return (
    <div>
      <button onClick={openTwoPages}>Két oldal megnyitása</button>
    </div>
  );
};

export default OpenTwoPages;
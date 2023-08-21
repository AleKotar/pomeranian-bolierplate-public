import './styles.css';

export function Exercise() {
  return (
    <div className="media-queries">
      <h1>media queries</h1>
      <div className="buttons-container">
        <div className="buttons">
          <button>pierwszy</button>
          <button>drogi</button>
        </div>
      </div>
      <div className="fonts">
        <h2>Header2</h2>
        <p>font2</p>
      </div>
      <div className="visible-in-print">
        <p>Ten tekst powinien by widoczny tylko w druu</p>
      </div>
      <div className="visible-on-mobile">
        <p>Ten tekst powinien być widoczny wyłącznie na telefonie</p>
      </div>
    </div>
  );
}

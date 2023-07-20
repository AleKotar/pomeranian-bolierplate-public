import './styles.css';
import { useEffect, useState } from 'react';
import Cookies from '/root/projects/pomeranian-bolierplate-public/src/App/Images/cookie.svg';

export function CookieBanner() {
  const currentBannerState = localStorage.getItem('cookie-banner'); // nie ma nic? 0 / false

  const [showBanner, setShowBanner] = useState(!currentBannerState);

  function hideBanner() {
    setShowBanner(0);

    localStorage.setItem('cookie-banner', 1);
  }

  if (!showBanner) {
    return null;
  }
  return (
    <div className="">
      <div className="overflow"></div>
      <div className="cookies-whole">
        <div className="cookies-flex">
          <div className="position-text-and-icon">
            <img src={Cookies} alt="Ikona Cookies" />
            <h3>Pozwól na pliki cookies</h3>
            <p>
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosowaćużycie do swoich
              preferencji. W tym celu kliknij przycisk po prawej stronie
              “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
          </div>
          <button onClick={hideBanner} className="button-w-porzadku">
            W porzadku
          </button>
          <button className="button-dopasuj-zgody">Dopasuj zgody</button>
        </div>
      </div>
    </div>
  );
}

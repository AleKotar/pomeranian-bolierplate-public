import './styles.css';

export function Exercise() {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = false;

  const testString1 = 'Short';
  const testString2 = 'ThisIsALongString';

  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18 && hasDriverLicense && hasCar) {
      return 'You can drive your car';
    } else if (age >= 18 && hasDriverLicense && !hasCar) {
      return 'you can drive a rental car';
    } else if (age >= 18 && !hasDriverLicense) {
      return 'You cant drive wiwthout driver license';
    } else {
      return 'you are too young to drive';
    }
  }

  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }

  function isStringShort(str) {
    if (str.length < 10) {
      return true, 'krotki';
    }
    return false, 'dlugi';
  }
  function PoleKola(r) {
    const area = Math.Pi * r * r;
  }

  return (
    <div>
      <p>{canDrive(age, hasDriverLicense, hasCar)}</p>
      {hasEnough(true) ? (
        <div>
          <p>Boolean</p>
          <div className="zadanie1">
            <p>zadanie1</p>
            <p>{canDrive(23, false, false)}</p>
          </div>
          <div className="zadanie2">
            <p>zadanie2</p>
            <p>{isStringShort(testString1)}</p>
            <p>{isStringShort(testString2)}</p>
          </div>
          <div className="zadanie3">
            <p>zadanie3</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

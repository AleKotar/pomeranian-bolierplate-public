import './styles.css';
import zdjecie from './zdjecie.jpg';

export function Exercise() {
  return (
    <div className="floats-wrapper">
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
        </p>
        <p className="floats-p-relative">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <div className="floats-div-relative">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.
          </p>
          <div className="floats-div-absolute">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div className="floats-img-p">
        <div>
          <img src={zdjecie} alt="bla" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="floats-gray-div">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.
        </p>
      </div>
      <div className="floats-button">
        <button>Zapisz SIę</button>
      </div>
    </div>
  );
}

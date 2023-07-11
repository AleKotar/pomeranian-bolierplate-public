import './styles.css';

export const Blog = () => {
  return (
    <>
      <div className="blog-post">
        <h4 className="blog-post-date">30-11-2022</h4>
        <h1 className="blog-post-header">
          Why are we so nostalgic for the 1990s?
        </h1>
        <p className="blog-post-text">
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <h2 className="blog-post-author">Radosława Majdan</h2>
        <h3 className="blog-post-job">Senior Marketing Specialist</h3>
      </div>

      <div className="blog-post">
        <h4 className="blog-post-date">30-11-2022</h4>
        <h1 className="blog-post-header">I make mistakes!</h1>
        <blockquote className="blog-post-text">
          “I’m selfish, impatient and a little insecure. I make mistakes, I am
          out of control and at times hard to handle. But if you can’t handle me
          at my worst, then you sure as hell don’t deserve me at my best.”
        </blockquote>
        <h5 className="blog-post-quote-author">Marilyn Monroe</h5>
        <h2 className="blog-post-author">Radosława Majdan</h2>
        <h3 className="blog-post-job">Senior Marketing Specialist</h3>
      </div>

      <div className="blog-post">
        <h4 className="blog-post-date">30-11-2022</h4>
        <h1 className="blog-post-header">
          18 Record-Breaking, Controversial, and Weird Facts{' '}
        </h1>
        <p className="blog-post-text">
          The death of Queen Elizabeth II on September 8 at the age of 96
          represents a monumental shift for the British monarchy and the people
          of England. Royals have died before, of course, but the Queen ruled
          for more than 70 years, and represented a certain stability and
          decorum that held the institution of the Royal Family together as it
          slowly grew more visibly anachronistic and battered by endless
          scandals.
        </p>
        <ul className="blog-post-list">
          <li className="blog-post-list-element">
            <a className="blog-post-link" href="www.wp.pl">
              WP.PL
            </a>
          </li>
          <li className="blog-post-list-element">
            <a className="blog-post-link" href="www.wp.pl">
              WP.PL2
            </a>
          </li>
          <li className="blog-post-list-element">
            <a className="blog-post-link" href="www.wp.pl">
              WP.PL3
            </a>
          </li>
        </ul>
        <h2 className="blog-post-author">Radosława Majdan</h2>
        <h3 className="blog-post-job">Senior Marketing Specialist</h3>
      </div>
    </>
  );
};

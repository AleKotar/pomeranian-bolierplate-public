import './styles.css';
import starlogo from '/root/projects/pomeranian-bolierplate-public/src/App/Images/star.svg';

export function Exercise() {
  return (
    <div>
      <h2>HTML Table</h2>

      <table className="table">
        <tr className="tr">
          <th className="th">Location</th>
          <th className="th">PLAYER_ID</th>
          <th className="th">Rating</th>
        </tr>
        <tr className="tr">
          <td>Cape Verde Islands</td>
          <td>100120</td>
          <td>
            <starlogo />
            <starlogo />
          </td>
        </tr>
        <tr className="tr">
          <td>Cape Verde Islands</td>
          <td>100122</td>
          <td>
            <starlogo />
            <starlogo />
            <starlogo />
            <starlogo />
          </td>
        </tr>
        <tr className="tr">
          <td>United States of America</td>
          <td>100123</td>
          <td>
            <starlogo />
            <starlogo />
          </td>
        </tr>
        <tr className="tr">
          <td>United States of America</td>
          <td>100124</td>
          <td>
            <starlogo />
            <starlogo />
            <starlogo />
            <starlogo />
            <starlogo />
          </td>
        </tr>
      </table>
    </div>
  );
}

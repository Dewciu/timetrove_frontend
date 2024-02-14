import { Link } from 'react-router-dom';
import PathConstants from './routes/pathConstants';

export default function Header() {
  return (
    <header>
      <div>
        <h1>
          <Link to={PathConstants.HOME}>TimeTrove</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={PathConstants.LOGIN}>Login</Link>
            </li>
            <li>
              <Link to={PathConstants.REGISTER}>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

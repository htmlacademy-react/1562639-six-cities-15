import {Link} from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage() : JSX.Element {
  return(
    <div className="page page--gray page--not-found not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="not-found__link" to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFoundPage;

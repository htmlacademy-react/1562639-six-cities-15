import { Link } from 'react-router-dom';
import './not-found-page.css';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--not-found not-found">
      <Helmet>
        <title>6 Cities - Page Not Found</title>
      </Helmet>
      <h1>404</h1>
      <p>Page not found</p>
      <Link className="not-found__link" to="/">
        Go back to the main page
      </Link>
    </div>
  );
}

export default NotFoundPage;

import './not-found-page.css';

function NotFoundPage() : JSX.Element {
  return(
    <div className="page page--gray page--not-found not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <a className="not-found__link" href="/">Вернуться на главную</a>
    </div>
  );
}

export default NotFoundPage;

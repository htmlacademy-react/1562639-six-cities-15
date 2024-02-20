import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  resultCount: number;
}

function App({resultCount} : AppPageProps): JSX.Element {
  return (
    <MainPage resultCount={resultCount} />
  );
}

export default App;

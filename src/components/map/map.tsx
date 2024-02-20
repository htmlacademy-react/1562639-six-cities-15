type MapEnvironment = {
  environment: string;
}

function Map({environment} : MapEnvironment) : JSX.Element {
  return (
    <section className={`${environment}__map map`} />
  );
}

export default Map;

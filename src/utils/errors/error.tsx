export const onErrorBoundary = (error: Error) => {
  return (
    <>
      <p>Something is wrong</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </>
  );
};

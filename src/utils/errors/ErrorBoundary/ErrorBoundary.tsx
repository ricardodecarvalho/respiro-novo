import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

export type ErrorBoundaryProps = React.PropsWithChildren<{
  onError: (error: Error) => JSX.Element;
}>;

export default function ErrorBoundary({
  onError,
  children,
}: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary fallbackRender={({ error }) => onError(error)}>
      {children}
    </ReactErrorBoundary>
  );
}

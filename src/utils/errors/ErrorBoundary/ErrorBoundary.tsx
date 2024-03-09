import { Flex } from '@radix-ui/themes';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

export type ErrorBoundaryProps = React.PropsWithChildren<{
  onError: (error: Error) => JSX.Element;
}>;

export default function ErrorBoundary({
  onError,
  children,
}: ErrorBoundaryProps) {
  return (
    <Flex direction="column" gap="3" align="center" justify="center">
      <ReactErrorBoundary fallbackRender={({ error }) => onError(error)}>
        {children}
      </ReactErrorBoundary>
    </Flex>
  );
}

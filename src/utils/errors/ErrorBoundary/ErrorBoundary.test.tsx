import { render, screen } from '@testing-library/react';

import ErrorBoundary from './ErrorBoundary';

const errorMessageTestId = 'the-error-message-test-id';

const setup = (ChildComponent: React.FC) => {
  render(
    <ErrorBoundary
      onError={(error) => (
        <div data-testid={errorMessageTestId}>{error.message}</div>
      )}
    >
      <ChildComponent />
    </ErrorBoundary>
  );
};

beforeAll(() => {
  /**
   * even though the error is handled by the error boundary
   * React still sends it to console.
   * We replace console.error to make tests output cleaner
   */
  console.error = () => '';
});

test('renders children normally when no error occurs', () => {
  const noErrorContent = 'There is no error';

  setup(function NoError() {
    return <div>{noErrorContent}</div>;
  });

  expect(screen.getByText(noErrorContent)).toBeInTheDocument();
});

test('renders error if inexistent callback is called', () => {
  const noErrorContent = 'There is no error';

  setup(function FutureAPITest() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).futureAPIStart();
    return <div>{noErrorContent}</div>;
  });

  const errorMessage = screen.getByTestId(errorMessageTestId);

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent(/futureAPIStart/);
  expect(screen.queryByText(noErrorContent)).not.toBeInTheDocument();
});

test('renders error if deep inexistent property is accessed', () => {
  setup(function InexistentPropTest() {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <div>{(window as any).inexistentProperty.deepInexistentProperty}</div>
    );
  });

  const errorMessage = screen.getByTestId(errorMessageTestId);

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent(/deepInexistentProperty/);
});

test('renders error if URI decoding fails', () => {
  setup(function URIDecodingTest() {
    return <div>{window.decodeURI('%sdfk')}</div>;
  });

  const errorMessage = screen.getByTestId(errorMessageTestId);

  expect(errorMessage).toBeInTheDocument();
  expect(errorMessage).toHaveTextContent('URI malformed');
});

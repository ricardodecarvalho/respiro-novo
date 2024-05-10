import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Callout, Code, Strong } from '@radix-ui/themes';

export const onErrorBoundary = (error: Error) => {
  return (
    <>
      <Callout.Root color='red' role='alert'>
        <Callout.Icon>
          <ExclamationTriangleIcon />
        </Callout.Icon>
        <Callout.Text>
          <Strong>Something is wrong</Strong>: <Code>{error.message}</Code>
        </Callout.Text>
      </Callout.Root>
    </>
  );
};

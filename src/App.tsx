import { Theme, Flex, Container } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useCookies } from 'react-cookie';

import './assets/css/App.css';

import { errors } from './utils';
import ErrorBoundary from './utils/errors/ErrorBoundary/ErrorBoundary';
import { Info, User } from './components';

function App() {
  const [cookies] = useCookies(['user']);
  console.log(cookies.user);
  return (
    <>
      <Theme
        accentColor="indigo"
        grayColor="gray"
        panelBackground="translucent"
        radius="medium"
      >
        <ErrorBoundary onError={errors.onErrorBoundary}>
          <Container size="4" width="100%">
            <Flex direction="column" gap="3">
              {!cookies.user && <User />}

              {cookies.user && <Info userData={cookies.user} />}
            </Flex>
          </Container>
        </ErrorBoundary>
      </Theme>
    </>
  );
}

export default App;

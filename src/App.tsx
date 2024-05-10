import { Theme, Flex, Container } from '@radix-ui/themes';
import { useCookies } from 'react-cookie';

import '@radix-ui/themes/styles.css';
import './assets/css/App.css';

import { errors } from './utils';
import ErrorBoundary from './utils/errors/ErrorBoundary/ErrorBoundary';
import { Info, User } from './components';

function App() {
  const [cookies] = useCookies(['user']);
  return (
    <>
      <Theme
        accentColor='indigo'
        grayColor='gray'
        panelBackground='translucent'
        radius='medium'
        hasBackground={false}
        appearance='light'
      >
        <ErrorBoundary onError={errors.onErrorBoundary}>
          <Container size='4'>
            <Flex direction='column' gap='3'>
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

import { RocketIcon } from '@radix-ui/react-icons';
import {
  Button,
  Card,
  Flex,
  Separator,
  Strong,
  Text,
  TextField,
} from '@radix-ui/themes';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';

export interface UserData {
  name: string;
  lastSmoked: string;
}

const User = () => {
  const [_, setCookie] = useCookies();
  const onSubmit = (data: UserData) => {
    setCookie('user', data, { path: '/', secure: true });
  };

  const onSubmitAllFields = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const fields = Array.prototype.slice
        .call(event.target)
        .filter((field) => field.name)
        .reduce(
          (form, { name, value }) => ({
            ...form,
            [name]: typeof value === 'string' ? value.trim() : value,
          }),
          {}
        );

      onSubmit(fields);
    },
    []
  );

  return (
    <Card variant='classic' style={{ width: '100%' }}>
      <form onSubmit={onSubmitAllFields}>
        <Flex gap={'3'} direction={'column'}>
          <Text as='span' weight='bold'>
            Olá! Vamos começar?
          </Text>
          <Text>
            Primeiro, <Strong>parabéns</Strong> por tomar a decisão de parar de
            fumar. Sabemos que não é fácil, mas você irá conseguir!
          </Text>
          <Separator size={'4'} />
          <Text as='label' weight='bold' htmlFor='name'>
            Como quer ser chamado?
          </Text>
          <TextField.Root
            variant='classic'
            id='name'
            name='name'
            size={'3'}
            autoComplete='off'
            required
          />

          <Text as='label' weight='bold' htmlFor='lastSmoked'>
            Quando fumou seu último cigarro?
          </Text>
          <TextField.Root
            variant='classic'
            id='lastSmoked'
            name='lastSmoked'
            size={'3'}
            type='date'
            required
          />

          <Button variant='classic' size={'3'}>
            Começar <RocketIcon />
          </Button>
        </Flex>
      </form>
    </Card>
  );
};

export default User;

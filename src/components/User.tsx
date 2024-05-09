import { RocketIcon } from '@radix-ui/react-icons';
import { Box, Button, Card, Flex, Text, TextField } from '@radix-ui/themes';
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

  const today = new Date();
  const formattedDate = today.toISOString().substring(0, 10);

  return (
    <>
      <Box width="100%">
        <Card variant="classic">
          <form onSubmit={onSubmitAllFields}>
            <Flex gap={'3'} direction={'column'}>
              <Text as="label" weight="bold" htmlFor="your-name" size={'6'}>
                Como quer ser chamado?
              </Text>
              <TextField.Input
                variant="classic"
                id="name"
                name="name"
                size={'3'}
              />
              <Text as="label" weight="bold" htmlFor="lastSmoked" size={'6'}>
                Quando fumou seu último cigarro?
              </Text>
              <TextField.Input
                variant="classic"
                id="lastSmoked"
                name="lastSmoked"
                size={'3'}
                type="date"
                defaultValue={formattedDate}
              />
              <Button variant="classic" size={'3'}>
                Começar <RocketIcon />
              </Button>
            </Flex>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default User;

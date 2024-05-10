import { AlertDialog, Button, Flex } from '@radix-ui/themes';
import { useCookies } from 'react-cookie';

const RemoveData = () => {
  const [_, __, removeCookie] = useCookies(['user']);

  const handleRemoveData = () => {
    removeCookie('user');
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color='red'>Editar dados</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth={'450px'}>
        <AlertDialog.Title>Editar dados</AlertDialog.Title>
        <AlertDialog.Description size='2'>
          Tem certeza? Os dados neste aplicativo serão removidos.
        </AlertDialog.Description>

        <Flex gap='3' mt='4' justify='end'>
          <AlertDialog.Cancel>
            <Button variant='soft' color='gray'>
              Cancelar
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant='solid' color='red' onClick={handleRemoveData}>
              Editar dados
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default RemoveData;

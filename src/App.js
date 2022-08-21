import { Button, Stack, Container, Form } from 'react-bootstrap';
import { Title } from './components';

const App = () => {

  return (
    <Container>
      {/* Form Elements */}
      <Title title={"Lead Generator"}/>

      {/* Action Buttons */}
      <Stack gap={2} className="col-md-5 mx-auto">
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
    </Container>
  );
}

export default App;

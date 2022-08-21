import React from 'react';
import { Button, Stack, Container } from 'react-bootstrap';
import { Email, Title, Input, MobileNo, RadioButtons, CheckBoxes, DropDown } from './components';

const App = () => {

  const [state, setState] = React.useState({
    name: "",
    email: "",
    mobileNo: "",
    gender: "",
    languagesKnown: [],
    state: ""
  });

  const updateState = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const updateLanguagesKnown = (value) => {
    let languagesKnown = state.languagesKnown;
    languagesKnown.push(value);
    updateState("languagesKnown", languagesKnown);
  }

  return (
    <Container>
      <Stack gap={2} className="col-md-5 mx-auto">
        {/* Form Title */}
        <Title title={"Lead Generator"} />

        {/* Form Elements */}
        {/* Full Name */}
        <Input
          label='Full Name'
          placeholder='Name'
          value={state.name}
          onChange={(value) => updateState("name", value)}
        />

        {/* Email */}
        <Email
          label='Email'
          value={state.email}
          onChange={(value) => updateState("email", value)}
        />

        {/* Mobile No. */}
        <MobileNo
          label='Mobile No'
          value={state.mobileNo}
          onChange={(value) => updateState("mobileNo", value)}
        />

        {/* Gender */}
        <RadioButtons
          label='Gender'
          buttons={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Others", value: "Others" },
          ]}
          value={state.gender}
          onChange={(value) => updateState("gender", value)}
        />

        {/* Languages Known */}
        <CheckBoxes
          label='Languages Known'
          buttons={[
            { label: "Tamil", value: "Tamil" },
            { label: "English", value: "English" },
            { label: "French", value: "French" },
          ]}
          value={state.languagesKnown}
          onChange={updateLanguagesKnown}
        />

        {/* State */}
        <DropDown
          label='State'
          placeholder='Select your state'
          options={[
            { label: "Tamilnadu", value: "Tamilnadu" },
            { label: "Kerala", value: "Kerala" },
            { label: "Andra Pradesh", value: "Andra Pradesh" },
            { label: "Karnataka", value: "Karnataka" },
            { label: "Telugana", value: "Telugana" },
            { label: "Maharastra", value: "Maharastra" },
          ]}
          value={state.state}
          onChange={(value) => updateState("state", value)}
        />

        {/* Action Buttons */}
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
    </Container>
  );
}

export default App;

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { uuid } from 'uuidv4';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const Style = {
  margin: 1,
};

export default function Form(props) {
    const [priority, setPriority] = useState("red");
  const [form, setForm] = useState({
    name: "",
    desc: "",
    time: "",
    priority: priority
  });

  const handleRadioChange = (e) => {
    setPriority(e.target.value);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.setItems([
      ...props.items,
      {
        name: form.name,
        desc: form.desc,
        time: form.time,
        priority: priority,
        uid: uuid()
      },
    ]);
  };
  return (
    <FormStyled onSubmit={handleSubmit} onChange={handleChange}>
      <TextField
        sx={Style}
        id="standard-basic"
        label="Task's name"
        name="name"
        variant="standard"
      />
      <TextField
        sx={Style}
        id="standard-basic"
        label="Task's description"
        name="desc"
        variant="standard"
      />
      <TextField
        sx={Style}
        id="standard-basic"
        label="Task's completion time"
        name="time"
        variant="standard"
      />

      <RadioGroup value={priority} onChange={handleRadioChange}>
        <FormControlLabel value="red" control={<Radio />} label="High" />
        <FormControlLabel value="orange" control={<Radio />} label="Medium" />
        <FormControlLabel value="green" control={<Radio />} label="Low" />
      </RadioGroup>

      <Button type="submit" sx={Style} variant="outlined">
        Push the task
      </Button>
    </FormStyled>
  );
}

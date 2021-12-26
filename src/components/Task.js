import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { useState } from "react";

const Content = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`;
const IconsTable = styled.div`
  display: flex;
`;
const PriorityIcon = styled.div`
  width: 10px;
  height: 10px;
  flex: 1;
`;
const RemoveIcon = styled.div`
  margin: 1em;
  width: 30px;
  height: 30px;
  background-image: url(/remove.svg);
  background-repeat: no-repeat;
  cursor: pointer;
`;
const Title = styled.h1`
  font-size: 2ch;
  font-weight: 450;
  white-space: nowrap;
`;
const Description = styled.h3`
  font-size: 1.5ch;
  font-weight: 400;
  margin-top: -0.6em;
  white-space: nowrap;
  opacity: 50%;
`;
const TimeBlock = styled.h3`
  font-size: 2ch;
  font-weight: 450;
  margin-top: 0.5em;
  white-space: nowrap;
`;

export default function Task(props) {
  const [display, setDisplay] = useState("inherit");
  const handleRemove = () => {
    props.items.map((el) => {
      if (el.uid !== props.items.key) {
        setDisplay("none");
      }
    });
  };

  return (
    <Paper
      sx={{
        margin: 1,
        position: "relative",
        display: display,
      }}
      elevation={5}
    >
      <IconsTable>
        <PriorityIcon style={{ backgroundColor: props.priority }} />
        <RemoveIcon onClick={handleRemove} />
      </IconsTable>
      <Content>
        <Title>{props.name}</Title>
        <Description>Description: {props.desc}</Description>
        <TimeBlock>Time: {props.time}</TimeBlock>
      </Content>
    </Paper>
  );
}

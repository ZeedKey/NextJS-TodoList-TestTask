import MainLayout from "../components/MainLayout";
import styled from "styled-components";
import AddButton from "../components/AddButton";
import { useState } from "react";
import ModalWindow from "../components/ModalWindow";
import Task from "../components/Task";
import Form from "../components/Form";

const Container = styled.div`
  margin-left: 2vmax;
  margin-right: 2vmax;
  margin-bottom: 5em;
`;

const Title = styled.h1`
  font-size: 4ch;
  font-weight: 400;
  white-space: nowrap;
`;

const TaskTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(100px, 1fr) minmax(100px, 1fr);
`;

export default function Home() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <MainLayout>
      <Container>
        <Title>TODO LIST</Title>

        <TaskTable>
          {items.map((el) => (
            <Task
              key={el.uid}
              items={items}
              setItems={setItems}
              name={el.name}
              desc={el.desc}
              time={el.time}
              priority={el.priority}
            />
          ))}
          <AddButton handleOpen={handleOpen} />
        </TaskTable>

        <ModalWindow open={open} handleClose={handleClose}>
          <Form items={items} setItems={setItems} />
        </ModalWindow>
      </Container>
    </MainLayout>
  );
}

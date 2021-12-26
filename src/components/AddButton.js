import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
`;

export default function AddButton(props) {
  return (
    <Container onClick={props.handleOpen}>
      <Image src="/add.svg" alt="add btn svg" width={84} height={84}/>
      Add a task
    </Container>
  );
}

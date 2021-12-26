import Modal from "@mui/material/Modal";
import styled from "styled-components";

const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em;
  background-color: white;
  border-radius: 15px;
  border: none;
`;

export default function ModalWindow(props) {
  return (
    <ModalStyled
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Content>{props.children}</Content>
    </ModalStyled>
  );
}

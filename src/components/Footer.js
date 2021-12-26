import styled from "styled-components";
import Link from "next/link";

const FooterStyled = styled.footer`
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 0.2em;
  color: rgba(1, 1, 1, 0.5);
  background-color: white;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>
        <Link href="https://github.com/ZeedKey">Volokh -ZeedKey- Yaroslav</Link>
      </p>
      <p>2021</p>
    </FooterStyled>
  );
}

import type { JSX } from "react";
import { Container } from "react-bootstrap";
import type { TitleProps } from "./types";


function Footer({ title }: TitleProps): JSX.Element {
  return (
    <>
    <Container fluid className="d-flex flex-column min-vh-100">
      <footer className="bg-dark text-light py-3 mt-auto">
        <Container className="text-center">
          <small>@2025 {title} .Kike Buster</small>
        </Container>
      </footer>
    </Container>

    </>
  )
}
export default Footer
import type { JSX } from "react"
import { Container } from "react-bootstrap"

function PageNotFound():JSX.Element{

    return (
        <>
        <Container fluid className="d-flex flex-column justify-content-center">
            <h1>Page Not Found</h1>
            <p>
                The page you are looking for does not exists
            </p>
        </Container>
        </>
    )
}
export default PageNotFound
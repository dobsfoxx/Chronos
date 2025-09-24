import Heading from "./components/Heading";
import Container from "./components/Container";

import './styles/globals.css'
import './styles/theme.css'

export default function App() {
    return(
        <>
            <Container>
                <Heading>Logo</Heading>
            </Container>

            <Container>
                <Heading>Menu</Heading>
            </Container>     
        </>
    )
    
}
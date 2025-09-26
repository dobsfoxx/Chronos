
import { PlayCircleIcon } from "lucide-react";
import Container from "./components/Container/Container";
import CountDown from "./components/CountDown/CountDown";
import Cycles from "./components/Cycles/Cycles";
import DefaultButton from "./components/DefaultButton/DefaultButton";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";

import './styles/globals.css'
import './styles/theme.css'

export default function App() {
    return(
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
               <Menu />
            </Container>  

            <Container>
               <CountDown />
            </Container>    

            <Container>
               <form action="" className="form">
                <div className="formRow">
                    <Input 
                    type="text" 
                    id="meuInput" 
                    labelText="task" 
                    className="input" 
                    placeholder="Digite algo"/>
                </div>
                
                <div className="formRow">
                   <p>Lorem ipsum dolor sit amet.</p>
                </div>

                 <div className="formRow">
                   <Cycles />
                </div>

                <div className="formRow">
                   <DefaultButton icon={<PlayCircleIcon />} color="red"/>
                </div>

               </form>
            </Container> 

            <Container>
               <Footer />
            </Container>  
        </>
    )
    
}
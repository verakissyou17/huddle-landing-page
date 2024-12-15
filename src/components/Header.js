import {StyledHeader, Nav, Logo, Image, Content} from './styles/Header.styled.js';
import { Button } from './styles/Button.styled.js';

import { Flex } from './styles/Flex.styled.js';

function Header() {
  return (
    <StyledHeader>
        <Nav>
          <Logo src='./images/logo.svg' alt="logo" />
          <Button padding="0.5em 2em">Try It Free</Button>
        </Nav>
        <Flex>
        <Content>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <Button bg='#ff0099' color='#fff' padding='1em 3em'>Get Started For Free</Button>
          </Content>
          <Image src="./images/illustration-mockups.svg" alt="mock-up"/>
        </Flex>

    </StyledHeader>
  )
}

export default Header

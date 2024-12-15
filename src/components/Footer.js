import SocialIcons from "./SocialIcons";
import { StyleFooter } from "./styles/Footer.styled";
import WhiteBox from './WhiteBox.js';
import { Flex } from "./styles/Flex.styled.js";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyleFooter>
      <WhiteBox />
        <img src="./images/logo_white.svg" alt="white-logo" />
        <Flex>
        <ul>
            <li>
              <img src="./images/icon-location.svg" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </li>
            <li>
              <img src="./images/icon-phone.svg" alt="" />
              <a href="+1-543-123-4567">+1-543-123-4567</a>
            </li>
            <li>
              <img src="./images/icon-email.svg" alt="" />
              <a href="mailto: example@huddle.com">example@huddle.com</a></li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; {currentYear} Huddle. All rights reserved</p>
    </StyleFooter>
  )
}

export default Footer

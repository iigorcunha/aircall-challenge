import logo from '../../assets/images/logo.svg';
import { Container, Image } from './styles';

const Header = () => {
    return (
        <Container>
            <Image src={logo} alt="logo" />
        </Container>
    );
};

export default Header;

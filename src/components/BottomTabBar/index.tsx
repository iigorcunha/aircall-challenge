import { Container, MenuTab, DialpadButton, Line } from './styles';
import {
  BiPhone,
  BiDialpadAlt,
  BiUser,
  BiCog,
  BiRadioCircleMarked,
} from 'react-icons/bi';
import { useHistory, useLocation } from 'react-router-dom';

export const BottomTabBar = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <MenuTab
        current={location.pathname === '/'}
        onClick={() => history.push('/')}
      >
        <BiPhone size={30} />
        {location.pathname === '/' && <Line />}
      </MenuTab>
      <MenuTab current={location.pathname === '/user'}>
        <BiUser size={30} />
        {location.pathname === '/user' && <Line />}
      </MenuTab>
      <div style={{ width: '100%' }} />
      <DialpadButton>
        <div>
          <BiDialpadAlt />
        </div>
      </DialpadButton>
      <MenuTab current={location.pathname === '/settings'}>
        <BiCog size={30} />
        {location.pathname === '/settings' && <Line />}
      </MenuTab>
      <MenuTab current={location.pathname === '/pointer'}>
        <BiRadioCircleMarked size={30} />
        {location.pathname === '/pointer' && <Line />}
      </MenuTab>
    </Container>
  );
};

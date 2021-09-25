import { ActivityDetailed } from '../../components/ActivityDetailed';
import { BottomTabBar } from '../../components/BottomTabBar';
import Header from '../../components/Header';
import { Container } from './styles';

export const Activity = () => {
  return (
    <Container>
      <Header />
      <ActivityDetailed />
      <BottomTabBar />
    </Container>
  );
};

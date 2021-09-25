import { useState } from 'react';
import { Activities } from '../../components/Activities';
import { BottomTabBar } from '../../components/BottomTabBar';
import Header from '../../components/Header';
import { FilterButton, Container, FilterContainer } from './styles';

export const Home = () => {
  const [filter, setFilter] = useState<'not_archived' | 'archived' | 'all'>(
    'not_archived',
  );
  function handleFilter(filter: 'not_archived' | 'archived' | 'all') {
    setFilter(filter);
  }
  return (
    <Container>
      <Header />
      <FilterContainer>
        <span>Filters: </span>
        <FilterButton
          isSelected={filter === 'not_archived'}
          onClick={() => handleFilter('not_archived')}
        >
          Inbox
        </FilterButton>
        <FilterButton
          isSelected={filter === 'archived'}
          onClick={() => handleFilter('archived')}
        >
          Archive
        </FilterButton>
        <FilterButton
          isSelected={filter === 'all'}
          onClick={() => handleFilter('all')}
        >
          All
        </FilterButton>
      </FilterContainer>
      <Activities filter={filter} />
      <BottomTabBar />
    </Container>
  );
};

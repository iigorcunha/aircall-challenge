import styled from 'styled-components';

interface FilterButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 376px;
  height: 666px;
  z-index: 100;

  background-color: #fbfbfb;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
`;

export const FilterButton = styled.button<FilterButtonProps>`
  background-color: ${({ isSelected }) => (isSelected ? '#3fbc1f' : '#fff')};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  border-radius: 1rem;
  font-size: 14px;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  letter-spacing: 1px;
  margin-left: 8px;
`;

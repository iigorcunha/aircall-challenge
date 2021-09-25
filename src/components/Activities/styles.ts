import styled from 'styled-components';

export const Container = styled.div`
  height: 496px;
  background-color: #fbfbfb;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #c7c7c7;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #b8b8b8;

  &::before {
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 50%;
    border-bottom: 2px dotted #c7c7c740;
    margin: 0 2% 0 -55%;
  }

  &::after {
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 50%;
    border-bottom: 2px dotted #c7c7c740;
    margin: 0 -55% 0 2%;
  }

  span {
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

export const ActivityDetail = styled.button`
  width: 100%;
`;

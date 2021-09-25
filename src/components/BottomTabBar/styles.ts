import styled from 'styled-components';

interface MenuTabProps {
  current: boolean;
}

export const Container = styled.div`
  position: relative;
  margin-top: 30px;
  height: 60px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  border-top: 1px solid #f1f1f0;
  justify-content: space-between;
  background-color: white;
`;

export const MenuTab = styled.button<MenuTabProps>`
  position: relative;
  color: ${({ current }) => (current ? 'black' : '#7f7f7f')};
  height: 100%;
  width: 100%;
`;

export const Line = styled.hr`
  background-color: #3fbc1f;
  height: 2px;
  border-color: transparent;
  border-radius: 8px;
  position: absolute;
  width: 24px;
  bottom: -7px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const DialpadButton = styled.button`
  position: absolute;
  border: 1px solid #f1f1f0;
  top: -24px;
  height: 72px;
  width: 72px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 40px;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background-color: #3fbc1f;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
`;

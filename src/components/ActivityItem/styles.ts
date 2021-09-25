import styled from 'styled-components';

export const Container = styled.button`
  background-color: #ffffff;
  margin: 16px;
  height: 60px;
  width: 100%;
  max-width: 344px;
  padding: 16px 0 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c7c7c740;
  border-radius: 16px;
  position: relative;
`;

export const PhoneContainer = styled.div`
  display: flex;
  width: 60%;
  margin-left: 16px;
  padding-right: 8px;
  text-align: start;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Phone = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const From = styled.span`
  margin-top: 4px;
  width: 100%;
  margin-left: 0;
  font-size: 12px;
  color: #979797;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const VerticalDots = styled.div`
  width: 10px;
  margin-right: 2px;
  height: 15px;
  background-image: radial-gradient(circle, #d6d6d6 1px, transparent 1px);
  background-size: 100% 33.33%;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Time = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #c7c7c7;
  letter-spacing: 1px;
`;

export const Period = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 18px;
  width: 24px;
  text-align: center;
  height: 16px;
  padding: 2px;
  text-transform: uppercase;
  border: 1px solid #c7c7c740;
  border-right: 0;
  span {
    font-size: 12px;
    font-weight: 600;
    color: #c7c7c7;
    letter-spacing: 1px;
  }
`;

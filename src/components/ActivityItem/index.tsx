import { PhoneIcon } from '../PhoneIcon';
import {
  Container,
  From,
  Period,
  Phone,
  Time,
  PhoneContainer,
  TimeContainer,
  VerticalDots,
} from './styles';
import { VoiceMailIcon } from '../VoiceMailIcon';

interface IActivityItem {
  call_type: 'missed' | 'answered' | 'voicemail';
  direction: 'inbound' | 'outbound';
  duration: string;
  from: string;
  id?: number;
  to: string;
  date: string;
  time: string;
  created_at: string;
}

interface IActivityItemProps {
  data: IActivityItem;
  onClick: () => void;
}

export const ActivityItem = ({ data, onClick }: IActivityItemProps) => {
  const [time, period] = data.time.split(' ');
  return (
    <Container onClick={onClick}>
      <div>
        {data.call_type === 'voicemail' ? (
          <VoiceMailIcon />
        ) : (
          <PhoneIcon direction={data.direction} call_type={data.call_type} />
        )}
      </div>
      <PhoneContainer>
        <Phone>{data.to}</Phone>
        <From>tried to call on {data.from}</From>
      </PhoneContainer>
      <TimeContainer>
        <VerticalDots />
        <Time>{time}</Time>
        <Period>
          <span>{period}</span>
        </Period>
      </TimeContainer>
    </Container>
  );
};

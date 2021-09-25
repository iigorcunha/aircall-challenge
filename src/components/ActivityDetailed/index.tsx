import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { formatDate } from '../../lib/formatDate';
import { formatTime } from '../../lib/formatTime';
import { api } from '../../services/api';
import {
  Button,
  CallInfoContainer,
  Card,
  Container,
  Spinner,
  Title,
} from './styles';

interface ParamsProps {
  activityId: string;
}

interface ActivityData {
  call_type: 'missed' | 'answered' | 'voicemail';
  direction: 'inbound' | 'outbound';
  duration: string;
  from: string;
  id: number;
  is_archived: boolean;
  to: string;
  via: string;
  date: string;
  time: string;
  created_at: string;
}

export const ActivityDetailed = () => {
  const { activityId } = useParams() as ParamsProps;
  const history = useHistory();
  const [activity, setActivity] = useState<ActivityData>();

  useEffect(() => {
    api.get(`/activities/${activityId}`).then((response) => {
      const date = formatDate(response.data.created_at);
      const time = formatTime(response.data.created_at);

      setActivity({
        ...response.data,
        date,
        time,
      });
    });
  }, [activityId]);

  async function handleArchivedActivity(id: number, is_archived: boolean) {
    await api.post(`/activities/${id}`, {
      is_archived: is_archived,
    });
    history.push('/');
  }

  return (
    <Container>
      <Card>
        {activity === undefined ? (
          <Spinner />
        ) : (
          <>
            {activity?.to && <Title>{`To: ${activity?.to}`}</Title>}
            <span>{`From: ${activity?.from}`}</span>

            <CallInfoContainer>
              <span>{`Direction: ${activity?.direction}`}</span>
              <span>{`Call: ${activity?.call_type}`}</span>
              <span>{`Duration: ${activity?.duration} s`}</span>
            </CallInfoContainer>

            <span>{`Via: ${activity?.via}`}</span>

            <span>{`${activity?.date} at ${activity?.time}`}</span>

            <Button
              onClick={() =>
                handleArchivedActivity(
                  Number(activityId),
                  !activity?.is_archived,
                )
              }
            >
              {activity?.is_archived ? 'Unarchive' : 'Archive'}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
};

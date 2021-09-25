import { useEffect, useState } from 'react';
import { groupBy } from 'lodash';
import { formatDate } from '../../lib/formatDate';
import { api } from '../../services/api';
import { ActivityItem } from '../ActivityItem';
import { Container, Title } from './styles';
import { formatTime } from '../../lib/formatTime';
import { useHistory } from 'react-router-dom';

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

interface ActivitiesProps {
  filter: 'not_archived' | 'archived' | 'all';
}

export const Activities = ({ filter }: ActivitiesProps) => {
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const history = useHistory();
  useEffect(() => {
    api.get('/activities').then((response) => {
      const activitiesFormatted = response.data.map(
        (activity: ActivityData) => {
          const date = formatDate(activity.created_at);
          const time = formatTime(activity.created_at);
          return {
            ...activity,
            date,
            time,
          };
        },
      );
      setActivities(activitiesFormatted);
    });
  }, []);

  async function handleDetailCard(id: number) {
    history.push(`/activity-detailed/${id}`);
  }

  const filteredActivities = activities.filter((activity) => {
    if (filter === 'not_archived') {
      return activity.is_archived === false;
    } else if (filter === 'archived') {
      return activity.is_archived === true;
    } else {
      return activity;
    }
  });

  const groupedActivities = groupBy(filteredActivities, 'date');
  const activitiesKeys = Object.keys(groupedActivities).reverse();

  return (
    <Container>
      {activitiesKeys.map((key) => (
        <div key={key}>
          <Title>
            <span>{key}</span>
          </Title>
          {groupedActivities[key].map((activity) => (
            <ActivityItem
              onClick={() => handleDetailCard(activity.id)}
              key={activity.id}
              data={activity}
            />
          ))}
        </div>
      ))}
    </Container>
  );
};

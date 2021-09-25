import dayjs from 'dayjs';

export const formatTime = (date: string) => {
  return dayjs(date).format('HH:mm a');
};

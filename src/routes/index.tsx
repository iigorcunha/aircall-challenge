import { Switch, Route } from 'react-router-dom';

import { Activity } from '../pages/Activity';
import { Home } from '../pages/Home';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/activity-detailed/:activityId" component={Activity} />
    </Switch>
  );
};

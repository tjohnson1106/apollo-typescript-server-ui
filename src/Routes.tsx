import * as React from "react";
import PureComponent = React.PureComponent;
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { LoginView } from "./modules/user/LoginView";
import { RegisterView } from "./modules/user/RegisterView";
import { MeView } from "./modules/user/MeView";
import { SubscribeUser } from "./modules/account/SubscribeUser";

export class Routes extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/me" component={MeView} />
          <Route path="/subscription" component={SubscribeUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}

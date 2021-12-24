import React, { Suspense, useEffect } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import { useEagerConnect, useInactiveListener } from "hooks/useEagerConnect";
import { useAppSelector, useAppDispatch } from "hooks";
import { selectActivatingConnector, setActivatingConnector } from "containers/appSlice";
import history from "./routerHistory";
import Layout from "layout/Layout";
const Homepage = React.lazy(() => import("containers/Homepage"));
const Venturespage = React.lazy(() => import("containers/Venturespage"));
const Communitypage = React.lazy(() => import("containers/Communitypage"));
const Guestpage = React.lazy(() => import("containers/Guestpage"));
const ContactUspage = React.lazy(() => import("containers/ContactUspage"));

const App = (): JSX.Element => {
  const { connector } = useWeb3React<Web3Provider>();
  const dispatch = useAppDispatch();
  const activatingConnector = useAppSelector(selectActivatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      dispatch(setActivatingConnector(undefined));
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <Router history={history}>
      <Layout>
        <Suspense fallback="">
          <Switch>
            <Route path="/ventures" exact>
              <Venturespage />
            </Route>
            <Route path="/community" exact>
              <Communitypage />
            </Route>
            <Route path="/guest" exact>
              <Guestpage />
            </Route>
            <Route path="/contactUs" exact>
              <ContactUspage />
            </Route>
            <Route path="/about" exact>
              <Homepage />
            </Route>
            <Redirect push exact to={"/about"} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;

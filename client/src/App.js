import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/form/form'
import ViewUser from './components/viewUser/viewUser'
import ViewUsers from './components/viewUsers/viewUsers'
import Header from './components/header/header';
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import UserDetails from './components/userDetails/userDetails';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/firstStage">
              <Form></Form>
            </Route>
            <Route path="/secondStage">
              <UserDetails></UserDetails>
            </Route>
            <Route path="/thirdStage">
              <ViewUsers></ViewUsers>
            </Route>
            <Route path="/">
              <Form></Form>
            </Route>
          </Switch>
        </Router>
      </Provider>

    </>
  );
}

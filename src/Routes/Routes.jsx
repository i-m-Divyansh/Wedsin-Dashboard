import { BrowserRouter, Switch, Route } from "react-router-dom";

//? Components
import Alert from "../utils/Alert";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import Users from "../components/Users/Users";

//? Categories
import Categories from "../components/Categories/Categories";
import AddCategory from "../components/Categories/Add Category/AddCategory";

//? Interests
import Interests from "../components/Interests/Interests";
import AddInterest from "../components/Interests/Add Interest/AddInterest";

//? Subscription
import Subscriptions from "../components/Subscription/Subscription";
import AddSubscription from "../components/Subscription/Add Subscription/AddSubcription";

const Routes = () => {
  return (
    <>
      <Alert />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/users" component={Users} />
          //? Interest
          <PrivateRoute exact path="/interests" component={Interests} />
          <PrivateRoute
            exact
            path="/interests/add/interest"
            component={AddInterest}
          />
          //? Category
          <PrivateRoute exact path="/categories" component={Categories} />
          <PrivateRoute
            exact
            path="/categories/add/category"
            component={AddCategory}
          />
          {/* SUBSCRIPTIONS */}
          <PrivateRoute exact path="/subscriptions" component={Subscriptions} />
          <PrivateRoute
            exact
            path="/subscriptions/add/subscription"
            component={AddSubscription}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;

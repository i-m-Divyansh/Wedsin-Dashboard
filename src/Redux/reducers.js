import { combineReducers } from "redux";
import { appReducer } from "./App/reducer";
import { usersReducer } from "./Users/reducer";
import { categoryReducer } from "./Category/reducer";
import { subscriptionReducer } from "./Subscription/reducer";

const reducers = combineReducers({
  App: appReducer,
  Users: usersReducer,
  Category: categoryReducer,
  Subscription: subscriptionReducer,
});

export default reducers;

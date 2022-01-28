import { useEffect } from "react";

//? components
import Page from "../Page/Page";
import Table from "../../Tables/Subscription/Subscription";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsAction } from "../../Redux/Subscription/actions";

const SubscriptionPlans = () => {
  //? useDispatch
  let dispatch = useDispatch();

  //? useSelector
  let { subscriptions } = useSelector((state) => state.Subscription);

  //? useEffect
  useEffect(() => {
    dispatch(getSubscriptionsAction());
  }, []);

  //? For Add Page and Columns
  let addSubscriptionBtn = "/subscriptions/add/subscription";

  let columns = [
    "Plan Name",
    "Frequency",
    "Discount",
    "Amount",
    "Super Likes",
    "Status",
  ];

  return (
    <Page compName="Subscription Plans" addSubscriptionBtn={addSubscriptionBtn}>
      <Table columns={columns ? columns : []} rows={subscriptions} />
    </Page>
  );
};

export default SubscriptionPlans;

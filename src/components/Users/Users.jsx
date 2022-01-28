import { useEffect } from "react";

//? components
import Page from "../Page/Page";
import Table from "../../Tables/User/User";

//? Redux
import { getUsersAction } from "../../Redux/Users/actions";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  //? useDispatch
  let dispatch = useDispatch();

  //? useSelector
  let { users } = useSelector((state) => state.Users);

  console.log("users in users components", users);

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  let columns = ["User", "Gender", "Email", "Phone", "Age"];

  return (
    <Page compName="Users">
      <Table columns={columns} rows={users} />
    </Page>
  );
};

export default Users;

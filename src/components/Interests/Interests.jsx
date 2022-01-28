import { useEffect } from "react";

//? Components
import Page from "../Page/Page";
import Table from "../../Tables/Interest/Interest";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import { getInterestsAction } from "../../Redux/Interest/actions";

const Interests = () => {
  //? useDispatch
  let dispatch = useDispatch();

  //? useSelector
  let { interests } = useSelector((state) => state.Interest);

  //? useEffect
  useEffect(() => {
    dispatch(getInterestsAction());
  }, []);

  //? Columns
  let columns = ["Interest Name", "Category"];

  let addInterestBtn = "/interests/add/interest";

  return (
    <Page compName="Interests" addInterestBtn={addInterestBtn}>
      <Table columns={columns} rows={interests ? interests : []} />
    </Page>
  );
};

export default Interests;

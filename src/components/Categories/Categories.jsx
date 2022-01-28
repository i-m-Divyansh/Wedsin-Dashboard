//? components
import Page from "../Page/Page";
import Table from "../../Tables/Category/Category";

//? Redux
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  //? useDispatch
  let dispatch = useDispatch();

  //? useSelector
  let {} = useSelector((state) => state.Category);

  let columns = ["Category Name", "Interests"];
  return (
    <Page compName="Categories">
      <Table columns={columns} rows={[]} />
    </Page>
  );
};

export default Categories;

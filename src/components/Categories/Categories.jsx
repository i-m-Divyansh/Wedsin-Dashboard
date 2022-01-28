import { useEffect } from "react";

//? components
import Page from "../Page/Page";
import Table from "../../Tables/Category/Category";

//? Redux
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../Redux/Category/actions";

const Categories = () => {
  //? useDispatch
  let dispatch = useDispatch();

  //? useSelector
  let { categories } = useSelector((state) => state.Category);

  //? useEffect
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  console.log({ categories });

  //? For Categories Columns and Add Category Path
  let columns = ["Category Name", "Interests"];

  let addCategoryBtn = "/categories/add/category";

  return (
    <Page addCategoryBtn={addCategoryBtn} compName="Categories">
      <Table
        columns={columns}
        rows={categories && categories ? categories : []}
      />
    </Page>
  );
};

export default Categories;

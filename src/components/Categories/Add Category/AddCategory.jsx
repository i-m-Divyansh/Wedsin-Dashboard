import { useState } from "react";
import styles from "./AddCategory.module.css";

//? components
import Page from "../../Page/Page";

//? Material-ui
import { TextField } from "@material-ui/core";

//? Redux
import { useDispatch, useSelector } from "react-redux";

const AddCategory = () => {
  //? useState hooks
  const [Values, setValues] = useState({
    categoryName: "",
  });
  const [FormError, setFormError] = useState({
    categoryName: false,
  });

  //? destructuring
  let { categoryName } = Values;

  //? changeHandler
  let changeHandler = (name) => (e) => {
    let value = e.target.value;
    setValues({ ...Values, [name]: value });
  };

  //? useDispatch
  let dispatch = useDispatch();

  //? useSelector
  let { loading, success } = useSelector((state) => state.Category);

  //? Validate
  let Validate = () => {
    let value = true;

    let errors = {
      categoryName: false,
    };

    if (categoryName == "") {
      errors.categoryName = "Please Enter Category Name First!";
      value = false;
    }

    setFormError({ ...errors });
    return value;
  };

  //? submitHandler
  let submitHandler = () => {
    if (Validate()) {
      alert("Submitted Successfully!");
    }
  };

  console.log({ Values });
  console.log({ FormError });

  return (
    <Page compName="Add Category">
      <div className={styles.container}>
        <div
          style={{
            position: "relative",
            minHeight: "500px",
            height: "100%",
            padding: "15px",
          }}
        >
          <div className={styles.formWrapper}>
            <TextField
              onChange={changeHandler("categoryName")}
              fullWidth={false}
              required
              id="outlined-required"
              label="Category Name"
              value={categoryName}
              error={FormError.categoryName}
              helperText={FormError.categoryName}
              variant="outlined"
            />
          </div>

          <button
            onClick={submitHandler}
            className={loading ? styles.buttonLoading : styles.button}
            variant="contained"
            color="primary"
          >
            Add Category
          </button>
        </div>
      </div>
    </Page>
  );
};

export default AddCategory;

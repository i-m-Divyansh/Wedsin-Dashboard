import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

// redux
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "../Redux/App/actions";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const AlertComp = () => {
  const alert = useSelector((state) => state.App.showAlert);
  const [show, setShow] = React.useState(alert);

  //? Dispatch
  let dispatch = useDispatch();

  React.useEffect(() => {
    setShow(alert && alert.message ? alert.message : alert);
  }, [alert]);

  return (
    <React.Fragment>
      {show && (
        <Snackbar
          open={show}
          onClose={() => dispatch(showAlert(false))}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => dispatch(showAlert(false))}
            severity="info"
            color="info"
          >
            {show}
          </Alert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};

export default AlertComp;

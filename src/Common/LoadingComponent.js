import React, { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../Login/AuthContext";
import dataMock from "./data";

export default function LoadingComponent(props) {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  React.useEffect(() => {
    if (props.load) {
      switch (props.load) {
        case 'group':
          setData(dataMock.group(auth.user));
          setLoading(false);
          break;

        case 'ranking':
          setData(dataMock.ranking(auth.user));
          setLoading(false);
          break;

        case 'orders':
          setData(dataMock.offers(auth.user));
          setLoading(false);
          break;

        case 'saledata':
          setData(dataMock.saleData(auth.user));
          setLoading(false);
          break;
      
        default:
          setLoading(true);
          break;
      }
    }
  }, [auth.user]);
  return (
    <React.Fragment>
      {loading
        ? <CircularProgress sx={{ mx: "auto" }} />
        : props.children(data)
      }
    </React.Fragment>
  )
}
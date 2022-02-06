import React, { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { AuthContext } from "../Login/AuthContext";
import { apiUrl } from "../config";

export default function LoadingComponent(props) {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  React.useEffect(() => {
    if (props.load) {
      fetch(`${apiUrl}/${props.load}/${auth.user}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        }).then(data => {
          setData(data);
          setLoading(false)
        });
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
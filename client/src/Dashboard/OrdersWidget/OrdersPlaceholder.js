import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function OrdersPlaceholder(props) {
  let location = useLocation();
  let path = location.pathname.split("/");
  let place = path[path.length - 1];
  // let navigate = useNavigate();
  return <div>Your {place} orders.</div>;
}

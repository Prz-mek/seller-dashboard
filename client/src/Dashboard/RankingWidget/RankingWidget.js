import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import OfferRankingHead from "./OfferRankingHead";
import { BodyRow, Cell, OfferCell, OfferName } from "./Styles";
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function RankingWidget(props) {
  const [order, setOrder] = React.useState("asc");
  const handleSort = () => {
    setOrder(order === "asc" ? "desc" : "asc");
  };
  return (
    <Box className="WidgetContentWrapper" >
      <TableContainer>
        <Table>
          <OfferRankingHead
            order={order}
            onSort={handleSort}
          />
          <TableBody>
            {props.data
              .slice()
              .sort(getComparator(order, "totalSold"))
              .map((row) => {
                return (
                  <BodyRow key={row.name}>
                    <OfferCell sx={{ flex: "2" }} >
                      <img
                        width="50px"
                        height="50px"
                        alt="item"
                        src={`./images/${row.imgName}`}
                      />
                      <OfferName>
                        {row.name}
                      </OfferName>
                    </OfferCell>
                    <Cell sx={{ flex: "1" }} align="right">{row.totalSold}</Cell>
                    <Cell sx={{ flex: "1" }} align="right">
                      {order === "asc" ? row.uniqueViews : row.moneyCirculation}
                    </Cell>
                  </BodyRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

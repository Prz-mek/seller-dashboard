import { Box, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";
export const Cell = styled(TableCell)({
    border: 0
})
export const OfferCell = (props) => (
    <Cell
        sx={{
            display: "flex",
            flex: "2",
            flexDirection: {
                xs: "column",
                sm: "row"
            },
            alignItems: {
                xs: "flex-start",
                sm: "center"
            }
        }}>
        {props.children}
    </Cell>
)
export const OfferName = (props) => (
    <Box
        sx={{
            textAlign: "left",
            ml: {
                xs: 0,
                sm: 2
            },
            mt: {
                xs: 1,
                sm: 0
            }
        }}
    >
        {props.children}
    </Box>
)
const Row = styled(TableRow)({
    display: "flex"
})
export const HeadRow = (props) => (
    <Row sx={{
        backgroundColor: "background.light"
    }}>
        {props.children}
    </Row>
)
export const BodyRow = (props) => (
    <Row sx={{
        borderBottom: 1,
        borderColor: "background.light",
        "&:last-child": {
            borderBottom: 0
        }
    }}>
        {props.children}
    </Row>
)

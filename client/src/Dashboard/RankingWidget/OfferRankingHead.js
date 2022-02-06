import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { Cell, HeadRow } from "./Styles";
export default function OfferRankingHead(props) {
    const { t } = useTranslation();
    return (
        <TableHead>
            <HeadRow>
                <Cell sx={{ flex: 2 }} align="left">
                    {t("Oferta")}
                </Cell>
                <Cell sx={{ flex: 1 }} align="right">
                    <TableSortLabel active direction={props.order} onClick={props.onSort}>
                        {t("Sprzedano")}
                    </TableSortLabel>
                </Cell>
                <Cell sx={{ flex: 1 }} align="right">
                    {props.order === "asc" ? t("Obrót") : t("Wyświetlenia")}
                </Cell>
            </HeadRow>
        </TableHead>
    );
}
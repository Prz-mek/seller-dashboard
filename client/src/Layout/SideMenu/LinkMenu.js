import { Icon, List } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import MenuListItem from "../MenuListItem";
const tabs = [
  {
    name: "Wykres sprzedaży",
    href: "#chart"
  },
  {
    name: "Zamówienia",
    href: "#orders"
  },
  {
    name: "Ranking ofert",
    href: "#ranking"
  },
  {
    name: "Opinie kupujących",
    href: "#opinions"
  },
  {
    name: "Jakość sprzedaży",
    href: "#quality"
  }
];
export default function LinkMenu(props) {
  return (
    <List onClick={props.onClose}>
      {tabs.map((tab) => (
        <HashLink key={tab.name} to={"/" + tab.href}>
          <MenuListItem
            text={tab.name}
            itemIcon={<Icon sx={{ visibility: "hidden" }} />}
          />
        </HashLink>
      ))}
    </List>
  );
}

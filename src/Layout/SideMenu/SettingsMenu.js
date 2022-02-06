import { FormControl, List, MenuItem, Select, Switch } from "@mui/material";
import i18n from "../../i18n";
import MenuListItem from "../MenuListItem";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const changeLanguage = (e) => {
  i18n.changeLanguage(e.target.value);
};
export default function SettingsMenu(props) {
  const { t } = useTranslation();

  return (
    <List>
      <MenuListItem
        key="Język"
        text="Język"
        itemIcon={<LanguageIcon />}
        notButton
        sx={{ mb: 1 }}
      >
        <FormControl variant="standard">
          <Select value={i18n.language} onChange={changeLanguage}>
            <MenuItem dense value={"en"}>
              English
            </MenuItem>
            <MenuItem dense value={"pl"}>
              Polski
            </MenuItem>
          </Select>
        </FormControl>
      </MenuListItem>
      <MenuListItem
        key="Tryb nocny"
        text="Tryb nocny"
        itemIcon={<Brightness3Icon />}
        notButton
      >
        <Switch checked={props.isDark} onChange={props.toggleNightMode} />
      </MenuListItem>
    </List>
  );
}

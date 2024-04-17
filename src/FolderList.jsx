import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { Typography } from "@mui/material";

export default function FolderList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem secondaryAction={<Typography variant="h6">₺32.9</Typography>}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#424242" }}>
            <CurrencyLiraIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="USDT/TRY" secondary="Tether to Turkish lira" />
      </ListItem>
      <ListItem secondaryAction={<Typography variant="h6">$63K</Typography>}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "#424242" }}>
            <CurrencyBitcoinIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="BTC/USDT" secondary="Bitcoin to Tether" />
      </ListItem>
    </List>
  );
}

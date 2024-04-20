import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import MenuIcon from "@mui/icons-material/Lock";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ButtonAppBar() {
  const [loading, setLoading] = React.useState(true);
  const timer = React.useRef();

  React.useEffect(() => {
    timer.current = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {loading && <LinearProgress />}
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {window.location.host}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={() =>
              alert("The shop is currently not available in your country.")
            }
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import FolderList from "./FolderList";
import ButtonAppBar from "./ButtonAppBar";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {`© ${new Date().getFullYear()} `}
      <Link color="inherit" href={`https://${window.location.host}/`}>
        {window.location.host}
      </Link>
    </Typography>
  );
}

export default function App() {
  return (
    <Box>
      <ButtonAppBar />
      <FolderList />
      <Divider />
      <Box display="flex" justifyContent="center" my={2}>
        <img src="Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg" />
      </Box>
      <Copyright />
    </Box>
  );
}

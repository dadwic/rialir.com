import * as React from "react";
import Box from "@mui/material/Box";
import FolderList from "./FolderList";
import ButtonAppBar from "./ButtonAppBar";
import Divider from "@mui/material/Divider";

export default function App() {
  return (
    <Box>
      <ButtonAppBar />
      <FolderList />
      <Divider />
      <Box display="flex" justifyContent="center" mt={2}>
        <img src="Download_on_the_App_Store_Badge_TR_RGB_blk_100217.svg" />
      </Box>
    </Box>
  );
}

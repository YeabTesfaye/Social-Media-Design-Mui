import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Stack } from "@mui/system";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";


function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (

      <ThemeProvider theme={theme}>
        <Box bgcolor={`background.default`} color={`text.primary`}>
          <Navbar />
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Sidebar mode={mode} setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
  );
}

export default App;

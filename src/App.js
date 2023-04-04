

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";


import { ToastContainer } from "react-toastify";
import { Store } from "@mui/icons-material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        
          <AppRouter />
     
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;

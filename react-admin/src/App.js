// import { CssBaseline, GlobalStyles } from "@mui/material";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routes";
// import { ColorModeContext, useMode } from "./theme";

// function App() {
//   const [theme, colorMode] = useMode();
//   const globalStyles = {
//     a: {
//       color: "unset",
//       textDecoration: "none",
//     },
//   };

//   return (
//     <>
//       <CssBaseline />
//       <GlobalStyles styles={globalStyles} />
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import History from "./scenes/history";
import Floods from "./scenes/floods";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/floods" element={<Floods />} />
              <Route path="/alert" element={<alert />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import CreateBet from "./Components/CreateBet";
import BetsContainer from "./Components/BetsContainer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#000",
			light: "#333333",
			dark: "#000000",
		},
		secondary: {
			main: "#ff1744",
			light: "#ff4569",
			dark: "#b2102f",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Routes>
					<Route path="/" element={<BetsContainer />} />
					<Route path="/create-bet" element={<CreateBet />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;

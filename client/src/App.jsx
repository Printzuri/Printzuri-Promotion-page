import { Route, Routes } from "react-router-dom";
import PrintZuri from "./pages/PrintZuri";
import "./App.css";
function App() {
  return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PrintZuri />} />
			</Routes>
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import PrintZuri from "./pages/PrintZuri";
import ModalScreen from "./components/ModalScreen";
import "./App.css";
function App() {
  return (
		<div className="App">
			<Routes>
				<Route path="/" element={<PrintZuri />} />
				{/* <Route path="/modal" element={<ModalScreen />} /> */}
			</Routes>
		</div>
	);
}

export default App;

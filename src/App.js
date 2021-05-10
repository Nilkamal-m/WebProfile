import { CssBaseline } from "@material-ui/core";
import "./App.css";
import { Layout } from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <CssBaseline />
        <Layout />
      </div>
    </Router>
  );
}

export default App;

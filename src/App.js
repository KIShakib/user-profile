import { Toaster } from "react-hot-toast";
import Users from "./components/Pages/Users/Users";

function App() {



  return (
    <div style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
      <Users />
      <Toaster />
    </div>
  );
}

export default App;

import AddNote from "./components/AddNote/AddNote";
import AllNotes from "./components/AllNotes/AllNotes";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div style={{ background: "#779593", height: "100vh" }}>
      <Topbar />
      <AddNote />
      <AllNotes />
    </div>
  );
}

export default App;

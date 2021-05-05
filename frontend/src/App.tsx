import Navbar from "components/Navbar";
import DataTable from "./components/DtaTable";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hello Word</h1>
      </div>
      <DataTable />

      <Footer />
    </>
  );
}

export default App;

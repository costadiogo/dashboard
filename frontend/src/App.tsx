import BarChart from "components/BarChart";
import Navbar from "components/Navbar";
import DataTable from "./components/DtaTable";
import Footer from "./components/Footer";
import PizzaChart from "./components/PizzaChart";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso </h5>
            <PizzaChart />
          </div>
        </div>

        <DataTable />
      </div>

      <Footer />
    </>
  );
}

export default App;

import AppContainer from "./AppContainer";
import Layout from "../Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Payment from "../../Pages/Payment";
import MyRequests from "../../Pages/MyRequests";

function App() {
  return (
    <AppContainer>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagamento" element={<Payment />} />
          <Route path="/meus-pedidos" element={<MyRequests />} />
        </Routes>
      </Layout>
    </AppContainer>
  );
}

export default App;

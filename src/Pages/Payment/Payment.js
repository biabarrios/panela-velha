import { useSelector } from "react-redux";

function Payment() {
  const data = useSelector((state) => state.bag);
  console.log(data);
  return <h1>Pagamento</h1>;
}

export default Payment;

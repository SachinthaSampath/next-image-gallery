import { Spinner } from "../../components/bootstrap";

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <Spinner animation="border" className="d-block" style={{fontSize:"24px"}}/>;
    </div>
  );
}

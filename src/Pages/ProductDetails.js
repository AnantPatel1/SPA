import { useParams } from "react-router-dom";
// if we want to know which id was loaded or which page was loaded in productsId then useParam is used
function ProductDetails() {
  const param = useParams();
  // this hook gives a param object, which contains every dynamic path definations we defined in our router

  return (
    <>
      <h1>Product Details</h1>
      <p>{param.productId}</p>
    </>
    // productId is the same as we defined after colon in path
  );
}
export default ProductDetails;

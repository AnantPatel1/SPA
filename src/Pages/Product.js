import { Link } from "react-router-dom";
function Product() {
  const PRODUCT = [
    { id: "p1", title: "Product1" },
    { id: "p2", title: "Product2" },
    { id: "p3", title: "Product3" },
  ];
  return (
    <>
      <h1>My Product Pages</h1>
      <ul>
        {PRODUCT.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Product;

import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  function NavigationHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {" "}
        Go to <Link to="/products">The list of products </Link>{" "}
      </p>
      <button onClick={NavigationHandler}>Click</button>
    </>
  );
}
export default HomePage;

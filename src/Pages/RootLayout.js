import { Outlet } from "react-router-dom";
import MainNavigation from "../components/main-navigation";
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
// we have to decide where the children components should be rendered
// this is done by outlet

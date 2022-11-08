import { Outlet, Link } from "react-router-dom";

function Shared() {
  return (
    <div>
      <h1>Snacklst</h1>
      <p>Shared page</p>
      <Outlet />
    </div>
  );
}

export default Shared;
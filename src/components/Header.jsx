import "./style.css";
import { Home, CircleAlert, CircleUserRound } from "lucide-react";
export default function Header() {
  return (
    <>
      <div className="header">
        <h1> Harry Potter</h1>
        <nav>
          <p>
            <Home /> Home
          </p>
          <p>
            <CircleAlert /> About
          </p>
          <p>
            <CircleUserRound /> Profile
          </p>
        </nav>
      </div>
    </>
  );
}

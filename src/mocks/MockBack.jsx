import { Link } from "react-router-dom";

export function MockBack({ tone = "dark" }) {
  return (
    <Link className={`mock-back mock-back-${tone}`} to="/#work">
      ← Astrum
    </Link>
  );
}

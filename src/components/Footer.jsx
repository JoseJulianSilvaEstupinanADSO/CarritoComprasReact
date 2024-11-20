import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";
import "./Footer.css";

export function Footer() {

  return (
    <footer className="footer">
      <h4>Prueba tecnica de React *</h4>
            <span>@JoseSilva</span>
            <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
}

import { Instagram, ShoppingBag } from "lucide-react";
import vowLogo from "../../assets/vow-digital-logo.png";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="site-footer__links" aria-label="Links da Lu Cardoso">
        <a href="https://www.instagram.com/lucardosoperfumes" target="_blank" rel="noopener noreferrer">
          <Instagram size={16} strokeWidth={1.7} aria-hidden="true" />
          lucardosoperfumes
        </a>
        <a href="https://lucardosoperfumes.com.br/" target="_blank" rel="noopener noreferrer">
          <ShoppingBag size={16} strokeWidth={1.7} aria-hidden="true" />
          lucardosoperfumes.com.br
        </a>
      </nav>

      <p className="site-footer__copyright">© 2026 Lu Cardoso. Todos os direitos reservados.</p>

      <div className="site-footer__credit">
        <span>Desenvolvido por</span>
        <a
          className="site-footer__vow"
          href="https://sites.vowdigital.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar o site da Vow Digital"
          title="Vow Digital"
        >
          <img src={vowLogo} alt="" aria-hidden="true" width={367} height={86} />
        </a>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import logo from "../../assets/logotipo.png";
import { CommercialTicker } from "@/components/commercial-ticker";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const title = "Grupo VIP | Lu Cardoso Perfumes";
const description = "Entre no Grupo VIP da Lu Cardoso no WhatsApp e receba novidades e ofertas de perfumes importados em primeira mão.";

const benefits = [
  "Novidades da loja em primeira mão",
  "Avisos de ofertas direto no WhatsApp",
  "Condições especiais de compra",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: VipLandingPage,
});

function VipLandingPage() {
  return (
    <>
      <main>
        <section className="content-column hero" aria-labelledby="hero-title">
          <svg className="hero__logo-filter" width="0" height="0" aria-hidden="true">
            <defs>
              <filter id="logo-gold" colorInterpolationFilters="sRGB">
                {/* Identify gold by the difference between the red and blue channels. */}
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  14 0 -14 0 -0.66"
                  result="gold-mask"
                />
                <feFlood floodColor="var(--color-brand-gold)" result="gold-color" />
                <feComposite in="gold-color" in2="gold-mask" operator="in" result="gold-strokes" />
                <feComposite in="gold-strokes" in2="SourceGraphic" operator="atop" />
              </filter>
            </defs>
          </svg>
          <img
            className="hero__logo"
            src={logo}
            width={900}
            height={600}
            alt="Lu Cardoso Perfumes Importados"
            fetchPriority="high"
          />
          <h1 id="hero-title">
            Perfumes e ofertas <span>em primeira mão</span>
          </h1>
          <p>Entre no Grupo VIP no WhatsApp e receba as condições especiais da Lu Cardoso.</p>
          <WhatsAppButton>Entrar no Grupo VIP</WhatsAppButton>
        </section>

        <CommercialTicker />

        <section className="content-column benefits" aria-labelledby="benefits-title">
          <h2 id="benefits-title">Vantagens do Grupo VIP</h2>
          <ul className="benefits__list" role="list">
            {benefits.map((benefit) => (
              <li key={benefit}>
                <Check size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-column closing" aria-labelledby="closing-title">
          <h2 id="closing-title">Quer receber a próxima oferta?</h2>
          <p>Em primeira mão no WhatsApp.</p>
          <WhatsAppButton>Quero entrar no Grupo VIP</WhatsAppButton>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

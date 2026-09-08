import Image from 'next/image';
import { ArrowUpRight, BarChart3, Globe2, Layers3, Mail, MapPin, Target } from 'lucide-react';

const services = [
  { icon: Target, number: '01', title: 'Google Ads', text: 'Campanhas orientadas por intenção, estrutura sólida e otimização contínua.' },
  { icon: Layers3, number: '02', title: 'Meta Ads', text: 'Criativos, públicos e jornadas pensados para transformar atenção em ação.' },
  { icon: Globe2, number: '03', title: 'Native Ads', text: 'Distribuição contextual para ampliar alcance e descobrir novas oportunidades.' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav shell" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Fonts Nexus — início"><span className="brand-mark">∞</span><span>FONTS NE<span>X</span>US</span></a>
          <div className="nav-links"><a href="#servicos">Serviços</a><a href="#empresa">Empresa</a><a className="nav-cta" href="mailto:fontsnexus@gmail.com">Contato</a></div>
        </nav>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Performance digital com direção</p>
            <h1>Estratégia que<br />transforma <em>cliques</em><br />em crescimento.</h1>
            <p className="hero-text">Operações de direct response para marcas que buscam decisões mais rápidas, campanhas eficientes e resultados mensuráveis.</p>
            <div className="hero-actions">
              <a className="button-primary" href="mailto:fontsnexus@gmail.com">Fale com a gente <ArrowUpRight size={18} /></a>
              <a className="button-link" href="#servicos">Conheça nosso trabalho <span>↓</span></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Identidade visual da Fonts Nexus">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="logo-frame"><Image src="/fonts-nexus-logo.png" alt="Logo da Fonts Nexus" width={288} height={288} priority unoptimized /></div>
            <div className="signal-card"><span className="signal-icon"><BarChart3 size={17} /></span><div><small>FOCO</small><strong>Performance</strong></div></div>
          </div>
        </div>

        <div className="channel-strip" aria-label="Canais de atuação"><div className="shell"><span>DIRECT RESPONSE</span><i>✦</i><span>GOOGLE ADS</span><i>✦</i><span>META ADS</span><i>✦</i><span>NATIVE ADS</span></div></div>
      </section>

      <section className="services shell" id="servicos">
        <div className="section-intro">
          <div><p className="eyebrow dark"><span /> O que fazemos</p><h2>Menos ruído.<br />Mais resposta.</h2></div>
          <p>Planejamento, execução e otimização de mídia com uma visão clara: cada campanha precisa mover o negócio.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, number, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-top"><span>{number}</span><Icon size={23} /></div><h3>{title}</h3><p>{text}</p><div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="company" id="empresa">
        <div className="company-grid shell">
          <div><p className="eyebrow"><span /> Sobre a Fonts Nexus</p><h2>Conectamos estratégia, mídia e dados.</h2></div>
          <div className="company-copy">
            <p>Somos uma empresa de promoção de vendas especializada em operações de marketing de performance e direct response.</p>
            <dl>
              <div><dt>Razão social</dt><dd>FONTS NEXUS LTDA - EPP</dd></div>
              <div><dt>CNPJ</dt><dd>67.232.158/0001-68</dd></div>
              <div><dt>Localização</dt><dd><MapPin size={15} /> Aracaju, SE</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-cta shell">
          <p className="eyebrow"><span /> Vamos conversar</p>
          <div className="footer-title"><h2>Sua próxima campanha<br />começa com uma boa <em>conexão.</em></h2><a className="mail-button" href="mailto:fontsnexus@gmail.com" aria-label="Enviar e-mail para Fonts Nexus"><Mail size={22} /><ArrowUpRight size={24} /></a></div>
          <a className="footer-email" href="mailto:fontsnexus@gmail.com">fontsnexus@gmail.com</a>
        </div>
        <div className="footer-bottom shell"><span>© 2026 Fonts Nexus</span><span>Aracaju — Sergipe — Brasil</span></div>
      </footer>
    </main>
  );
}

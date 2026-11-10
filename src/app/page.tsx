"use client";

import { FormEvent, useState } from "react";
import { createWhatsAppUrl, siteConfig } from "@/config/site";

const services = [
  {
    number: "01",
    icon: "↗",
    title: "Sites que trabalham pelo seu negócio",
    image: "/Sites%20que%20trabalham%20para%20seu%20negocio.png",
    imageAlt: "Desenvolvedor trabalhando em um projeto de site",
    text: "Criação de sites claros, rápidos e adaptados ao celular para apresentar seus serviços e facilitar o contato com clientes.",
    tags: ["Criação de sites", "Páginas de campanha", "Presença digital"],
    featured: true,
  },
  {
    number: "02",
    icon: "⌘",
    title: "Seu site sempre em dia",
    image: "/Seu%20site%20em%20dia.png",
    imageAlt: "Site sendo visualizado em um celular e computador",
    text: "Atualizações de conteúdo, ajustes e acompanhamento para manter seu site alinhado com o momento da sua empresa.",
    tags: ["Manutenção", "Atualização de conteúdo", "Melhorias"],
  },
  {
    number: "03",
    icon: "✳",
    title: "Automação com inteligência artificial",
    image: "/Automa%C3%A7%C3%A3o%20com%20IA.png",
    imageAlt: "Representação de inteligência artificial e tecnologia conectada",
    text: "Automatize tarefas repetitivas e organize fluxos de atendimento e operação, começando pelo que faz sentido para sua equipe.",
    tags: ["Fluxos de trabalho", "Atendimento", "Tarefas repetitivas"],
  },
  {
    number: "04",
    icon: "☁",
    title: "Tecnologia para sua rotina",
    image: "/Tecnologia%20para%20sua%20rotina.png",
    imageAlt: "Computador e ferramentas digitais usados no dia a dia",
    text: "Orientação e apoio em ferramentas na nuvem, e-mail profissional, organização de arquivos e suporte digital.",
    tags: ["Nuvem", "E-mail profissional", "Suporte"],
  },
];

const faqs = [
  {
    question: "Preciso entender de tecnologia para começar?",
    answer:
      "Não. A conversa começa pelo dia a dia da sua empresa. A partir daí, entendemos o que está difícil e explicamos as opções em linguagem simples.",
  },
  {
    question: "Vocês atendem empresas de todo Roraima?",
    answer:
      "Atendemos micro e pequenas empresas em Roraima. Conte onde sua empresa está e o que precisa para conversarmos sobre o melhor formato de atendimento.",
  },
  {
    question: "Posso contratar só um serviço?",
    answer:
      "Sim. Você pode conversar com a gente sobre uma necessidade específica, como criar um site ou automatizar uma tarefa. A proposta depende do que sua empresa precisa.",
  },
  {
    question: "Como funciona o diagnóstico inicial?",
    answer:
      "Você conta um pouco sobre a empresa e o desafio que quer resolver. Depois, conversamos sobre caminhos possíveis e próximos passos, sem compromisso.",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();
    const message = [
      `Olá! Meu nome é ${name}, da empresa ${company}.`,
      `Quero conversar sobre: ${service}.`,
      `Meu telefone: ${phone}.`,
      details ? `Um pouco sobre o que preciso: ${details}` : "",
      "Vim pelo site e gostaria de pedir um diagnóstico.",
    ].filter(Boolean).join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    setFormMessage("Sua mensagem está pronta no WhatsApp. Confira os dados e envie para iniciar a conversa.");
    event.currentTarget.reset();
  }

  return (
    <main>
      <div className="announcement-bar">
        <span className="announcement-dot" />
        Tecnologia próxima para quem faz Roraima crescer
        <span className="announcement-location">Atendimento em todo o estado</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={`${siteConfig.name}, início`}>
          <span className="brand-mark"><span /><span /><span /><span /></span>
          <span className="brand-name">{siteConfig.name}<small>TECNOLOGIA PARA NEGÓCIOS</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Soluções</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Dúvidas</a>
        </nav>
        <a className="header-cta" href="#contato">Vamos conversar <ArrowIcon diagonal /></a>
      </header>

      <section className="hero section-shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> PARCERIA DIGITAL EM RORAIMA</div>
          <h1>Seu negócio tem futuro. <span>A tecnologia ajuda a chegar lá.</span></h1>
          <p className="hero-intro">Sites, automação com IA e soluções digitais para micro e pequenas empresas que querem trabalhar melhor e crescer com confiança.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Peça um diagnóstico <ArrowIcon /></a>
            <a className="text-link" href="#servicos">Conheça as soluções <ArrowIcon /></a>
          </div>
          <div className="hero-note"><span className="note-icon">✳</span><span>Conversa direta, soluções do tamanho<br />da sua empresa.</span></div>
        </div>

        <div className="hero-visual">
          <img className="hero-image" src="/img%20para%20inicio.png" alt="Equipe reunida trabalhando em projetos digitais" />
          <div className="hero-image-shade" />
          <div className="hero-image-note"><span>✳</span><b>Tecnologia que faz sentido</b><small>para a vida real da sua empresa.</small></div>
          <span className="hero-coordinate">03° N · RORAIMA</span>
        </div>
        <div className="hero-bottomline"><span>TECNOLOGIA COM PROPÓSITO</span><span>PARA PEQUENOS NEGÓCIOS, GRANDES PLANOS <b>↓</b></span></div>
      </section>

      <section className="services-section section-pad" id="servicos">
        <div className="section-shell">
          <div className="section-heading services-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> SOLUÇÕES DIGITAIS</div><h2>O próximo passo<br />começa <em>com o que você precisa.</em></h2></div>
            <p>Nem toda empresa precisa da mesma tecnologia. A gente entende sua rotina e ajuda a encontrar soluções que cabem nela.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className={service.featured ? "service-card service-featured" : "service-card"} key={service.number}>
                <div className="service-image"><img src={service.image} alt={service.imageAlt} loading="lazy" /></div>
                <div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-number">{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="service-link" href="#contato" aria-label={`Conversar sobre ${service.title}`}>Vamos conversar <ArrowIcon diagonal /></a>
              </article>
            ))}
          </div>
          <div className="services-footnote"><span className="footnote-mark">✳</span><span>Tem uma necessidade diferente? Conte pra gente. A primeira conversa começa pela sua realidade.</span><a href="#contato">Fale com a gente <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="approach-section section-pad" id="como-funciona">
        <div className="section-shell approach-grid">
          <div className="approach-intro"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> UM JEITO SIMPLES DE COMEÇAR</div><h2>Tecnologia boa é a que <em>resolve.</em></h2><p>Sem complicar. Primeiro entendemos, depois desenhamos juntos o caminho que combina com a sua empresa.</p><a className="button button-light" href="#contato">Conte o que você precisa <ArrowIcon /></a><div className="approach-stamp"><span>RR</span><small>FEITO PARA<br />O NORTE</small></div></div>
          <div className="steps-list">
            <article className="step-item"><span className="step-index">01</span><div><h3>A gente escuta</h3><p>Você conta sobre sua empresa, sua rotina e o desafio que quer resolver.</p></div><span className="step-symbol">↗</span></article>
            <article className="step-item"><span className="step-index">02</span><div><h3>Desenhamos o caminho</h3><p>Apresentamos possibilidades em linguagem simples, com próximos passos claros.</p></div><span className="step-symbol">⌁</span></article>
            <article className="step-item"><span className="step-index">03</span><div><h3>Seguimos lado a lado</h3><p>Se fizer sentido, colocamos a solução em prática e acompanhamos a evolução.</p></div><span className="step-symbol">✳</span></article>
          </div>
        </div>
      </section>

      <section className="about-section section-pad" id="sobre">
        <div className="section-shell about-grid">
          <div className="about-art"><img className="about-image" src="/empreendedor.png" alt="Empreendedor planejando ideias diante de um mural de projetos" /></div>
          <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> PERTO DE QUEM EMPREENDE</div><h2>Feito para a realidade de <em>quem empreende.</em></h2><p>Sabemos que tocar uma pequena empresa exige tempo, atenção e muitas decisões. Por isso, queremos tornar a tecnologia mais simples de entender e mais próxima do que seu negócio precisa.</p><p>Somos uma iniciativa local para apoiar empresas de Roraima a encontrar caminhos digitais práticos, com conversa franca do começo ao fim.</p><a className="text-link" href="#contato">Conheça nosso jeito de trabalhar <ArrowIcon /></a></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contato">
        <div className="section-shell contact-grid">
          <div className="contact-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> PRIMEIRO PASSO</div><h2>Vamos conversar sobre <em>o seu negócio?</em></h2><p>Conte um pouco sobre sua empresa e o que você gostaria de melhorar. A gente retorna para entender melhor e pensar junto nos próximos passos.</p><div className="contact-local"><span className="local-pin">⌖</span><span><b>Uma parceria digital em Roraima</b><small>Para micro e pequenas empresas</small></span></div><div className="contact-decoration">RR<span>✳</span></div></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>DIAGNÓSTICO INICIAL</span><span>01 — 02 MIN</span></div>
            <label>Seu nome<input name="name" type="text" placeholder="Como podemos te chamar?" autoComplete="name" required /></label>
            <label>Nome da empresa<input name="company" type="text" placeholder="Sua empresa" autoComplete="organization" required /></label>
            <div className="form-row"><label>Seu WhatsApp<input name="phone" type="tel" placeholder="(00) 00000-0000" autoComplete="tel" required /></label><label>Quero conversar sobre<select name="service" defaultValue="" required><option value="" disabled>Selecione uma opção</option><option>Criação de site</option><option>Manutenção de site</option><option>Automação com IA</option><option>Nuvem e suporte</option><option>Outro desafio digital</option></select></label></div>
            <label>O que você gostaria de resolver?<textarea name="details" placeholder="Conte pra gente, do seu jeito." rows={3} /></label>
            <button className="button button-primary form-submit" type="submit">Preparar mensagem no WhatsApp <ArrowIcon diagonal /></button>
            <p className="form-privacy">Ao enviar, o WhatsApp será aberto com os dados preenchidos para você revisar e mandar.</p>
            {formMessage && <p className="form-feedback" role="status">{formMessage}</p>}
          </form>
        </div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="section-shell faq-grid"><div className="faq-heading"><div className="eyebrow"><span className="eyebrow-line" /> PERGUNTAS FREQUENTES</div><h2>Ficou com<br />alguma <em>dúvida?</em></h2><p>Se sua pergunta não estiver aqui, chama a gente para conversar.</p><a className="text-link" href="#contato">Fale com a gente <ArrowIcon /></a></div>
          <div className="faq-list">{faqs.map((faq, index) => <article className={openFaq === index ? "faq-item is-open" : "faq-item"} key={faq.question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span className="faq-number">0{index + 1}</span><span>{faq.question}</span><span className="faq-toggle">{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{faq.answer}</p>}</article>)}</div>
        </div>
      </section>

      <footer className="site-footer"><div className="section-shell footer-main"><a className="brand brand-footer" href="#inicio"><span className="brand-mark"><span /><span /><span /><span /></span><span className="brand-name">{siteConfig.name}<small>TECNOLOGIA PARA NEGÓCIOS</small></span></a><p>Ideias digitais, conversa próxima<br />e tecnologia com propósito.</p><a href="#inicio" className="back-top">VOLTAR AO INÍCIO <span>↑</span></a></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</span><span>Feito com cuidado em Roraima <b>✳</b></span><span className="provisional-note">{siteConfig.provisionalName ? "Nome provisório" : ""}</span></div></footer>
      <a className="mobile-contact" href="#contato">Pedir diagnóstico <ArrowIcon /></a>
    </main>
  );
}

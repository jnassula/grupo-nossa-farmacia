const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const content = {
  hero: {
    headline: "O futuro da farmácia começa aqui.",
    subtitle: "Junte-se ao Grupo Nossa Farmácia — presente no continente e ilhas — e transforme o seu negócio com poder de negociação, tecnologia de ponta e uma marca que os clientes confiam.",
    ctaPrimary: "Conheça o Grupo",
    ctaSecondary: "Quero Aderir",
  },
  about: {
    title: "Quem Somos",
    heading: "Mais do que um grupo, uma comunidade de excelência.",
    body: "O Grupo Nossa Farmácia nasceu da visão de unir farmácias independentes sob uma identidade forte, mantendo a essência local e potenciando o poder coletivo. Com anos de experiência no setor farmacêutico português, oferecemos às farmácias parceiras as ferramentas e o suporte necessários para prosperar num mercado cada vez mais competitivo.",
    values: [
      { title: "Missão", desc: "Fortalecer farmácias independentes através de sinergias estratégicas e inovação constante." },
      { title: "Visão", desc: "Ser a rede de referência em Portugal, reconhecida pela qualidade, confiança e proximidade." },
      { title: "Valores", desc: "Integridade, colaboração, excelência no atendimento e compromisso com a saúde pública." },
    ],
  },
  advantages: {
    title: "Vantagens de Aderir",
    heading: "Porquê escolher o Grupo Nossa Farmácia?",
    items: [
      {
        icon: "Handshake",
        title: "Poder de Negociação",
        desc: "Acesso a condições comerciais privilegiadas com fornecedores, graças ao volume agregado do grupo.",
      },
      {
        icon: "Megaphone",
        title: "Marketing Centralizado",
        desc: "Campanhas nacionais, materiais promocionais e estratégias digitais desenvolvidas por especialistas.",
      },
      {
        icon: "GraduationCap",
        title: "Formação Contínua",
        desc: "Programas de capacitação para equipas, desde atendimento ao cliente até gestão empresarial.",
      },
      {
        icon: "Zap",
        title: "Tecnologia e Inovação",
        desc: "Plataformas integradas de gestão, e-commerce e análise de dados para decisões mais inteligentes.",
      },
      {
        icon: "BadgeCheck",
        title: "Identidade de Marca Forte",
        desc: "Uma marca reconhecida e confiável que atrai clientes e reforça a credibilidade da sua farmácia.",
      },
      {
        icon: "Headphones",
        title: "Suporte Operacional",
        desc: "Equipas dedicadas para apoiar em logística, regulamentação, RH e expansão do negócio.",
      },
    ],
  },
  coverage: {
    title: "Presença Nacional",
    heading: "Do Minho ao Algarve, dos Açores à Madeira.",
    subtitle: "Uma rede enraizada em Portugal, servindo comunidades de norte a sul, do continente às ilhas.",
    regions: [
      { name: "Norte", count: 120, gradient: "from-sky-500/15 to-blue-500/5", pinColor: "text-sky-400" },
      { name: "Centro", count: 85, gradient: "from-emerald-500/15 to-teal-500/5", pinColor: "text-emerald-400" },
      { name: "Lisboa", count: 110, gradient: "from-primary/20 to-accent/10", pinColor: "text-primary" },
      { name: "Alentejo", count: 35, gradient: "from-amber-500/15 to-yellow-500/5", pinColor: "text-amber-400" },
      { name: "Algarve", count: 30, gradient: "from-rose-500/15 to-pink-500/5", pinColor: "text-rose-400" },
      { name: "Madeira", count: 12, gradient: "from-teal-500/15 to-cyan-500/5", pinColor: "text-teal-400" },
      { name: "Açores", count: 8, gradient: "from-indigo-500/15 to-blue-500/5", pinColor: "text-indigo-400" },
    ],
    totalLabel: "Farmácias parceiras em Portugal",
    footnote: "Cobertura contínua em crescimento, com novas adesões todos os meses.",
  },
  numbers: {
    title: "O Nosso Impacto",
    stats: [
      { value: 400, suffix: "+", label: "Farmácias Parceiras" },
      { value: 12, suffix: "", label: "Anos de Experiência" },
      { value: 85, suffix: "M€", label: "Volume de Negócios" },
      { value: 400, suffix: "+", label: "Colaboradores" },
    ],
  },
  testimonials: {
    title: "Quem Já Aderiu",
    heading: "Histórias de sucesso de farmácias que cresceram connosco.",
    items: [
      {
        quote: "Aderir ao Grupo Nossa Farmácia foi o melhor investimento que fizemos. O apoio na digitalização e nas campanhas de marketing aumentou significativamente o nosso tráfego e fidelização.",
        author: "Dra. Catarina Mendes",
        role: "Farmácia Viva",
        logo: `${basePath}/images/viva.png`,
      },
      {
        quote: "O poder de negociação do grupo permitiu-nos melhorar as margens sem comprometer a qualidade. E a formação da equipa fez toda a diferença no atendimento.",
        author: "Dr. João Silva",
        role: "Farmácia Nova da Maia",
        logo: `${basePath}/images/novadamaia.png`,
      },
      {
        quote: "Sentimo-nos parte de uma rede que valoriza a farmácia de proximidade. O suporte operacional é excecional e está sempre disponível quando precisamos.",
        author: "Dra. Ana Rodrigues",
        role: "Farmácia Normal",
        logo: `${basePath}/images/normal.png`,
      },
    ],
  },
  process: {
    title: "Como Funciona",
    heading: "O seu caminho para fazer parte do grupo.",
    steps: [
      {
        step: "01",
        title: "Contacte-nos",
        desc: "Preencha o formulário ou ligue-nos. Uma equipa especializada entrará em contacto para perceber as suas necessidades.",
      },
      {
        step: "02",
        title: "Reunião de Apresentação",
        desc: "Agendamos uma reunião presencial ou virtual para apresentar o grupo, as vantagens e esclarecer todas as dúvidas.",
      },
      {
        step: "03",
        title: "Proposta Personalizada",
        desc: "Desenvolvemos uma proposta adaptada à sua farmácia, com condições claras e um plano de integração detalhado.",
      },
      {
        step: "04",
        title: "Bem-vindo ao Grupo",
        desc: "Após aceitação, iniciamos o processo de integração com apoio total da nossa equipa em todas as áreas.",
      },
    ],
  },
  contact: {
    title: "Vamos Conversar?",
    heading: "Pronto para fazer parte do maior grupo de farmácias?",
    subtitle: "Preencha o formulário e entraremos em contacto dentro de 24 horas úteis.",
    form: {
      name: "Nome Completo",
      email: "Email Profissional",
      phone: "Telemóvel",
      pharmacy: "Nome da Farmácia",
      location: "Localização (Distrito)",
      message: "Mensagem (Opcional)",
      submit: "Enviar Pedido de Adesão",
      success: "Obrigado! Entraremos em contacto brevemente.",
    },
    direct: {
      title: "Contacto Direto",
      phone: "+351 210 000 000",
      email: "parceiros@nossafarmacia.pt",
      address: "Avenida da Liberdade, 123\n1250-096 Lisboa, Portugal",
    },
  },
  services: {
    title: "Os Nossos Serviços",
    heading: "Soluções integradas para a farmácia do futuro.",
    subtitle: "Tecnologia, dados e canais digitais que potenciam o crescimento da sua farmácia.",
    items: [
      {
        icon: "Briefcase",
        name: "Gestão das Farmácias",
        tagline: "Acompanhamento personalizado",
        desc: "O departamento comercial acompanha as farmácias do grupo, fornecendo suporte ao nível da análise de portfólio, gestão de compras e estratégia de dinamização de ponto de venda. Mensalmente, os consultores agendam uma reunião com a farmácia, garantindo um acompanhamento personalizado que vai de encontro aos objetivos e necessidades de cada farmácia.",
        highlights: ["Análise de portfólio", "Gestão de compras", "Consultoria mensal"],
        image: `${basePath}/images/sales.png`,
      },
      {
        icon: "BarChart3",
        name: "Analytics",
        tagline: "Dados que guiam decisões",
        desc: "Plataforma de business intelligence com dashboards em tempo real. Analise vendas, margens, rotação de stock e comportamento de clientes para tomar decisões informadas e maximizar a rentabilidade.",
        highlights: ["Dashboards em tempo real", "Análise de margens e stock", "Relatórios personalizados"],
        image: `${basePath}/images/analytics.png`,
      },
      {
        icon: "BrainCircuit",
        name: "Nossa AI",
        tagline: "Inteligência artificial ao serviço da farmácia",
        desc: "Assistente inteligente que automatiza tarefas operacionais, otimiza encomendas e antecipa tendências de consumo. A IA que trabalha por si enquanto cuida dos seus clientes.",
        highlights: ["Previsão de procura", "Otimização de encomendas", "Automação operacional"],
        image: `${basePath}/images/nossa-ai.png`,
      },
      {
        icon: "Megaphone",
        name: "MKT Plus",
        tagline: "Marketing que converte",
        desc: "Serviço completo de marketing digital e tradicional. Campanhas segmentadas, gestão de redes sociais, design de materiais promocionais e estratégias de fidelização adaptadas à sua farmácia.",
        highlights: ["Campanhas segmentadas", "Gestão de redes sociais", "Programas de fidelização"],
        image: `${basePath}/images/mkt.png`,
      },
      {
        icon: "ShoppingCart",
        name: "E-Commerce",
        tagline: "nossafarmacia.pt",
        desc: "Loja online integrada com o seu stock físico. Venda 24h por dia com entrega em todo o país. Gestão centralizada de catálogo, preços e promoções numa plataforma otimizada para conversão.",
        highlights: ["Loja online 24/7", "Stock integrado", "Entrega nacional"],
        image: `${basePath}/images/ecommerce.png`,
      },
      {
        icon: "Zap",
        name: "Q-Commerce",
        tagline: "Bolt Food, Uber Eats & Glovo",
        desc: "Entrega ultrarrápida através das principais plataformas de delivery. Chegue aos seus clientes em minutos com produtos de saúde, bem-estar e parafarmácia onde quer que estejam.",
        highlights: ["Entrega em minutos", "3 plataformas integradas", "Novos clientes digitais"],
        image: `${basePath}/images/qcommerce.png`,
      },
    ],
  },
  simulator: {
    title: "Simulador de Poupança",
    heading: "Descubra quanto pode poupar ao aderir ao grupo.",
    subtitle: "Ajuste os valores da sua farmácia e veja o impacto estimado da parceria.",
    fields: {
      revenue: "Faturação Mensal",
      employees: "Nº de Colaboradores",
      marketing: "Gasto Mensal em Marketing",
    },
    results: {
      purchases: "Poupança em Compras",
      marketing: "Poupança em Marketing",
      training: "Valor de Formação Incluída",
      total: "Poupança Anual Estimada",
    },
    cta: "Quero uma proposta personalizada",
    disclaimer: "* Valores estimados com base em médias do grupo. Consulte-nos para uma proposta personalizada.",
  },
  faq: {
    title: "Perguntas Frequentes",
    heading: "Tudo o que precisa de saber antes de aderir.",
    items: [
      {
        question: "Quanto custa aderir ao grupo?",
        answer: "A adesão ao Grupo Nossa Farmácia envolve uma taxa de entrada e uma mensalidade que varia consoante o perfil da farmácia. Os valores são transparentes e apresentados na reunião de apresentação, sem custos ocultos.",
      },
      {
        question: "Perco a autonomia da minha farmácia?",
        answer: "Não. A sua farmácia mantém total autonomia na gestão diária, decisões de equipa e atendimento ao cliente. O grupo oferece ferramentas, negociação e suporte — as decisões continuam a ser suas.",
      },
      {
        question: "Qual é o compromisso mínimo?",
        answer: "O contrato tem um período mínimo de 12 meses, renovável automaticamente. Acreditamos que os resultados falam por si e que a parceria se mantém pelo valor gerado, não por obrigação contratual.",
      },
      {
        question: "Como funciona o poder de negociação?",
        answer: "Ao agregar o volume de compras de todas as farmácias parceiras, conseguimos condições comerciais significativamente melhores com fornecedores e laboratórios, que são partilhadas com todos os membros do grupo.",
      },
      {
        question: "Preciso de mudar a imagem da minha farmácia?",
        answer: "A adoção da identidade visual do grupo é gradual e acompanhada pela nossa equipa. Fornecemos todos os materiais necessários e apoiamos na transição, respeitando o ritmo de cada farmácia.",
      },
      {
        question: "Quanto tempo demora o processo de adesão?",
        answer: "Desde o primeiro contacto até à integração completa, o processo demora em média 4 a 6 semanas. Inclui reunião de apresentação, proposta personalizada e plano de integração detalhado.",
      },
      {
        question: "Posso sair do grupo se não estiver satisfeito?",
        answer: "Sim. Após o período mínimo de compromisso, pode rescindir o contrato com aviso prévio de 60 dias. A nossa taxa de retenção é superior a 95%, o que reflete a satisfação dos nossos parceiros.",
      },
      {
        question: "Que tipo de suporte recebo após a adesão?",
        answer: "Tem acesso a uma equipa dedicada que o apoia em logística, marketing, formação, regulamentação, recursos humanos e estratégia de negócio. O suporte é contínuo e personalizado às necessidades da sua farmácia.",
      },
    ],
  },
  footer: {
    copyright: "© 2026 Grupo Nossa Farmácia. Todos os direitos reservados.",
    links: [
      { label: "Sobre Nós", href: "#about" },
      { label: "Vantagens", href: "#advantages" },
      { label: "Processo", href: "#process" },
      { label: "Contacto", href: "#contact" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos e Condições", href: "/termos" },
    ],
  },
};
document.addEventListener('DOMContentLoaded', () => {
  const FEATURE_SECTION = document.querySelector('.features-grid');
  const IMPACT_SECTION = document.querySelector('.impactos-grid');
  const MENU_TOGGLE = document.querySelector('.menu-toggle');
  const NAV_UL = document.querySelector('nav ul');

  const features = [
    {
      title: 'Cadastro e Login',
      description: 'Acesse recursos exclusivos criando uma conta gratuita.',
      iconClass: 'fa-solid fa-user-plus',
    },
    {
      title: 'Apostas',
      description: 'Diversas modalidades de apostas para você se divertir.',
      iconClass: 'fa-solid fa-coins',
    },
    {
      title: 'Recompensas',
      description: 'Ganhe créditos convidando amigos e participando de eventos.',
      iconClass: 'fa-solid fa-gift',
    },
    {
      title: 'Comunidade',
      description: 'Conecte-se com outros fãs de Fórmula E e compartilhe experiências.',
      iconClass: 'fa-solid fa-users',
    },
  ];

  const impactos = [
    {
      title: 'Aumentar a Visibilidade',
      description: 'Promover a Fórmula E nas mídias sociais e na mídia nacional.',
      iconClass: 'fa-solid fa-eye',
    },
    {
      title: 'Atrair Patrocínios',
      description: 'Com maior visibilidade, atrair grandes marcas para patrocinar o esporte.',
      iconClass: 'fa-solid fa-handshake',
    },
    {
      title: 'Expandir a Base de Fãs',
      description: 'Engajar novos espectadores e consolidar o automobilismo no Brasil.',
      iconClass: 'fa-solid fa-flag-checkered',
    },
  ];

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  MENU_TOGGLE.addEventListener('click', () => {
    MENU_TOGGLE.classList.toggle('active');
    NAV_UL.classList.toggle('open');
  });

  features.forEach((feature) => {
    const featureCard = document.createElement('div');
    featureCard.classList.add('feature-card');
    featureCard.setAttribute('data-aos', 'fade-up');

    const iconElement = document.createElement('div');
    iconElement.classList.add('icon');

    const icon = document.createElement('i');
    icon.className = feature.iconClass;

    iconElement.appendChild(icon);

    const titleElement = document.createElement('h3');
    titleElement.textContent = feature.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = feature.description;

    featureCard.appendChild(iconElement);
    featureCard.appendChild(titleElement);
    featureCard.appendChild(descriptionElement);

    FEATURE_SECTION.appendChild(featureCard);
  });

  impactos.forEach((impacto) => {
    const impactoCard = document.createElement('div');
    impactoCard.classList.add('impacto-card');
    impactoCard.setAttribute('data-aos', 'fade-up');

    const iconElement = document.createElement('div');
    iconElement.classList.add('icon');

    const icon = document.createElement('i');
    icon.className = impacto.iconClass;

    iconElement.appendChild(icon);

    const contentElement = document.createElement('div');

    const titleElement = document.createElement('h3');
    titleElement.textContent = impacto.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = impacto.description;

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);

    impactoCard.appendChild(iconElement);
    impactoCard.appendChild(contentElement);

    IMPACT_SECTION.appendChild(impactoCard);
  });

  AOS.init({
    duration: 1000,
    once: true,
  });
});
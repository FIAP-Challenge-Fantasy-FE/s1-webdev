const FEATURE_SECTION = document.querySelector('#features');
const IMPACT_SECTION = document.querySelector('#impactos');

const features = [
  {
    title: 'Cadastro e Login',
    items: [
      'Os usuários podem criar uma conta gratuitamente na plataforma.',
      'Ao se registrar, os usuários recebem uma quantidade inicial de créditos para apostas.',
      'Os usuários têm a opção de ganhar créditos adicionais convidando amigos para participar.'
    ]
  },
  {
    title: 'Apostas',
    description: 'Os usuários podem escolher entre diversas modalidades de apostas, cada uma com pesos diferentes, incluindo:',
    items: [
      'Vencedor da prova.',
      'Vencedor Top 3 (menores probabilidades).',
      'Volta mais rápida.',
      'Head to head (aposta entre 2 pilotos).',
      'Time vencedor da temporada.',
      'Melhor equipe.'
    ]
  },
];

const impactos = [
  {
    title: 'Impactos negativos do problema',
    items: [
      'Falta de visibilidade da Fórmula E na mídia nacional e nas redes sociais',
      'Falta de patrocíonio',
      'Falta de consumidores do esporte'
    ]
  },
  {
    title: 'Impactos positivos da solução',
    items: [
      'Atrair um público mais amplo e diversificado',
      'Arrecadar patrocínio de grandes marcas devido ao aumento da visibilidade do esporte',
      'Consolidar e trazer novamente o auge do automobilsmo no Brasil'
    ]
  },
]

window.onscroll = function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
};

features.forEach((feature) => {
  const featureElement = document.createElement('div');
  featureElement.classList.add('feature');

  const titleElement = document.createElement('h2');
  titleElement.textContent = feature.title;

  featureElement.appendChild(titleElement);

  if (feature.description) {
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = feature.description;

    featureElement.appendChild(descriptionElement);
  }

  const itemsElement = document.createElement('ul');
  
  feature.items.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;

    itemsElement.appendChild(itemElement);
  });

  featureElement.appendChild(itemsElement);

  FEATURE_SECTION.appendChild(featureElement);
});

impactos.forEach((impacto) => {
  const impactoElement = document.createElement('div');
  impactoElement.classList.add('impacto');

  const titleElement = document.createElement('h2');
  titleElement.textContent = impacto.title;

  impactoElement.appendChild(titleElement);

  const itemsElement = document.createElement('ul');
  impacto.items.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.textContent = item;

    itemsElement.appendChild(itemElement);
  });

  impactoElement.appendChild(itemsElement);

  IMPACT_SECTION.appendChild(impactoElement);
});
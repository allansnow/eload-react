import brain from './images/brain-img.png';
import clock from './images/clock-img.png';
import raio from './images/raio-img.png';
import computer from './images/2693522__1_-removebg-preview.png';
import graphcomputer from './images/graph-computer.ico';
import gutoteixeira from './images/feedback-clientes-img1.jpg';
import gabrielvicentini from './images/feedback-clientes-img2.png';
import gabrieloliveira from './images/feedback-clientes-img3.png';

export const navLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#solucoes', text: 'solucoes' },
  { id: 3, href: '#planos', text: 'planos' },
  { id: 4, href: '#contato', text: 'contato' },
];

export const benefitsItems = [
  { id: 1, img: brain, text: 'Ter controle adequado da sua carga de treino.' },
  { id: 2, img: clock, text: 'Ter agilidade na obtenção de dados.' },
  { id: 3, img: raio, text: 'Monitorar o bem estar do atleta.' },
  {
    id: 4,
    img: computer,
    text: 'Possuir métricas e dados para tomadas de decisão acertivas.',
  },
];

export const soluctions = [
  {
    id: 1,
    img: graphcomputer,
    title: 'Mais desempenho',
    text: 'Tenha dados para embasar e acabar com suas dúvidas nas tomadas de decisão',
  },
  {
    id: 2,
    img: graphcomputer,
    title: 'Bem estar diário',
    text: 'Tenha em mãos a recuperação e a percepção de Bem-estar dos seus atletas, antes de qualquer treino.',
  },
  {
    id: 3,
    img: graphcomputer,
    title: 'Conexão com atleta',
    text: 'Ganhe tempo possibilitando que o atleta preencha os dados dos treinos e bem-estar diário.',
  },
  {
    id: 4,
    img: graphcomputer,
    title: 'PC, celular e atleta',
    text: 'Celular, tablet ou PC, não importa. O sistema da eLoad se adapta a qualquer aparelho.',
  },
  {
    id: 5,
    img: graphcomputer,
    title: 'Carga de treino',
    text: 'Monitore a carga de treino dos seus atletas, individual ou de um grupo de atletas.',
  },
  {
    id: 6,
    img: graphcomputer,
    title: 'Relatórios',
    text: 'Tenha relatórios personalizados com sua Logo, facilitando o trabalho multidisciplinar.',
  },
];

export const feedbacks = [
  {
    id: 1,
    text: '"O eLoad é um sistema moderno, veio para ajudar os preparadores físicos na agilidade de obtenção de dados e controle de carga nos treinos e jogos. Uma excelente proposta para o desenvolvimento do nosso trabalho."',
    img: gutoteixeira,
    name: 'Guto Teixeira',
    profission: 'Preparador Fisíco - Guarani F.C.',
  },
  {
    id: 2,
    text: '"O eLoad é um sistema moderno, veio para ajudar os preparadores físicos na agilidade de obtenção de dados e controle de carga nos treinos e jogos. Uma excelente proposta para o desenvolvimento do nosso trabalho."',
    img: gabrielvicentini,
    name: 'Gabriel Vicentini',
    profission: 'Seleção Paraguaya de Judô',
  },
  {
    id: 3,
    text: '"O eLoad é um sistema moderno, veio para ajudar os preparadores físicos na agilidade de obtenção de dados e controle de carga nos treinos e jogos. Uma excelente proposta para o desenvolvimento do nosso trabalho."',
    img: gabrieloliveira,
    name: 'Gabriel Oliveira',
    profission: 'Analista de desempenho',
  },
];

export const fiveatlPlans = [
  {
    id: 1,
    atletas: 5,
    plantype: 'Semestral',
    discount: 17,
    portions: '6x de',
    price: 38,
    perAtlhete: '7,78',
    classe: 'plan-item',
    hrclass: '',
    buttonClass: 'plan-item-button',
  },

  {
    id: 2,
    atletas: 5,
    plantype: 'Anual',
    discount: 27,
    portions: '12x de',
    price: 32,
    perAtlhete: '6,58',
    classe: 'plan-item plan-item-blue',
    hrclass: 'white-hr',
    buttonClass: 'plan-item-button plan-item-button-blue',
  },
  {
    id: 3,
    atletas: 5,
    plantype: 'Mensal',
    discount: 0,
    portions: 'Por mês',
    price: 44,
    perAtlhete: '8,98',
    classe: 'plan-item',
    hrclass: '',
    buttonClass: 'plan-item-button',
  },
];


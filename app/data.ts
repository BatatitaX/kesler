export const navItems = [
  { href: "/", label: "Início" },
  { href: "/historia", label: "História" },
  { href: "/ficha", label: "Ficha" },
  { href: "/familia", label: "Família Kesler" },
  { href: "/habilidades", label: "Habilidades" },
  { href: "/armario", label: "Armário" },
  { href: "/biblioteca", label: "Biblioteca" },
] as const;

export const chapters = [
  {
    number: "I",
    title: "Uma Mulher Não Pode Tremer",
    excerpt:
      "Para o Sexto Distrito, sua chegada era quase uma oração. Por fora, silêncio absoluto. Por dentro, colapso.",
    quote: "A Ely chegou.",
  },
  {
    number: "II",
    title: "A Infância de Uma Bela Dama",
    excerpt:
      "Antes de ser símbolo, Elysana era apenas uma menina observando o mundo além das janelas da família Kesler.",
    quote: "Tão bonita, nova e tão firme. Se parece com uma bela dama.",
  },
  {
    number: "III",
    title: "O Peso de Um Nome Solene",
    excerpt:
      "Um nome nascido entre médicos e corredores passa a carregar a esperança de todo um distrito.",
    quote: "Eu sou a nova médica daqui. A Bela Dama.",
  },
  {
    number: "IV",
    title: "Um Pouco da Sua Vida",
    excerpt:
      "Elysana não sonhava com cerimônias. Sonhava com um lugar seguro para voltar quando o caos acabasse.",
    quote: "Ela não sonhara de fato em se casar. Ela sonhara em ter paz.",
  },
  {
    number: "V",
    title: "A Última Que Sobrou",
    excerpt:
      "Quando sobreviver deixa de parecer uma vitória, ainda resta uma pequena recusa em desaparecer.",
    quote: "Há momentos em que sobreviver não parece vitória.",
  },
  {
    number: "VI",
    title: "Há Palavras Não Ditas",
    excerpt:
      "O silêncio se torna abrigo, peso e hábito para alguém que nunca aprendeu a dividir o que sente.",
    quote: "Algumas dores não viram grito.",
  },
  {
    number: "VII",
    title: "A Coisa Embaixo da Cidade",
    excerpt:
      "O segredo enterrado sob o Sexto Distrito finalmente encontra uma saída — e conhece o nome Kesler.",
    quote: "Se ele olhar para você, não corra.",
  },
  {
    number: "VIII",
    title: "Damas Devem Conhecer Mais Sobre Si Mesmas",
    excerpt:
      "Diana sempre enxergou além da postura impecável. E isso obrigou Elysana a olhar para dentro de si.",
    quote: "Você me conhece demais.",
  },
  {
    number: "IX",
    title: "Se a Morte Não Pode Ser Evitada, Que Seja, ao Menos: Bela",
    excerpt:
      "Diante do peso que cresceu em cada silêncio, a Bela Dama aprende que nomear o medo também é enfrentá-lo.",
    quote: "O monstro também tinha medo dela.",
  },
  {
    number: "X",
    title: "A Bela Dama",
    excerpt:
      "Nos arquivos da Agência, a verdade sobre Diana retorna em fragmentos — amor, terror e memória dividindo o mesmo rosto.",
    quote: "Todo mundo conhece a Bela Dama.",
  },
  {
    number: "XI",
    title: "Um Rei Escolhe Seu Dono",
    excerpt:
      "Muito antes de ser o último guardião, Yuan foi apenas um enorme leão branco pedindo carinho nos degraus dos Kesler.",
    quote: "Um rei escolheu sua rainha.",
  },
  {
    number: "XII",
    title: "Toda Dama Tem Seu Guardião",
    excerpt:
      "A origem de Yuan, o desaparecimento de Carim e a Base revelam que o mundo depende do último de sete guardiões.",
    quote: "O Leão é o último.",
  },
] as const;

export const skins = [
  {
    id: "padrao",
    name: "Elysana",
    subtitle: "A Bela Dama",
    image: "/assets/skins/padrao.jpg",
  },
  {
    id: "pianista",
    name: "Elysana Pianista",
    subtitle: "Um noturno em vinho",
    image: "/assets/skins/pianista.jpg",
  },
  {
    id: "terninho",
    name: "Elysana Executiva",
    subtitle: "Elegância Kesler",
    image: "/assets/skins/terninho.jpg",
  },
  {
    id: "coelhinha",
    name: "Elysana Coelhinha",
    subtitle: "Rosa depois da meia-noite",
    image: "/assets/skins/coelhinha.jpg",
  },
  {
    id: "terno-branco",
    name: "Elysana em Branco",
    subtitle: "Nobreza carmesim",
    image: "/assets/skins/terno-branco.jpg",
  },
  {
    id: "porcelana-vermelha",
    name: "Elysana de Porcelana",
    subtitle: "Porcelana vermelha",
    image: "/assets/skins/porcelana-vermelha.jpg",
  },
] as const;

export const libraryBooks = [
  {
    id: "cronicas",
    eyebrow: "Lore completa · 12 capítulos",
    title: "As Crônicas de Elysana Kesler",
    description:
      "A história da menina que transformou ansiedade em disciplina e se tornou a esperança do Sexto Distrito.",
    cover: "/assets/skins/padrao.jpg",
    file: "/assets/library/as-cronicas-de-elysana.pdf",
  },
  {
    id: "fragmentos",
    eyebrow: "Habilidades · Fragmentos de Memória",
    title: "Toda Forma é uma Versão Possível de Sobreviver",
    description:
      "Habilidades-base, formas, fundamentos e os seis Fragmentos de Memória de Elysana Kesler.",
    cover: "/assets/skins/pianista.jpg",
    file: "/assets/library/fragmentos-de-memoria.pdf",
  },
] as const;

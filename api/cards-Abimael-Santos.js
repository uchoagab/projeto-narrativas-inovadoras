export default function handler(req, res) {
  const deputado_abimael_santos = [
    {
      nome: "Abimael dos Santos Pereira",
      partido: "PL",
      descricao:
        "Crítico da gestão do PSB nos últimos oito anos, Abimael está ao lado da governadora Raquel Lyra na Casa de Joaquim Nabuco. Seu posicionamento nas votações, no entanto, será sempre contrário às pautas que influenciam o custo de vida da população, a exemplo do aumento de impostos. Apoiador do ex-presidente Jair Bolsonaro, o parlamentar teve como slogan de sua campanha ao Legislativo estadual “Te Liberta Pernambuco!”, e se apresenta nas redes sociais como cristão, patriota, defensor da família e dos bons costumes.",
      foto: "/images/abimael_santos.jpg",
      votos: 43530,
      candidatura: "2023-hoje",
    },
  ];
  res.status(200).json(deputado_abimael_santos);
}

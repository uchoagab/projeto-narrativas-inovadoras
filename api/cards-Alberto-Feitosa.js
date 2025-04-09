export default function handler(req, res) {
  const deputado_alberto_feitosa = [
    {
      nome: "Coronel Alberto Feitosa",
      partido: "PL",
      descricao:
        "Alberto Jorge do Nascimento Feitosa (Coronel Alberto Feitosa) é um Tenente-coronel da reserva da PMPE  na Alepe teve atuações como Presidente da Comissão de Constituição, Legislação e Justiça",
      foto: "/images/coronel_alberto_feitosa.jpg",
      votos: 146.847,
      candidatura: "2007-hoje",
    },
  ];
  res.status(200).json(deputado_alberto_feitosa);
}

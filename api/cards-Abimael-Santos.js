export default function handler(req, res) {
  const deputado_abimael_santos = [
    {
      nome: "Abimael dos Santos Pereira",
      partido: "PL",
      descricao:
        "Nome:  Abimael dos Santos Pereira (Abimael Santos) Profissão: Eletricista Participações na Alepe: Vice presidente da Comissão de Assuntos Municipais",
      foto: "/images/abimael_santos.jpg",
      //votos: 43530,
      candidatura: "2023-hoje",
    },
  ];
  res.status(200).json(deputado_abimael_santos);
}

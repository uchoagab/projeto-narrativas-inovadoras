export default function handler(req, res) {
  const deputado_abimael_santos = [
    {
      nome: "Abimael dos Santos Pereira",
      partido: "PL",
      descricao:
        "Abimael dos Santos Pereira (Abimael Santos) é Eletricista e na ALEPE teve participações como vice presidente da Comissão de Assuntos Municipais",
      foto: "/images/abimael_santos.jpg",
      votos: 43530,
      candidatura: "2023-hoje",
    },
  ];
  res.status(200).json(deputado_abimael_santos);
}

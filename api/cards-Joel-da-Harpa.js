export default function handler(req, res) {
  const deputado_joel_da_harpa = [
    {
      nome: "Joel da Harpa",
      partido: "PL",
      descricao:
        "Joel Maurino do Carmo (Joel da Harpa) é um policial militar que na ALEPE já participou como Presidente da comissão de Segurança Pública",
      foto: "/images/joel_da_harpa.jpg",
      votos: 35938,
      candidatura: "2015-Hoje",
    },
  ];
  res.status(200).json(deputado_joel_da_harpa);
}

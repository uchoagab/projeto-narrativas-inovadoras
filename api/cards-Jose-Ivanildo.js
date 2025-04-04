export default function handler(req, res) {
  const deputado_jose_ivanildo = [
    {
      nome: "José Ivanildo de Moura Júnior",
      partido: "PP",
      descricao:
        "Nome: José Ivanildo de Moura Júnior (Pastor Júnior Tércio) Profissão: Pastor e radialista Participações na Alepe: Vice-presidente da Comissão de Cidadania Já participou da comissão de Educação, Cultura, Esporte e Lazer",
      foto: "/images/jose_ivanildo.jpg",
      votos: 183.735,
      candidatura: "2023-Hoje",
    },
  ];
  res.status(200).json(deputado_jose_ivanildo);
}

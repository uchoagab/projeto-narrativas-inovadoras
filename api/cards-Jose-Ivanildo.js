export default function handler(req, res) {
  const deputado_jose_ivanildo = [
    {
      nome: "José Ivanildo de Moura Júnior",
      partido: "PP",
      descricao:
        "José Ivanildo de Moura Júnior (Pastor Júnior Tércio) é um pastor e radialista. Deputado mais votado em 2022 em PE, na ALEPE tem como participações ser Vice-presidente da Comissão de Cidadania, integrou  a comissão de Educação, Cultura, Esporte e Lazer",
      foto: "/images/jose_ivanildo.jpg",
      votos: 183.735,
      candidatura: "2023-Hoje",
    },
  ];
  res.status(200).json(deputado_jose_ivanildo);
}

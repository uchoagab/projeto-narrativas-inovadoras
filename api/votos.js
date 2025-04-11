export default function handler(req, res) {
  const dados = {
    anos: ["2014", "2018", "2022"],
    partidos: [
      {
        nome: "PP",
        votos: [371060, 792517, 720105],
        percentual: [8.06, 17.57, 14.36],
      },
      {
        nome: "União (fusão DEM/PSL)",
        votos: [69199 + 88315, 178253 + 89682, 460153],
        percentual: [1.50 + 1.92, 3.95 + 1.99, 9.18],
      },
      {
        nome: "PL (ex-PR)",
        votos: [158914, 116524, 422456],
        percentual: [3.75, 2.58, 8.43],
      },
      {
        nome: "Republicanos (ex-PRB)",
        votos: [50572, 59429, 235974],
        percentual: [1.1, 1.32, 4.71],
      },
    ],
    total: [738060, 1236405, 1838688],
    percentualTotal: [16.33, 27.41, 36.68]
  };

  res.status(200).json(dados);
}
export default function handler(req, res) {
  const deputado_jose_ivanildo = [
    {
      nome: "José Ivanildo de Moura Júnior",
      partido: "PP",
      descricao:
        "Tem como prioridades do mandato a defesa da vida, dos valores cristãos, do fortalecimento da família e demais pautas conservadoras. Outra pauta que norteará o seu mandato será o combate às drogas. Há doze anos, desenvolve um trabalho voltado para a recuperação de dependentes químicos, auxiliando essas pessoas a se livrarem do uso de entorpecentes. Sua atuação será pautada na defesa da fé, da liberdade religiosa, no combate à ideologia de gênero, à violência doméstica.",
      foto: "/images/jose_ivanildo.jpg",
      votos: 183.735,
      candidatura: "2023-Hoje",
    },
  ];
  res.status(200).json(deputado_jose_ivanildo);
}

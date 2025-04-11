export default async function handler(req, res) {
  const data = [
    {
      palavra: "PRECONCEITO CONTRA ANTIVAX",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
      tamanho: 150,
    },
    {
      palavra: "CRISTOFOBIA",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8330&tipoprop=p",
      tamanho: 150,
    },
    {
      palavra: "PROÍBE PROPRAGANDA INFANTIL SOBRE DIVERSIDADE",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6326&tipoprop=p",
      tamanho: 150,
    },
    {
      palavra: "PROÍBE TRANSIÇÃO DE GÊNERO PARA MENORES",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=15045&tipoprop=p",
      tamanho: 150,
    },
    {
      palavra: "PROÍBE CRIANÇAS NA PARADA LGBT",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12603&tipoprop=",
      tamanho: 150,
    },
    {
      palavra: "BÍBLIAS NAS ESCOLAS",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=14205&tipoprop=p",
      tamanho: 150,
    },
    {
      palavra: "VEDA INSITUIÇÕES DE ENSINO DE USAR LINGUAGEM NEUTRA",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6859&tipoprop=p",
      tamanho: 150,
    },
  ];
  res.status(200).json(data);
}

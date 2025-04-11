export default async function handler(req, res) {
  const data = [
    {
      palavra: "PRECONCEITO CONTRA ANTIVAX",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "CRISTOFOBIA",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8330&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "PROÍBE PROPRAGANDA INFANTIL SOBRE DIVERSIDADE",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6326&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "PROÍBE TRANSIÇÃO DE GÊNERO PARA MENORES",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=14045&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "PROÍBE CRIANÇAS NA PARADA LGBT",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12603&tipoprop=",
      tamanho: 140,
    },
    {
      palavra: "BÍBLIAS NAS ESCOLAS",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=14205&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "VEDA INSITUIÇÕES DE ENSINO DE USAR LINGUAGEM NEUTRA",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6859&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "ORGULHO HETEROSSEXUAL",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8305&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "PROÍBE USO DE BANHEIRO POR PESSOAS TRANS",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8195&tipoprop=p",
      tamanho: 140,
    },
    {
      palavra: "PROÍBE TEMÁTICA LGBT NA REDE DE ENSINO",
      url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=35BAB42F0DCAD1E103257F6C005656A6",
      tamanho: 140,
    },
  ];
  res.status(200).json(data);
}

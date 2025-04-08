
export default function handler(req, res) {
    const deputado_clarissa_tercio = [
      {
        nome: "Clarissa Tércio",
        partido: "PP",
        descricao: "Érica Clarissa Borba Cordeiro de Moura (Clarissa Tércio) Profissão: Comunicadora  Participações na Alepe:  ",
        foto: "/images/clarissa_tercio.jpg",
        votos: 50.789,
        candidatura: "2019-2022"
      }    
    ]
    ;
  
    res.status(200).json(deputado_clarissa_tercio);
  }
  
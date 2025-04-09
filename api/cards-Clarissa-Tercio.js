
export default function handler(req, res) {
    const deputado_clarissa_tercio = [
      {
        nome: "Clarissa Tércio",
        partido: "PP",
        descricao: "Érica Clarissa Borba Cordeiro de Moura (Clarissa Tércio) é uma comunicadora que atualmente exerce o cargo de Deputada Federal. Na ALEPE teve participações nas Comissões de Educação e Cultura; de Cidadania, Direitos Humanos e Participação Popular; de Saúde e Assistência Social; e de Defesa dos Direitos da Mulher.",
        foto: "/images/clarissa_tercio.jpg",
        votos: 50.789,
        candidatura: "2019-2022"
      }    
    ]
    ;
  
    res.status(200).json(deputado_clarissa_tercio);
  }
  
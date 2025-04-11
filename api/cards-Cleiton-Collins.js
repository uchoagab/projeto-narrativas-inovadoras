
export default function handler(req, res) {
    const deputado_cleiton_collins = [
      {
        nome: "Cleiton Collins",
        partido: "PP",
        descricao: "Cleiton Gonçalves da Silva (Pastor Cleiton Collins) é pastor, radialista e apresentador de TV. Na ALEPE já atuou como Segundo-secretário da Casa – integrante da Mesa Diretora, Vice-presidente da comissão de Cidadania, Direitos Humanos e Participação Popular, Fundador da Frente Parlamentar em Defesa da Família, da Vida e de Políticas Sobre Drogas (2011) ",
        foto: "/images/cleiton_collins.jpg",
        votos: 50510,
        candidatura: "2003-Hoje"
      }    
    ]
    ;
  
    res.status(200).json(deputado_cleiton_collins);
  }
  
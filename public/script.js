﻿//--------------------------Sunburst Gráfico--------------------------
fetch("/api/sunburst")
  .then((response) => response.json())
  .then((data) => {
    const trace = {
      type: "sunburst",
      labels: data.labels,
      parents: data.parents,
      values: data.values,
      customdata: data.customdata,
      hovertemplate:
        "<b>%{label}</b><br>%{customdata}<br>Deputados: %{value}<extra></extra>",
      branchvalues: "total",
      textinfo: "label+value", //Exibe nome e número de deputados
      insidetextorientation: "radial",
    };

    const layout = {
      title: "Composição da Bancada Evangélica da ALEPE",
      margin: { l: 0, r: 0, b: 0, t: 50 },
      height: 250,
    };

    Plotly.newPlot("sunburst-graph", [trace], layout, {
      displayModeBar: false,
    });
  })
  .catch((error) => console.error("Erro ao carregar dados:", error));

//--------------------------Flip Cards (Deputados)--------------------------
window.onload = function () {
  fetch("/api/cards")
    .then((response) => response.json())
    .then((deputados) => {
      const cardsContainer = document.getElementById("cards-container");

      deputados.forEach((deputado) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("onclick", "flipCard(this)");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        //Frente do card (imagem e informações básicas)
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.innerHTML = `
                  <img src="${deputado.foto}" alt="Foto de ${deputado.nome}">
                  <h3>${deputado.nome}</h3>
                  <p>${deputado.partido}</p>
              `;

        //Verso do card (descrição, citação e projetos)
        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");

        const descricao = document.createElement("p");
        descricao.textContent = `Descrição: ${deputado.descricao}`;

        const votos = document.createElement("p");
        votos.textContent = `Votos: ${deputado.votos}`;

        const candidatura = document.createElement("p");
        candidatura.textContent = `Candidatura: ${deputado.candidatura}`;

        cardBack.appendChild(descricao);
        cardBack.appendChild(votos);
        cardBack.appendChild(seguidores);
        cardBack.appendChild(candidatura);

        //Adiciona o conteúdo da frente e do verso ao card
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar dados dos deputados:", error)
    );
};

//Alterna o efeito de flip no card ao ser clicado
function flipCard(card) {
  card.classList.toggle("flipped");
}

//--------------------------------------------------------------------------------
// Função genérica para carregar cards
function loadCards(apiUrl, containerId) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((deputados) => {
      const cardsContainer = document.getElementById(containerId);

      deputados.forEach((deputado) => {
        const card = document.createElement("div");
        card.classList.add("card");

        //card.setAttribute('onclick', 'flipCard(thi
        card.onmouseenter = () => card.classList.add("flipped");
        card.onmouseleave = () => card.classList.remove("flipped");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        // Frente do card (imagem e informações básicas)
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.innerHTML = `
                    <img src="${deputado.foto}" alt="Foto de ${deputado.nome}">
                    <h3>${deputado.nome}</h3>
                    <h3>${deputado.partido}</h3>
                `;

        // Verso do card (descrição, citação e projetos)
        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");

        const descricao = document.createElement("p");
        descricao.textContent = `Descrição: ${deputado.descricao}`;
        descricao.classList.add("descricao");

        const votos = document.createElement("p");
        votos.textContent = `Votos: ${deputado.votos}`;

        const candidatura = document.createElement("p");
        candidatura.textContent = `Candidatura: ${deputado.candidatura}`;

        cardBack.appendChild(descricao);
        cardBack.appendChild(votos);
        cardBack.appendChild(candidatura);

        // Adiciona o conteúdo da frente e do verso ao card
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        cardsContainer.appendChild(card);
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar dados dos deputados:", error)
    );
}

// Função para alternar o efeito de flip no card ao ser clicado
function flipCard(card) {
  card.classList.toggle("flipped");
}

// Carregar cards ao carregar a página
window.onload = function () {
  // Exemplo de uso: Carregar cards para diferentes contêineres
  loadCards("/api/cards", "cards-container"); // Todos os deputados
  loadCards("/api/cards-Cleiton-Collins", "cleiton-collins-container");
  loadCards("/api/cards-Joel-da-Harpa", "joel-harpa-container");
  loadCards("/api/cards-Clarissa-Tercio", "clarissa-tercio-container");
  loadCards("/api/cards-Alberto-Feitosa", "alberto-feitosa-container");
  loadCards("/api/cards-Jose-Ivanildo", "jose-ivanildo-container");
  loadCards("/api/cards-Abimael-Santos", "abimael-santos-container");
};
//--------------------------Gráfico de Votos por Partido--------------------------

fetch("/api/votos")
  .then((response) => response.json())
  .then((data) => {
    const anos = data.anos;
    const partidos = data.partidos;

    function criarGrafico(anoSelecionado) {
      let indices =
        anoSelecionado === "todos"
          ? anos.map((_, index) => index)
          : [anos.indexOf(anoSelecionado)];

      const traces = partidos.map((partido) => ({
        x: indices.map((i) => anos[i]),
        y: indices.map((i) => partido.votos[i]),
        mode: "lines+markers",
        name: partido.nome,
        line: { width: 3 },
        marker: { size: 8 },
        hovertemplate: "%{y} votos (%{text}%)<extra></extra>",
        text: indices.map((i) => partido.percentual[i].toFixed(2)),
      }));

      //Linha total de votos
      traces.push({
        x: indices.map((i) => anos[i]),
        y: indices.map((i) => data.total[i]),
        mode: "lines+markers",
        name: "Total",
        line: { color: "#000", width: 2, dash: "dash" },
        marker: { size: 8 },
        hovertemplate: "%{y} votos (%{text}%)<extra></extra>",
        text: indices.map((i) => data.percentualTotal[i].toFixed(2)),
      });

      const eventosHistoricos = [
        { ano: 2014, descricao: "(Início da Operação Lava Jato)", cor: "blue" },
        {
          ano: 2018,
          descricao: "(Bolsonaro se lança à presidência)",
          cor: "blue",
        },
      ];

      eventosHistoricos.forEach((evento) => {
        traces.push({
          x: [evento.ano, evento.ano],
          y: [0, Math.max(...data.total)],
          mode: "lines",
          name: evento.descricao,
          line: { color: evento.cor, width: 2, dash: "dot" },
          hoverinfo: "none",
          hovertemplate: `<b>${evento.descricao}</b><extra></extra>`,
          showlegend: false,
        });
      });

      const layout = {
        title:
          anoSelecionado === "todos"
            ? "Crescimento da Votação por Partido (2014-2022)"
            : `Votação em ${anoSelecionado}`,
        xaxis: { title: "Ano" },
        yaxis: { title: "Número de Votos" },
        hovermode: "closest",
        hoverlabel: {
          bgcolor: "white",
          bordercolor: "black",
          font: { size: 12 },
          align: "left",
          namelength: -1,
        },
        transition: { duration: 500 },
        plot_bgcolor: "#f9f9f9",
        paper_bgcolor: "#f9f9f9",
        margin: { t: 60, b: 60, l: 60, r: 60 },
      };

      Plotly.react("grafico", traces, layout, { displayModeBar: false });
    }

    document
      .getElementById("anoSelecionado")
      .addEventListener("change", (event) => {
        criarGrafico(event.target.value);
      });

    criarGrafico("todos");
  })
  .catch((error) => console.error("Erro ao carregar dados:", error));

//--------------------------Nuvem de Palavras--------------------------
/*
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("palavras-container");
  const margin = 20;
  const buffer = 10;

  function getContainerDimensions() {
    return container.getBoundingClientRect();
  }

  function colideLocal(el1, el2) {
    const x1 = parseFloat(el1.style.left);
    const y1 = parseFloat(el1.style.top);
    const w1 = el1.offsetWidth;
    const h1 = el1.offsetHeight;

    const x2 = parseFloat(el2.style.left);
    const y2 = parseFloat(el2.style.top);
    const w2 = el2.offsetWidth;
    const h2 = el2.offsetHeight;

    const left1 = x1 - buffer;
    const right1 = x1 + w1 + buffer;
    const top1 = y1 - buffer;
    const bottom1 = y1 + h1 + buffer;

    const left2 = x2 - buffer;
    const right2 = x2 + w2 + buffer;
    const top2 = y2 - buffer;
    const bottom2 = y2 + h2 + buffer;

    return !(
      right1 < left2 ||
      right2 < left1 ||
      bottom1 < top2 ||
      bottom2 < top1
    );
  }

  function posicionarElemento(el, elementosExistentes) {
    let tentativas = 0;
    const maxTentativas = 200;
    const { width, height } = getContainerDimensions();

    while (tentativas < maxTentativas) {
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;
      const x = margin + Math.random() * (width - elWidth - margin * 2);
      const y = margin + Math.random() * (height - elHeight - margin * 2);

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      let colidiu = false;
      for (const outroEl of elementosExistentes) {
        if (outroEl !== el && colideLocal(el, outroEl)) {
          colidiu = true;
          break;
        }
      }

      if (!colidiu) {
        return;
      }
      tentativas++;
    }

    console.warn("Não foi possível posicionar o elemento:", el.textContent);
  }

  fetch("/api/nuvem-palavras")
    .then((response) => response.json())
    .then((data) => {
      const elementosExistentes = [];

      data.forEach((item) => {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");

        const link = document.createElement("a");
        link.href = item.url;
        link.target = "_blank";
        link.textContent = item.palavra;
        link.style.fontSize = `${item.tamanho}%`;

        cloud.appendChild(link);
        container.appendChild(cloud);
        elementosExistentes.push(cloud);

        posicionarElemento(cloud, elementosExistentes);
      });
    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
});
*/

//--------------------------Gráfico de Rede--------------------------
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("rede-container");

  fetch("/api/grafico-rede")
    .then((response) => response.json())
    .then((data) => {
      const nodes = data.nodes;
      const edges = data.edges;

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      container.innerHTML = '';
      
      // Cria SVG
      const svg = d3
        .select("#rede-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      // Cria simulação de forças
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          d3
            .forceLink(edges)
            .id((d) => d.id)
            .distance(150)
        )
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.05))
        .force("y", d3.forceY(height / 2).strength(0.05))
        .force("collision", d3.forceCollide().radius(d => d.tamanho / 5 + 5)); // Evita sobreposição

      // Arestas
      const link = svg
        .append("g")
        .selectAll(".link")
        .data(edges)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke", "#999")
        .attr("stroke-width", 1)
        .attr("stroke-opacity", 0.6);

      // Nós
      const nodeGroups = svg
        .append("g")
        .selectAll(".node-group")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node-group")
        .style("cursor", "pointer")
        .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended))
        .on("click", (event, d) => {
          window.open(d.url, "_blank");
        });

      // Temas (Nós maiores)
      nodeGroups
        .filter(d => d.tipo === "tema")
        .append("circle")
        .attr("class", "node-circle")
        .attr("r", d => d.tamanho / 10)
        .attr("fill", "#3498db")
        .attr("stroke", "#2980b9")
        .attr("stroke-width", 2);

      // PLs (Nós menores)
      nodeGroups
        .filter(d => d.tipo === "proposicao")
        .append("rect")
        .attr("class", "node-rect")
        .attr("width", d => d.tamanho / 5)
        .attr("height", d => d.tamanho / 5)
        .attr("x", d => -d.tamanho / 10)
        .attr("y", d => -d.tamanho / 10)
        .attr("rx", 3)
        .attr("fill", "#e74c3c")
        .attr("stroke", "#c0392b")
        .attr("stroke-width", 2);

      // Rótulos
      nodeGroups
      .filter(d => d.tipo === "tema")
        .append("text")
        .attr("class", "label")
        .attr("dy", d => d.tipo === "proposicao" ? 15 : 4)
        .attr("text-anchor", "middle")
        .attr("fill", "#fff")
        .attr("font-size", d => d.tamanho / 4)
        .attr("pointer-events", "none")
        .text(d => d.palavra);

      // Atualiza posições
      simulation.on("tick", () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        nodeGroups
          .attr("transform", d => `translate(${Math.max(20, Math.min(width - 20, d.x))},${Math.max(20, Math.min(height - 20, d.y))})`);
      });

      function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      // Ajuste redimensão
      window.addEventListener('resize', () => {
        const newWidth = container.offsetWidth;
        const newHeight = container.offsetHeight;
        
        svg.attr("width", newWidth).attr("height", newHeight);
        simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
        simulation.force("x", d3.forceX(newWidth / 2).strength(0.05));
        simulation.force("y", d3.forceY(newHeight / 2).strength(0.05));
        simulation.alpha(0.3).restart();
      });

    })
    .catch((error) => console.error("Erro ao carregar os dados:", error));
});

//--------------------------Efeito de Queda dos Anjos Caídos--------------------------
document.addEventListener("scroll", () => {
  const fallMans = document.querySelectorAll(".fallMan");
  const scrollPosition = window.scrollY;
  const maxScroll = 3500;

  fallMans.forEach((fallMan, index) => {
    let newTop = scrollPosition * 0.2;
    let opacity = 1 - scrollPosition / maxScroll;

    opacity = Math.max(0, Math.min(1, opacity));

    let lateralMovement = Math.sin(scrollPosition * 0.02 + index) * 10;

    fallMan.style.transform = `translate(${lateralMovement}px, ${newTop}px)`;

    fallMan.style.opacity = opacity;
  });
});
//-----------------------------Efeito de queda do título-----------------------------
document.addEventListener("scroll", () => {
  const h1 = document.getElementById("titulo"); 
  const scrollPosition = window.scrollY; 
  const maxScroll = 3900; 

  if (scrollPosition <= maxScroll) {

    let newTop = Math.min(scrollPosition * 1, 4000);

    h1.style.transform = `translateY(${newTop}px)`;
  }
});
//---------------------------Carrosel de gráficos-------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("graphCarousel");
  const prevButton = document.getElementById("prevGraph");
  const nextButton = document.getElementById("nextGraph");
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  //Função para atualizar o carrossel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  //avançar p/ o próximo gráfico
  nextButton.addEventListener("click", () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; //volta ao primeiro gráfico
    }
    updateCarousel();
  });

  //Voltar para o gráfico anterior
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1;
    }
    updateCarousel();
  });

  updateCarousel();
});

  //------------------------------------------------------------------------------------------------
//reduto eleitoral
document.addEventListener("DOMContentLoaded", function() {
  const selector = document.getElementById("iframeSelector");
  const iframes = document.querySelectorAll("#iframeContainer iframe");

  let currentIframe = null; // Armazena o iframe atualmente visível

  selector.addEventListener("change", function() {
      const selectedId = selector.value;

      if (selectedId) {
          const selectedIframe = document.getElementById(selectedId);

          if (currentIframe) {
              // Aplica a classe de saída ao iframe atual
              currentIframe.classList.add("iframe-slide-exit");
              currentIframe.classList.remove("iframe-slide-exit-active");

              // Aguarda a conclusão da animação de saída
              setTimeout(() => {
                  currentIframe.style.display = "none";
                  currentIframe.classList.remove("iframe-slide-exit");
              }, 500); // Tempo igual à duração da transição no CSS
          }

          // Exibe o novo iframe com a classe de entrada
          selectedIframe.style.display = "block";
          selectedIframe.classList.add("iframe-slide-enter");
          setTimeout(() => {
              selectedIframe.classList.add("iframe-slide-enter-active");
              selectedIframe.classList.remove("iframe-slide-enter");
          }, 10); // Pequeno delay para garantir que a classe seja aplicada

          // Atualiza o iframe atual
          currentIframe = selectedIframe;
      }
  });
});
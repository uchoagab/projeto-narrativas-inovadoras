export default async function handler(req, res) {
    const data = {
      nodes: [
        {
          id: 1,
          palavra: "Educação",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 2,
          palavra: "Religião",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 3,
          palavra: "Militar",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 4,
          palavra: "COVID-19",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 5,
          palavra: "Saúde",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 6,
          palavra: "LGBT",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 7,
          palavra: "Cultura",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 8,
          palavra: "Estado",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 125,
          tipo: "tema"
        },
        {
          id: 9,
          palavra: "823/2016",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=3454&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 10,
          palavra: "3719/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8664&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 11,
          palavra: "3048/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8516&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 12,
          palavra: "3044/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8514&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },       
        {
          id: 13,
          palavra: "2912/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8330&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 14,
          palavra: "2914/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8316&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 15,
          palavra: "2907/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8324&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 16,
          palavra: "2893/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8315&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 17,
          palavra: "2908/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8288&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 18,
          palavra: "2884/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8309&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 19,
          palavra: "2480/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7830&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 20,
          palavra: "2374/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7601&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 21,
          palavra: "2364/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7547&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 22,
          palavra: "2203/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7412&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 23,
          palavra: "2080/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7237&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 24,
          palavra: "1871/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6857&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 25,
          palavra: "1187/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6007&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 26,
          palavra: "3045/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5706&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 27,
          palavra: "3586/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=9177&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 28,
          palavra: "891/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5570&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 29,
          palavra: "1421/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6308&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 30,
          palavra: "1182/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5990&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 31,
          palavra: "2340/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7558&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 32,
          palavra: "3491/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=9076&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 33,
          palavra: "3089/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8562&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 34,
          palavra: "3541/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=9132&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 35,
          palavra: "932/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5528&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 36,
          palavra: "3260/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8020&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 37,
          palavra: "1892/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6994&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 38,
          palavra: "2850/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8246&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 39,
          palavra: "2604/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7921&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 40,
          palavra: "2479/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7921&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 41,
          palavra: "1780/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6754&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 42,
          palavra: "2010/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7095&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 43,
          palavra: "2013/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7150&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 44,
          palavra: "3305/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8834&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 45,
          palavra: "3106/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8456&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 46,
          palavra: "1436/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6326&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 47,
          palavra: "1513/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6431&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 48,
          palavra: "1289/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6135&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 49,
          palavra: "1222/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6055&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 50,
          palavra: "1094/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5850&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 51,
          palavra: "1312/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6159&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 52,
          palavra: "1313/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6162&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 53,
          palavra: "1514/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6433&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 54,
          palavra: "2417/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7633&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 55,
          palavra: "1796/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6859&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 56,
          palavra: "2416/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7651&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 57,
          palavra: "3419/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8973&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 58,
          palavra: "3446/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8989&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 59,
          palavra: "3247/2022",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8757&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 60,
          palavra: "2151/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7332&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 61,
          palavra: "2838/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8195&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 62,
          palavra: "2639/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7901&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 63,
          palavra: "2154/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=7313&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 64,
          palavra: "437/2019",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=4908&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 65,
          palavra: "2101/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13609&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 66,
          palavra: "1942/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13371&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 67,
          palavra: "2452/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=14114&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 68,
          palavra: "1291/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12457&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 69,
          palavra: "1174/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12279&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 70,
          palavra: "1268/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12423&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 71,
          palavra: "1173/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12281&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 72,
          palavra: "696/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=9790&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 73,
          palavra: "1157/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12203&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 74,
          palavra: "1292/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12456&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 75,
          palavra: "1293/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12455&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 76,
          palavra: "2100/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13607&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 77,
          palavra: "1758/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13095&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 78,
          palavra: "419/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=10170&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 79,
          palavra: "1412/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12603&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 80,
          palavra: "1220/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12336&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 81,
          palavra: "2340/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13950&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 82,
          palavra: "1610/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12917&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 83,
          palavra: "2147/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13645&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 84,
          palavra: "2329/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13935&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 85,
          palavra: "1664/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12990&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 86,
          palavra: "1555/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12825&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 87,
          palavra: "1366/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12556&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 88,
          palavra: "384/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=10182&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 89,
          palavra: "1580/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12887&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 90,
          palavra: "1581/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12888&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 91,
          palavra: "921/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=11920&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 92,
          palavra: "762/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=11678&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 93,
          palavra: "679/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=11678&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 94,
          palavra: "385/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=10180&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 95,
          palavra: "1685/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13011&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 96,
          palavra: "1378/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12306&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 97,
          palavra: "1054/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=12110&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 98,
          palavra: "1854/2024",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=13244&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 99,
          palavra: "745/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=11656&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 100,
          palavra: "421/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=10159&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 101,
          palavra: "326/2023",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=10045&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 102,
          palavra: "708/2016",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=35BAB42F0DCAD1E103257F6C005656A6",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 103,
          palavra: "1449/2017",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=FE413E1D852612DF0325813F005B500C",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 104,
          palavra: "1381/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6243&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 105,
          palavra: "1068/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5818&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 106,
          palavra: "1740/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=6780&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 107,
          palavra: "2696/2021",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=8045&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
        {
          id: 108,
          palavra: "1155/2020",
          url: "https://www.alepe.pe.gov.br/proposicao-texto-completo/?docid=5949&tipoprop=p",
          tamanho: 60,
          tipo: "proposicao"
        },
      ],
      edges: [
        { source: 1, target: 9 }, { source: 2, target: 9 },

        { source: 4, target: 10 }, { source: 5, target: 10 },

        { source: 4, target: 11 }, { source: 5, target: 11 },

        { source: 1, target: 12 }, { source: 4, target: 12 }, { source: 5, target: 12 },

        { source: 2, target: 13 },

        { source: 1, target: 14 },
        
        { source: 6, target: 15 },

        { source: 7, target: 16 },

        { source: 3, target: 17 },

        { source: 7, target: 18 },
        
        { source: 1, target: 19 },
        
        { source: 1, target: 20 }, { source: 6, target: 20 },
        
        { source: 1, target: 21 }, { source: 6, target: 21 },

        { source: 6, target: 22 },

        { source: 8, target: 23 },

        { source: 4, target: 24 }, { source: 5, target: 24 },
        
        { source: 4, target: 25 },  { source: 5, target: 25 }, 

        { source: 4, target: 26 }, { source: 5, target: 26 },

        { source: 6, target: 27 },

        { source: 2, target: 28 },

        { source: 7, target: 29 },

        { source: 1, target: 30 },

        { source: 1, target: 31 },

        { source: 3, target: 32 },

        { source: 1, target: 33 }, { source: 5, target: 33 },

        { source: 3, target: 34 },

        { source: 8, target: 35 },

        { source: 5, target: 36 },

        { source: 3, target: 37 },

        { source: 6, target: 38 },

        { source: 3, target: 39 },

        { source: 1, target: 40 },

        { source: 3, target: 41 },

        { source: 3, target: 42 }, { source: 4, target: 42 },

        { source: 5, target: 43 },

        { source: 2, target: 44 }, { source: 7, target: 44 },

        { source: 3, target: 45 },

        { source: 1, target: 46 }, { source: 6, target: 46 },

        { source: 2, target: 47 },

        { source: 1, target: 48 },

        { source: 1, target: 49 },

        { source: 2, target: 50 }, { source: 4, target: 50 }, { source: 5, target: 50 },

        { source: 5, target: 51 },

        { source: 8, target: 52 },

        { source: 2, target: 53 },

        { source: 5, target: 54 },

        { source: 1, target: 55 }, { source: 6, target: 55 },

        { source: 1, target: 56 },

        { source: 2, target: 57 },

        { source: 2, target: 58 }, { source: 5, target: 58 },

        { source: 2, target: 59 }, { source: 5, target: 59 },

        { source: 1, target: 60 },

        { source: 6, target: 61 },

        { source: 2, target: 62 },

        { source: 2, target: 63 },

        { source: 2, target: 64 },

        { source: 2, target: 65 },

        { source: 1, target: 66 }, { source: 3, target: 66 },

        { source: 2, target: 67 },

        { source: 1, target: 68 },

        { source: 6, target: 69 },

        { source: 8, target: 70 },

        { source: 6, target: 71 }, { source: 7, target: 71 },

        { source: 5, target: 72 },

        { source: 8, target: 73 },

        { source: 5, target: 74 },

        { source: 1, target: 75 }, { source: 3, target: 75 },

        { source: 2, target: 76 },

        { source: 6, target: 77 },

        { source: 6, target: 78 },

        { source: 6, target: 79 },

        { source: 1, target: 80 }, { source: 3, target: 80 },

        { source: 5, target: 81 },

        { source: 5, target: 82 },

        { source: 8, target: 83 },

        { source: 7, target: 84 },

        { source: 7, target: 85 },

        { source: 5, target: 86 },

        { source: 8, target: 87 },

        { source: 7, target: 88 },

        { source: 5, target: 89 },

        { source: 1, target: 90 }, { source: 5, target: 90 },

        { source: 1, target: 91 },

        { source: 6, target: 92 },

        { source: 2, target: 93 },

        { source: 7, target: 94 },

        { source: 2, target: 95 },

        { source: 3, target: 96 },

        { source: 2, target: 97 },

        { source: 1, target: 98 },

        { source: 1, target: 99 },

        { source: 6, target: 100 },

        { source: 6, target: 101 },

        { source: 6, target: 102 },

        { source: 3, target: 103 },

        { source: 5, target: 104 },

        { source: 4, target: 105 }, { source: 5, target: 105 },

        { source: 6, target: 106 },

        { source: 8, target: 107 },

        { source: 2, target: 108 }, { source: 4, target: 108 },
      ]
    };
  
    res.status(200).json(data);
}
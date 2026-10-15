/* O Lar da Besta — interações do site (telas, mapa, oráculo, dados, bola de cristal, cartas, guia do novato) */

const DADOS = {"racas": [{"id": "humano", "nome": "Humano", "sub": "o povo comum do Lar", "lema": "Onde há um recomeço, há um humano recomeçando.", "bonus": {"forca": 1, "destreza": 1, "constituicao": 1, "inteligencia": 1, "sabedoria": 1, "carisma": 1}, "traco": "Adaptabilidade — +1 em todos os atributos; nenhuma porta fechada no cadastro."}, {"id": "elfo", "nome": "Elfo", "sub": "os antigos das matas", "lema": "Para ele, a resposta está mesmo nas árvores.", "bonus": {"destreza": 2, "sabedoria": 1, "inteligencia": 1}, "traco": "Ligação primal — com as fadas, os únicos a trilhar o Druida. Mana +mod. INT (mín. 1). Descansos levam metade do tempo."}, {"id": "anao", "nome": "Anão", "sub": "do reino sob a montanha", "lema": "Se o vir mancando, é da armadura, não da idade.", "bonus": {"constituicao": 2, "forca": 1, "sabedoria": 1}, "traco": "Resistência lendária — PV máx. +2 por nível. Com arma pesada, um 1 no dado de dano é rolado de novo (fica o melhor), uma vez por dado."}, {"id": "minotauro", "nome": "Minotauro", "sub": "os filhos de chifres", "lema": "Quando é sábio, é tarde para você.", "bonus": {"forca": 3, "constituicao": 2, "inteligencia": -1}, "traco": "Instinto de batalha — Vigor +mod. CON (mín. 1). Investida: andando 3+ casas antes de atacar corpo a corpo, soma o mod. CON ao dano."}, {"id": "tiefling", "nome": "Tiefling", "sub": "os marcados pelo abissal", "lema": "Está marcada. Está viva. Ambas tinham razão.", "bonus": {"carisma": 2, "inteligencia": 1, "destreza": 1}, "traco": "Afinidade abissal — Mana +mod. CAR (mín. 1). Resistência a chamas: recebe metade do dano de fogo."}, {"id": "gnomo", "nome": "Gnomo", "sub": "os engenhosos das galerias", "lema": "Pequeno é quem não sabe medir.", "bonus": {"inteligencia": 2, "destreza": 1, "sabedoria": 1}, "traco": "Engenho miúdo — +1d4 em testes de Ofício. Tirou 1 no d20 de ataque? Rola de novo."}, {"id": "meioorc", "nome": "Meio-Orc", "sub": "os de sangue partido", "lema": "Metade do mundo me teme. A outra metade me contrata.", "bonus": {"forca": 2, "constituicao": 2, "destreza": 1, "inteligencia": -1}, "traco": "Sangue quente — PV máx. +mod. CON (mín. 1). Teimosia: uma vez por descanso longo (uma vez por luta), ao cair a 0 PV levanta com 1 PV."}, {"id": "satiro", "nome": "Sátiro", "sub": "os filhos das festas da mata", "lema": "Toda estrada termina numa música.", "bonus": {"carisma": 2, "destreza": 1, "constituicao": 1}, "traco": "Pés de bode — deslocamento +3 casas (4,5 m). Vigor +½ mod. DES (mín. 1)."}, {"id": "draconato", "nome": "Draconato", "sub": "os de escama e brasa", "lema": "O fogo lembra de onde veio.", "bonus": {"forca": 1, "constituicao": 1, "carisma": 2}, "traco": "Escamas antigas — PV máx. +mod. CON (mín. 1). Rajada de Fogo: 9 m, 1d8 + mod. CON de chamas (salv. DES reduz à metade), uma vez por luta."}, {"id": "fada", "nome": "Fada", "sub": "as de asa e orvalho", "lema": "Pequena demais para ser vista, rápida demais para ser pega.", "bonus": {"carisma": 2, "destreza": 1, "sabedoria": 1}, "traco": "Asas de libélula — CA +1. Mana +½ mod. CAR (mín. 1). Com os elfos, as únicas que ouvem a mana verde (Druida)."}, {"id": "vampiro", "nome": "Vampiro", "sub": "os da noite eterna", "lema": "Eu não tenho pressa. Tenho séculos.", "bonus": {"carisma": 2, "forca": 1, "constituicao": 1}, "traco": "Sede de sangue — cura 6% de todo dano que causa na arena. O Sol Velho os rejeita: não podem ser Clérigo nem Paladino."}], "classes": [{"id": "feiticeiro", "nome": "Feiticeiro", "chassi": "suporte", "prim": "carisma", "sec": "constituicao", "lema": "A magia que vem de dentro."}, {"id": "bruxa", "nome": "Bruxo", "chassi": "suporte", "prim": "carisma", "sec": "sabedoria", "lema": "Cada poder tem um preço; cada pacto é honrado — ou vingado."}, {"id": "mago", "nome": "Mago", "chassi": "suporte", "prim": "inteligencia", "sec": "sabedoria", "lema": "Aprendi pouco, mas aprendi bem."}, {"id": "bardo", "nome": "Bardo", "chassi": "suporte", "prim": "carisma", "sec": "destreza", "lema": "A palavra que anima o grupo."}, {"id": "druida", "nome": "Druida", "chassi": "suporte", "prim": "sabedoria", "sec": "constituicao", "lema": "Onde o clérigo reza, o druida apenas escuta."}, {"id": "ladino", "nome": "Ladino", "chassi": "combatente", "prim": "destreza", "sec": "carisma", "lema": "A lâmina que dança na sombra."}, {"id": "arqueiro", "nome": "Arqueiro", "chassi": "combatente", "prim": "destreza", "sec": "sabedoria", "lema": "Uma flecha vale três golpes de machado."}, {"id": "lutador", "nome": "Lutador", "chassi": "combatente", "prim": "forca", "sec": "constituicao", "lema": "Vim ao mundo sem espada, e assim vou embora."}, {"id": "guerreiro", "nome": "Guerreiro", "chassi": "vanguardista", "prim": "constituicao", "sec": "forca", "lema": "É ficar em pé no lugar onde os outros correm."}, {"id": "andarilho", "nome": "Andarilho", "chassi": "combatente", "prim": "destreza", "sec": "constituicao", "lema": "Ainda não sei quem sou. A estrada vai me dizer."}, {"id": "clerigo", "nome": "Clérigo", "chassi": "suporte", "prim": "sabedoria", "sec": "constituicao", "lema": "A luz não pede licença."}, {"id": "alquimista", "nome": "Alquimista", "chassi": "suporte", "prim": "inteligencia", "sec": "destreza", "lema": "Tudo é veneno. Tudo é remédio. Depende da dose."}, {"id": "patrulheiro", "nome": "Patrulheiro", "chassi": "combatente", "prim": "destreza", "sec": "sabedoria", "lema": "A mata fala com quem cala."}, {"id": "paladino", "nome": "Paladino", "chassi": "vanguardista", "prim": "forca", "sec": "carisma", "lema": "Juro, e por isso fico."}, {"id": "barbaro", "nome": "Bárbaro", "chassi": "vanguardista", "prim": "forca", "sec": "constituicao", "lema": "Primeiro o grito. Depois o machado. Perguntas, nunca."}, {"id": "runista", "nome": "Runista", "chassi": "suporte", "prim": "inteligencia", "sec": "constituicao", "lema": "A pedra lembra o que o homem esquece."}, {"id": "cacador", "nome": "Caçador de Sangue", "chassi": "combatente", "prim": "destreza", "sec": "carisma", "lema": "A fome é uma bússola."}, {"id": "tecelao", "nome": "Tecelão de Sonhos", "chassi": "suporte", "prim": "carisma", "sec": "sabedoria", "lema": "Dorme, que eu cuido do resto."}, {"id": "dracomante", "nome": "Dracomante", "chassi": "combatente", "prim": "carisma", "sec": "constituicao", "lema": "O dragão dorme no meu sangue. Às vezes ele ronca."}, {"id": "labirinto", "nome": "Guardião do Labirinto", "chassi": "vanguardista", "prim": "forca", "sec": "constituicao", "lema": "Quem entra não passa. Quem passa não volta."}, {"id": "engenhoqueiro", "nome": "Engenhoqueiro", "chassi": "combatente", "prim": "inteligencia", "sec": "destreza", "lema": "Se não explodiu, ainda não terminei."}, {"id": "xama", "nome": "Xamã de Guerra", "chassi": "suporte", "prim": "sabedoria", "sec": "forca", "lema": "O tambor bate. O clã responde."}, {"id": "cantor", "nome": "Cantor das Estrelas", "chassi": "suporte", "prim": "carisma", "sec": "sabedoria", "lema": "Cada estrela é uma nota que alguém esqueceu de cantar."}, {"id": "pactario", "nome": "Pactário", "chassi": "combatente", "prim": "carisma", "sec": "destreza", "lema": "Assinei com sangue. Leio as letras miúdas com os chifres."}, {"id": "errante", "nome": "Cavaleiro Errante", "chassi": "vanguardista", "prim": "forca", "sec": "carisma", "lema": "Nenhum castelo, nenhum rei. Só a estrada e a palavra dada."}], "locais": [{"nome": "O Ventre da Fera", "sub": "a Arena, ao sul da capital", "desc": "O coliseu de granito das minas mais fundas. As paredes vibram como se a própria Besta respirasse.", "x": 40, "y": 72, "cap": false, "tipo": ""}, {"nome": "O Centro", "sub": "a capital: praça, taverna, biblioteca e a Travessa", "desc": "A capital do reino. A Praça do Conselho, o Cálice, a Pena do Esquecido, a Selo & Lacre, o Leito do Peregrino e, no beco, a Travessa do Bardo com a Casa da Mentira e o Frasco Rachado.", "x": 50, "y": 46, "cap": false, "tipo": ""}, {"nome": "A Colina", "sub": "de onde se vê a sombra da Besta", "desc": "Todas as manhãs a sombra imensa cruza o céu daqui. As crianças apontam; os velhos se calam.", "x": 78, "y": 22, "cap": false, "tipo": ""}, {"nome": "Funerária Pá-Torta", "sub": "e o cemitério da Colina", "desc": "A casa do Mortimer: a mesa de pedra, as pás na parede e, atrás, as covas que descem a colina. A carroça do Baldomero chega todo dia.", "x": 90, "y": 22, "cap": false, "tipo": ""}, {"nome": "A Última Ceia", "sub": "o restaurante no topo da Colina", "desc": "Uma casa de pedra preta colada no cemitério. A comida é ótima; a origem, nem tanto. Uma caveira atende no balcão.", "x": 84, "y": 14, "cap": false, "tipo": ""}, {"nome": "A Fronteira", "sub": "a muralha do Rei Louco", "desc": "A muralha que ninguém quis construir e que ninguém mais ousou atravessar.", "x": 16, "y": 22, "cap": false, "tipo": ""}, {"nome": "Mercado de Dross", "sub": "caverna subaquática", "desc": "Sob o lago, uma caverna de ar parado e lanternas verdes. Tudo se vende; quase nada se pergunta.", "x": 20, "y": 74, "cap": false, "tipo": ""}, {"nome": "Primeira Zona Baixa", "sub": "a boca das minas e a forja", "desc": "Ferro e cobre saem daqui em carroças. Na entrada fica A Bigorna Funda, a forja do Torvo, onde se compram armas e armaduras. Os mineiros juram ouvir respiração nas galerias.", "x": 70, "y": 62, "cap": false, "tipo": ""}, {"nome": "Segunda Zona Baixa", "sub": "as galerias profundas", "desc": "Onde o ouro brota da pedra como se esperasse ser encontrado.", "x": 70, "y": 84, "cap": false, "tipo": ""}, {"nome": "O Covil da Besta", "sub": "no coração da Cordilheira do Norte", "desc": "Uma boca de pedra do tamanho de uma catedral. O ar sai quente, em ondas lentas: é a respiração dela. Só os mais calejados sobem até aqui.", "x": 62, "y": 14, "cap": false, "tipo": ""}, {"nome": "Vale das Lápides", "sub": "além da Colina, pelas trilhas obscuras", "desc": "Névoa que não sobe, corvos que não voam e um cemitério mais velho que o reino. Ali vive o Coven da Lua Murcha. Não siga as luzes.", "x": 88, "y": 34, "cap": false, "tipo": ""}, {"nome": "Campos da Aldeia Velha", "sub": "plantações de trigo e abóbora", "desc": "O celeiro do reino. Trigo até o horizonte, moinhos rangendo e um espantalho que ninguém lembra de ter posto ali.", "x": 31, "y": 46, "cap": false, "tipo": ""}, {"nome": "A Garganta de Ferro", "sub": "a mina nova, funda e perigosa", "desc": "Um poço aberto há pouco, onde os veios de prata e as gemas brilham no escuro. As escoras rangem. Ninguém trabalha sozinho lá embaixo — e ninguém confia em quem trabalha do lado.", "x": 50, "y": 86, "cap": false, "tipo": ""}, {"nome": "O Porto Velho", "sub": "cais, barcos e o Capitão Gorvo", "desc": "Tábuas molhadas, gaivotas e marinheiros de todo lugar. O Capitão Gorvo Sal-Grosso compra peixe fresco a bom preço e vende isca para quem quiser tentar a sorte no cais.", "x": 58, "y": 75, "cap": false, "tipo": ""}, {"nome": "Praia das Conchas Negras", "sub": "a costa leste", "desc": "Areia escura, barcos de pescadores e conchas que cantam quando a maré vira. Velas estranhas aparecem no horizonte.", "x": 84, "y": 66, "cap": false, "tipo": ""}, {"nome": "Floresta dos Sussurros", "sub": "carvalhos que falam baixinho", "desc": "Carvalhos tão velhos que já esqueceram o próprio nome. Quem para e escuta ouve conversas antigas no vento. Os lenhadores cortam só na borda.", "x": 33, "y": 32, "cap": false, "tipo": "floresta"}, {"nome": "Bosque dos Vaga-lumes", "sub": "luz verde entre as bétulas", "desc": "Bétulas brancas e milhares de vaga-lumes. Os casais vêm aqui à noite; os alquimistas, de dia, atrás de musgo e erva.", "x": 63, "y": 33, "cap": false, "tipo": "floresta"}, {"nome": "Mata Negra", "sub": "onde a névoa do Vale começa", "desc": "Árvores retorcidas, sem folhas, e uma névoa que não sobe. As flores lúgubres nascem nos ossos. Não siga as luzes.", "x": 90, "y": 50, "cap": false, "tipo": "floresta"}, {"nome": "Pinhal da Geada", "sub": "pinheiros no pé da Cordilheira", "desc": "Neve o ano inteiro e pinheiros que estalam de frio. Daqui se ouve a respiração da Besta quando o vento vira.", "x": 28, "y": 13, "cap": false, "tipo": "floresta"}, {"nome": "Aldeia dos Lenhadores", "sub": "cabanas na borda da floresta", "desc": "Cabanas de tronco, machados na porta e fumaça de lareira o dia inteiro. Gente de poucas palavras e muito café.", "x": 17, "y": 39, "cap": false, "tipo": "moradia"}, {"nome": "Vila Salgada", "sub": "a vila dos pescadores", "desc": "Casinhas de pedra pintadas de azul, redes no varal e cheiro de peixe frito. Todo mundo sabe da vida de todo mundo.", "x": 88, "y": 78, "cap": false, "tipo": "moradia"}, {"nome": "Vila do Moinho", "sub": "ao lado dos Campos da Aldeia Velha", "desc": "Um moinho enorme que nunca para, uma padaria e casas com horta no quintal. A vila mais tranquila do reino.", "x": 24, "y": 58, "cap": false, "tipo": "moradia"}, {"nome": "Praça do Conselho", "sub": "o coração da capital", "desc": "A pedra com o símbolo do Conselho, o grande poço e as ruas que nenhuma lâmina pode manchar. Aqui o Conselho se reúne.", "x": 50, "y": 46, "cap": true, "tipo": ""}, {"nome": "O Cálice do Condenado", "sub": "a taverna da capital", "desc": "Onde a Vovó Erminda mexe o caldo e conta histórias que ninguém mais tem coragem de contar.", "x": 22, "y": 66, "cap": true, "tipo": ""}, {"nome": "A Pena do Esquecido", "sub": "a biblioteca do reino", "desc": "Mil velas, nenhuma janela. Dona Pergaminha conhece cada livro pelo cheiro e cada leitor pelo atraso. Aqui está guardado o Códice do Reino.", "x": 50, "y": 17, "cap": true, "tipo": ""}, {"nome": "Selo & Lacre", "sub": "a casa de expedições", "desc": "Correio, contratos e caravanas. No telhado fica o pombal; no balcão, o Mestre Lacre carimba tudo duas vezes.", "x": 82, "y": 28, "cap": true, "tipo": ""}, {"nome": "O Leito do Peregrino", "sub": "a estalagem", "desc": "Camas de palha, sopa quente e a dona Hilda, que sabe o nome de todo hóspede e a dívida de cada um.", "x": 18, "y": 28, "cap": true, "tipo": ""}, {"nome": "A Travessa do Bardo", "sub": "o beco da cidade velha", "desc": "Um beco torto onde sempre tem alguém cantando. Dizem que foi aqui que a feiticeira morou. Lírio, o bardo, cobra uma moeda por cada verdade e duas por cada mentira.", "x": 66, "y": 58, "cap": true, "tipo": ""}, {"nome": "A Casa da Mentira", "sub": "na Travessa do Bardo", "desc": "Fausto, o dono, nunca disse uma verdade na vida (ele jura). Jogos de blefe, apostas e segredos vendidos por quilo.", "x": 84, "y": 68, "cap": true, "tipo": ""}, {"nome": "A Lua Torta", "sub": "miudezas embaixo, a cartomante em cima", "desc": "Uma casinha torta de dois andares. Embaixo, o Tobias Pavio vende velas, amuletos e miudezas. Em cima, no sótão, a Madame Véu lê as cartas para quem tiver coragem de subir a escada.", "x": 40, "y": 78, "cap": true, "tipo": ""}, {"nome": "O Frasco Rachado", "sub": "loja de poções, na Travessa", "desc": "Madame Borbulha vende poções de vida, mana e vigor — e outras que ela prefere não explicar. Nada de devolução.", "x": 64, "y": 77, "cap": true, "tipo": ""}, {"nome": "Alto dos Nobres", "sub": "os casarões da capital", "desc": "Casarões com jardim, portão de ferro e criado na porta. Daqui se vê a capital inteira — e a capital inteira olha de volta.", "x": 30, "y": 14, "cap": true, "tipo": "moradia"}, {"nome": "Rua das Lanternas", "sub": "sobrados de comerciantes", "desc": "Sobrados coloridos, lojinha embaixo e casa em cima. As lanternas ficam acesas a noite toda: ninguém lembra quem paga o óleo.", "x": 20, "y": 86, "cap": true, "tipo": "moradia"}, {"nome": "Cortiço do Beco", "sub": "atrás da Travessa do Bardo", "desc": "Quartinhos empilhados, varais de lado a lado e uma escada que range. Barato, apertado e cheio de histórias.", "x": 90, "y": 48, "cap": true, "tipo": "moradia"}], "arcanos": [{"ico": "☀", "nome": "O Sol", "desc": "Tudo fica claro. Seus golpes acham o caminho.", "ruim": false}, {"ico": "🌙", "nome": "A Lua", "desc": "O que está escondido vem até você: peixes e pedras raras.", "ruim": false}, {"ico": "✨", "nome": "A Estrela", "desc": "Esperança. Uma luz pequena e teimosa no escuro.", "ruim": false}, {"ico": "🐎", "nome": "O Carro", "desc": "Vitória para quem segura as rédeas. Avance.", "ruim": false}, {"ico": "🦁", "nome": "A Força", "desc": "Coragem mansa. Domina a fera sem gritar.", "ruim": false}, {"ico": "🎩", "nome": "O Mago", "desc": "Mãos rápidas, mente mais rápida ainda.", "ruim": false}, {"ico": "🎡", "nome": "A Roda", "desc": "A sorte gira. Hoje ela gira para você.", "ruim": false}, {"ico": "😈", "nome": "O Diabo", "desc": "Força emprestada. O preço vem depois.", "ruim": false}, {"ico": "🗼", "nome": "A Torre", "desc": "Algo vai ruir. Cuidado com o que você acha firme.", "ruim": true}, {"ico": "🙃", "nome": "O Enforcado", "desc": "Pare. Olhe de cabeça para baixo antes de agir.", "ruim": true}, {"ico": "💀", "nome": "A Morte", "desc": "Não é o fim de você: é o fim de alguma coisa. Deixe ir.", "ruim": false}, {"ico": "🃏", "nome": "O Louco", "desc": "Um passo no abismo, rindo. Às vezes dá certo.", "ruim": false}], "historia": {"total": 37, "atos": 12, "abertos": [{"t": "A Pedra do Conselho", "r": "Todo aventureiro do Lar começa do mesmo jeito: com o nome gravado diante da pedra onde o terceiro rei mandou escrever as regras que nem ele podia quebrar.", "l": "O Centro", "ato": 1}, {"t": "As Pedras de Paz", "r": "O terceiro rei marcou as zonas de paz com pedras gravadas: o mercado, o poço, o caminho dos templos. Alguém anda arrancando as marcas.", "l": "Centro · Dross · Colina", "ato": 1}, {"t": "Sangue na Areia", "r": "O Ventre da Fera aceita novos nomes no outono. Para lutar no coliseu do terceiro rei é preciso mais do que coragem: é preciso entender por que ele existe.", "l": "O Ventre da Fera", "ato": 1}, {"t": "Respiração nas Galerias", "r": "Os mineiros da Primeira Zona juram ouvir algo respirando dentro da pedra. O capataz quer que alguém desça antes que larguem as picaretas.", "l": "Primeira Zona Baixa", "ato": 2}, {"t": "O Ouro que Espera", "r": "Na Segunda Zona Baixa, os velhos mineiros dizem que o ouro brota da pedra como se esperasse ser encontrado. Alguém finalmente o encontrou — e não quer dividir.", "l": "Segunda Zona Baixa", "ato": 2}, {"t": "A Muralha do Rei Louco", "r": "Ninguém quis construir a muralha. O conselho riu, depois se ofendeu. Quando ficou pronta, os vizinhos pararam de mandar diplomatas. Agora há uma rachadura nela.", "l": "A Fronteira", "ato": 2}]}, "mortes": [{"ico": "🌊", "nome": "A Morte nas Águas", "visao": "Vejo água escura fechando sobre a sua cabeça…", "evitar": "Ofereça ao mar um peixe raro (Peixe-Lanterna ou Linguado Dourado) no Porto Velho."}, {"ico": "🍷", "nome": "O Cálice Envenenado", "visao": "Um cálice. Um brinde. E depois, silêncio.", "evitar": "Tome o Antídoto do Frasco Rachado (armaria ou um alquimista) antes do dia."}, {"ico": "🐾", "nome": "A Fera que Espera", "visao": "Olhos amarelos no escuro. Ela sabe o seu cheiro.", "evitar": "Vença uma fera de nível 15 ou mais antes do dia: ela perde o seu rastro."}, {"ico": "🗡", "nome": "A Faca nas Costas", "visao": "Uma mão amiga no seu ombro… e a outra segura a faca.", "evitar": "Peça a um amigo de verdade (laço 100+) que jure lealdade a você (Interagir → 🤝 Jurar lealdade)."}, {"ico": "🤒", "nome": "A Febre Negra", "visao": "Suor frio, febre que não baixa, um nome sussurrado.", "evitar": "Seja abençoado(a): Água Benta, a bênção de um sacerdote ou a Mão do Sol Velho."}, {"ico": "🕯", "nome": "A Queda", "visao": "Vento, pedra, e o chão vindo depressa demais.", "evitar": "Acenda uma vela no altar das Ruínas do Templo Velho (lugar secreto)."}], "maldicoes": [{"ico": "🐦‍⬛", "nome": "Olho do Corvo", "desc": "Um corvo invisível bica a sua visão: −6 de acerto na arena e nos confrontos.", "horas": 24}, {"ico": "😴", "nome": "Sono do Véu", "desc": "Você começa toda luta com só 70% da mana e do vigor.", "horas": 12}, {"ico": "🕳", "nome": "Mão Furada", "desc": "O dinheiro escorre: tudo nas lojas custa 20% a mais.", "horas": 24}, {"ico": "🤐", "nome": "Língua Presa", "desc": "As palavras não saem direito: você não ganha Pontos de RP conversando.", "horas": 12}, {"ico": "🐈‍⬛", "nome": "Azar do Gato Preto", "desc": "−20% para bater carteira e as feras te acham com mais facilidade.", "horas": 24}, {"ico": "🤒", "nome": "Febre do Pântano", "desc": "−15% de vida máxima na arena e nos confrontos. O Frasco Rachado vende remédio.", "horas": 18}, {"ico": "⚰", "nome": "Sentença do Corvo", "desc": "O corvo disse o seu nome em voz alta. Uma profecia de morte cai sobre você (só a partir do nível 10).", "horas": 12}, {"ico": "🔥", "nome": "Marca da Besta", "desc": "Queima por dentro: +10% de dano, mas −4 de defesa. Os NPCs olham torto.", "horas": 48}]};
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
function aviso(t) { const e = document.createElement("div"); e.className = "copiado"; e.textContent = t; document.body.appendChild(e); setTimeout(() => e.remove(), 1800); }
async function copiar(t) { try { await navigator.clipboard.writeText(t); aviso("Copiado!"); } catch (_) { const ta = document.createElement("textarea"); ta.value = t; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); aviso("Copiado!"); } catch (__) { aviso("Selecione e copie o texto"); } ta.remove(); } }

/* ===================== o céu: estrelas, montanhas, a Fera respirando e vaga-lumes ===================== */
(() => {
  const cv = $("#ceu"), g = cv.getContext("2d"); let W, H, dpr, est = [], vag = [], mx = -999, my = -999, t0 = performance.now();
  function tam() { dpr = Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0);
    est = Array.from({ length: Math.round(W * H / 2600) }, () => ({ x: Math.random() * W, y: Math.random() * H * .7, r: Math.random() * 1.3 + .2, f: Math.random() * 6 }));
    vag = Array.from({ length: 34 }, () => ({ x: Math.random() * W, y: H * .45 + Math.random() * H * .5, vx: 0, vy: 0, f: Math.random() * 6 })); }
  const ser = (x, a, b, c) => Math.sin(x * a + c) * b;
  function montanha(base, amp, cor, seed) { g.beginPath(); g.moveTo(0, H); for (let x = 0; x <= W; x += 8) g.lineTo(x, base - Math.abs(ser(x, .004, amp, seed) + ser(x, .011, amp * .45, seed * 2) + ser(x, .027, amp * .18, seed * 3))); g.lineTo(W, H); g.closePath(); g.fillStyle = cor; g.fill(); }
  function fera(t) {
    // a Fera: um vulto enorme dormindo sobre a crista, que sobe e desce devagar
    const cx = W * .68, cy = H * .55, esc = Math.min(W, 1200) / 1200, resp = 1 + Math.sin(t / 1900) * .018;
    g.save(); g.translate(cx, cy); g.scale(esc * resp, esc * (2 - resp));
    g.beginPath(); g.moveTo(-330, 40); g.bezierCurveTo(-300, -40, -180, -110, -40, -100); g.bezierCurveTo(60, -95, 140, -70, 190, -40);
    g.bezierCurveTo(230, -70, 270, -95, 300, -80); g.bezierCurveTo(330, -66, 330, -40, 300, -30); g.bezierCurveTo(330, -10, 320, 20, 290, 30); g.bezierCurveTo(200, 46, 0, 50, -330, 40); g.closePath();
    g.fillStyle = "#07050d"; g.fill();
    g.beginPath(); g.moveTo(268, -78); g.lineTo(282, -120); g.lineTo(290, -82); g.moveTo(286, -76); g.lineTo(312, -110); g.lineTo(306, -72); g.fill();
    const olho = .35 + Math.max(0, Math.sin(t / 7000)) * .65 * (Math.sin(t / 7000) > .96 ? 1 : 0);
    g.beginPath(); g.ellipse(296, -52, 6, 1.2 + olho * 2.5, 0, 0, Math.PI * 2); g.fillStyle = `rgba(233,166,75,${.15 + olho * .7})`; g.fill();
    for (let i = 0; i < 9; i++) { g.beginPath(); const x = -260 + i * 52; g.moveTo(x, -60 - Math.sin(i) * 30); g.lineTo(x + 18, -96 - Math.sin(i) * 26); g.lineTo(x + 30, -58 - Math.sin(i) * 28); g.fillStyle = "#07050d"; g.fill(); }
    g.restore();
  }
  function quadro(now) {
    const t = now - t0;
    const ceu = g.createLinearGradient(0, 0, 0, H); ceu.addColorStop(0, "#0b0816"); ceu.addColorStop(.55, "#1d1430"); ceu.addColorStop(1, "#2b1726"); g.fillStyle = ceu; g.fillRect(0, 0, W, H);
    const lua = g.createRadialGradient(W * .2, H * .2, 0, W * .2, H * .2, 160); lua.addColorStop(0, "rgba(255,236,196,.95)"); lua.addColorStop(.18, "rgba(255,226,170,.9)"); lua.addColorStop(.2, "rgba(255,220,160,.25)"); lua.addColorStop(1, "rgba(255,220,160,0)");
    g.fillStyle = lua; g.fillRect(0, 0, W, H);
    for (const s of est) { g.globalAlpha = .35 + .65 * Math.abs(Math.sin(t / 1400 + s.f)); g.fillStyle = "#f6ecd6"; g.fillRect(s.x, s.y, s.r, s.r); } g.globalAlpha = 1;
    montanha(H * .62, 120, "#140e22", 1.3); montanha(H * .74, 70, "#0f0a19", 2.1); montanha(H * .88, 40, "#0a0711", 3.7);
    for (const v of vag) {
      const dx = mx - v.x, dy = my - v.y, d = Math.hypot(dx, dy);
      if (d < 220) { v.vx += dx / d * .06; v.vy += dy / d * .06; } v.vx += (Math.random() - .5) * .08; v.vy += (Math.random() - .5) * .08; v.vx *= .96; v.vy *= .96;
      v.x += v.vx; v.y += v.vy; if (v.x < 0) v.x = W; if (v.x > W) v.x = 0; if (v.y < H * .3) v.vy += .05; if (v.y > H) v.y = H * .5;
      const a = .4 + .6 * Math.abs(Math.sin(t / 600 + v.f)), gr = g.createRadialGradient(v.x, v.y, 0, v.x, v.y, 10);
      gr.addColorStop(0, `rgba(255,224,138,${a})`); gr.addColorStop(1, "rgba(255,224,138,0)"); g.fillStyle = gr; g.fillRect(v.x - 10, v.y - 10, 20, 20);
    }
    if (!reduz) requestAnimationFrame(quadro);
  }
  addEventListener("resize", tam); cv.parentElement.addEventListener("pointermove", e => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
  cv.parentElement.addEventListener("pointerleave", () => { mx = my = -999; });
  tam(); requestAnimationFrame(quadro);
})();

/* ===================== o oráculo ===================== */
(() => {
  const PERG = [
    { p: "Uma ponte quebrada sobre o abismo. Do outro lado, alguém pede ajuda. Você…", ops: [["pula. Pensar é para depois.", { forca: 2, constituicao: 1 }], ["procura outra passagem com calma.", { sabedoria: 2, inteligencia: 1 }], ["convence alguém a buscar uma corda.", { carisma: 2 }], ["equilibra nos cabos que sobraram.", { destreza: 2 }]] },
    { p: "No mercado de Dross, um mercador encapuzado te oferece um livro proibido.", ops: [["Compro. Conhecimento é poder.", { inteligencia: 2 }], ["Pergunto de onde veio antes.", { sabedoria: 2 }], ["Pego quando ele não estiver olhando.", { destreza: 2, carisma: 1 }], ["Recuso. Não gosto do cheiro dele.", { constituicao: 1, forca: 1 }]] },
    { p: "Qual destas coisas você levaria numa viagem longa?", ops: [["Uma lâmina boa e bem afiada.", { forca: 1, destreza: 1 }], ["Um alaúde, para as noites de fogueira.", { carisma: 2 }], ["Ervas, mapas e um caderno.", { inteligencia: 1, sabedoria: 1 }], ["Um escudo. E mais comida do que cabe.", { constituicao: 2 }]] },
    { p: "A sombra da Fera cruza o céu ao amanhecer. O que você sente?", ops: [["Curiosidade: quero ver de perto.", { destreza: 1, inteligencia: 1 }], ["Respeito. Ela parece triste.", { sabedoria: 2 }], ["Vontade de desafiar.", { forca: 2 }], ["Que daria uma ótima canção.", { carisma: 2 }]] },
    { p: "Seus amigos diriam que você é…", ops: [["o escudo do grupo.", { constituicao: 2, forca: 1 }], ["quem resolve o enigma.", { inteligencia: 2 }], ["quem some e volta com a solução.", { destreza: 2 }], ["quem faz todo mundo rir (e obedecer).", { carisma: 2, sabedoria: 1 }]] }
  ];
  const NOMES = { humano: ["Aldo", "Bera", "Cael", "Dália", "Edric", "Isolde", "Joran", "Marta"], elfo: ["Aelar", "Ilyra", "Thaliel", "Saelis", "Lorien", "Veyra"], anao: ["Brom", "Dagna", "Thorvi", "Gundra", "Bruni", "Hilde"],
    minotauro: ["Kragh", "Morva", "Tauron", "Bassa"], tiefling: ["Nyx", "Zariel", "Mordai", "Lilith", "Vesper"], gnomo: ["Pip", "Fizzel", "Nimble", "Tilda", "Bolo"], meioorc: ["Grosh", "Urza", "Thokk", "Mara"],
    satiro: ["Pan", "Lírio", "Dafne", "Tibério"], draconato: ["Kriv", "Sora", "Vharo", "Ignis"], fada: ["Orvalha", "Pólen", "Lume", "Vespa"], vampiro: ["Lucan", "Seraphine", "Drago", "Morwen"] };
  const SOBRE = ["da Ponte Quebrada", "Mão-Leve", "Corvonegro", "Pedrafunda", "das Sete Luas", "Sal-Grosso", "Vela-Torta", "Olho-de-Brasa", "do Vale", "Fio-de-Prata"];
  const RESTRITA = { druida: ["elfo", "fada"] };
  let i = 0, soma = {};
  const box = $("#pergunta"), dest = $("#destino");
  function mostrar() {
    const q = PERG[i];
    box.innerHTML = `<span class="rotulo">Pergunta ${i + 1} de ${PERG.length}</span><h3>${esc(q.p)}</h3><div class="ops">${q.ops.map((o, k) => `<button class="op" type="button" data-k="${k}">${esc(o[0])}</button>`).join("")}</div>
      <div class="barra">${PERG.map((_, k) => `<i class="${k <= i ? "on" : ""}"></i>`).join("")}</div>`;
    box.querySelectorAll(".op").forEach(b => b.addEventListener("click", () => { for (const [a, v] of Object.entries(q.ops[+b.dataset.k][1])) soma[a] = (soma[a] || 0) + v; i++; i < PERG.length ? mostrar() : revelar(); }));
  }
  function revelar() {
    const at = a => soma[a] || 0, sorte = Math.random() * .4;
    const cls = DADOS.classes.map(c => ({ c, n: at(c.prim) * 2 + at(c.sec) + Math.random() * .9 })).sort((a, b) => b.n - a.n)[0].c;
    const rs = DADOS.racas.filter(r => !RESTRITA[cls.id] || RESTRITA[cls.id].includes(r.id)).map(r => ({ r, n: Object.entries(r.bonus || {}).reduce((s, [a, v]) => s + v * at(a), 0) + Math.random() * 2 + sorte })).sort((a, b) => b.n - a.n);
    const raca = rs[0].r, ns = NOMES[raca.id] || NOMES.humano, nome = `${ns[Math.floor(Math.random() * ns.length)]} ${SOBRE[Math.floor(Math.random() * SOBRE.length)]}`;
    dest.classList.remove("revela"); void dest.offsetWidth; dest.classList.add("revela");
    dest.innerHTML = `<canvas id="sigilo" width="240" height="240" aria-hidden="true"></canvas><span class="rotulo">O seu destino</span><div class="nome">${esc(nome)}</div>
      <div class="quem">${esc(raca.nome)} · ${esc(cls.nome)}</div><p class="frase">“${esc(cls.lema || "")}”</p><p class="frase">${esc(raca.lema || "")}</p>
      <div class="acts"><button class="btn" type="button" id="d-copiar">Copiar o meu destino</button><button class="btn vazio" type="button" id="d-de-novo">Perguntar de novo</button></div>`;
    sigilo($("#sigilo"), nome + raca.id + cls.id);
    $("#d-copiar").addEventListener("click", () => copiar(`🔮 A Madame Véu leu o meu destino no Lar da Besta: sou ${nome}, ${raca.nome} ${cls.nome}. “${cls.lema || ""}”`));
    $("#d-de-novo").addEventListener("click", () => { i = 0; soma = {}; mostrar(); });
    box.innerHTML = `<span class="rotulo">A Madame Véu fecha os olhos</span><h3>— As cartas falaram.</h3><p style="color:var(--pergaminho2)">No reino, quem escolhe a raça e a vocação é você, na hora de criar o personagem. Mas se o coração bater mais forte por esta carta… você sabe o caminho.</p>
      <div class="barra">${PERG.map(() => `<i class="on"></i>`).join("")}</div>`;
  }
  /* o sigilo: um selo desenhado a partir do nome (sempre o mesmo para o mesmo destino) */
  function sigilo(cv, seed) {
    const g = cv.getContext("2d"), c = 120; let h = 0; for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0; const rnd = () => ((h = (h * 1103515245 + 12345) >>> 0) / 4294967296);
    g.clearRect(0, 0, 240, 240); g.strokeStyle = "#e9a64b"; g.lineWidth = 2; g.beginPath(); g.arc(c, c, 104, 0, Math.PI * 2); g.stroke(); g.beginPath(); g.arc(c, c, 94, 0, Math.PI * 2); g.globalAlpha = .45; g.stroke(); g.globalAlpha = 1;
    const n = 5 + Math.floor(rnd() * 4), pts = Array.from({ length: n }, (_, k) => { const a = k / n * Math.PI * 2 - Math.PI / 2; return [c + Math.cos(a) * 78, c + Math.sin(a) * 78]; });
    g.lineWidth = 2.2; g.beginPath(); let k = 0; const passo = 2 + Math.floor(rnd() * (n - 3)); for (let m = 0; m <= n; m++) { const p = pts[k % n]; m ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]); k += passo; } g.stroke();
    g.fillStyle = "#ffd38a"; pts.forEach(p => { g.beginPath(); g.arc(p[0], p[1], 4, 0, Math.PI * 2); g.fill(); });
    g.beginPath(); g.arc(c, c, 14 + rnd() * 12, 0, Math.PI * 2); g.stroke();
  }
  mostrar();
})();

/* ===================== o mapa ilustrado (SVG) ===================== */
(() => {
  const box = $("#mapa-box"), ficha = $("#lugar"), NS = "http://www.w3.org/2000/svg";
  const L = DADOS.locais.filter(l => Number.isFinite(l.x) && Number.isFinite(l.y));
  const reg = L.filter(l => !l.cap), cap = L.filter(l => l.cap);
  const W = 1000, H = 720, X = x => x * W / 100, Y = y => y * H / 100;
  let semente = 11; const rnd = () => ((semente = (semente * 16807) % 2147483647) / 2147483647);
  const ICO = n => /centro/i.test(n) ? "🏰" : /ventre/i.test(n) ? "⚔" : /colina/i.test(n) ? "⛰" : /funer/i.test(n) ? "⚰" : /ceia/i.test(n) ? "🍷" : /fronteira/i.test(n) ? "🛡" : /dross/i.test(n) ? "🐚"
    : /zona|garganta/i.test(n) ? "⛏" : /covil/i.test(n) ? "🐉" : /lápides|lapides/i.test(n) ? "🪦" : /campos/i.test(n) ? "🌾" : /porto/i.test(n) ? "⚓" : /praia/i.test(n) ? "🐚"
    : /floresta|bosque|mata|pinhal/i.test(n) ? "🌲" : /aldeia|vila/i.test(n) ? "🏠" : "✦";
  const p = [];
  const onda = (x, y, w) => `<path class="mp-onda" d="M${x} ${y} q${w / 4} -6 ${w / 2} 0 t${w / 2} 0" fill="none" stroke="#5b7f93" stroke-width="1.6" stroke-dasharray="14 6" opacity=".7"/>`;
  // ---- defs
  p.push(`<defs>
    <filter id="mp-grao" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .38 0 0 0 0 .25 0 0 0 0 .1 0 0 0 .5 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
    <filter id="mp-tinta"><feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="2"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
    <filter id="mp-blur"><feGaussianBlur stdDeviation="14"/></filter>
    <radialGradient id="mp-papel" cx="50%" cy="45%" r="75%"><stop offset="0" stop-color="#f3e4bf"/><stop offset=".6" stop-color="#e3cb93"/><stop offset=".92" stop-color="#b98d4e"/><stop offset="1" stop-color="#6b4520"/></radialGradient>
    <radialGradient id="mp-mar" cx="100%" cy="60%" r="60%"><stop offset="0" stop-color="#7f9fa8"/><stop offset="1" stop-color="#a9bfb4"/></radialGradient>
    <radialGradient id="mp-cera" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#d0473f"/><stop offset=".6" stop-color="#8e1b1b"/><stop offset="1" stop-color="#4e0b0b"/></radialGradient>
    <radialGradient id="mp-ouro" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff1a8"/><stop offset=".6" stop-color="#d9a33c"/><stop offset="1" stop-color="#7a5212"/></radialGradient>
    <pattern id="mp-campo" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(30)"><path d="M0 5h10" stroke="#8a6a2a" stroke-width="1.2" opacity=".55"/></pattern>
    <pattern id="mp-campo2" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-40)"><path d="M0 4h9" stroke="#7a7a2a" stroke-width="1.1" opacity=".5"/></pattern>
  </defs>`);
  // ---- papel com bordas queimadas
  const borda = []; for (let k = 0; k <= 40; k++) borda.push([k / 40 * W, 6 + rnd() * 10]); for (let k = 0; k <= 30; k++) borda.push([W - 6 - rnd() * 10, k / 30 * H]);
  for (let k = 40; k >= 0; k--) borda.push([k / 40 * W, H - 6 - rnd() * 10]); for (let k = 30; k >= 0; k--) borda.push([6 + rnd() * 10, k / 30 * H]);
  const bordaD = "M" + borda.map(q => q.map(v => v.toFixed(1)).join(" ")).join(" L") + "Z";
  p.push(`<clipPath id="mp-folha"><path d="${bordaD}"/></clipPath><g clip-path="url(#mp-folha)">
    <rect width="${W}" height="${H}" fill="url(#mp-papel)"/>`);
  // ---- mar do leste e costa
  const costa = [[1000, 250], [968, 262], [950, 318], [958, 380], [930, 440], [946, 500], [918, 560], [934, 620], [906, 680], [918, 720], [1000, 720]];
  p.push(`<path d="M${costa.map(c => c.join(" ")).join(" L")}Z" fill="url(#mp-mar)" stroke="#4a3a24" stroke-width="2" filter="url(#mp-tinta)"/>`);
  p.push(`<path d="M${costa.slice(0, -1).map(c => (c[0] - 9) + " " + c[1]).join(" L")}" fill="none" stroke="#5b7f93" stroke-width="1" stroke-dasharray="3 5" opacity=".7"/>`);
  for (let k = 0; k < 9; k++) p.push(onda(950 + rnd() * 30, 300 + k * 46, 34));
  // ---- lago de Dross
  p.push(`<ellipse cx="${X(20)}" cy="${Y(75)}" rx="92" ry="52" fill="#9db7b0" stroke="#4a3a24" stroke-width="2" filter="url(#mp-tinta)"/><ellipse cx="${X(20)}" cy="${Y(75)}" rx="78" ry="40" fill="none" stroke="#6f8f93" stroke-width="1" stroke-dasharray="4 6"/>`);
  for (let k = 0; k < 3; k++) p.push(onda(X(20) - 44 + k * 18, Y(72) + k * 12, 30));
  // ---- rio da Cordilheira até o mar, passando pelo Porto Velho
  p.push(`<path d="M560 110 C540 170 610 220 590 280 S540 370 600 420 S600 520 ${X(58)} ${Y(75) + 4} S760 560 820 600 S900 615 925 620" fill="none" stroke="#6f93a0" stroke-width="7" stroke-linecap="round" opacity=".85" filter="url(#mp-tinta)"/>
    <path d="M560 110 C540 170 610 220 590 280 S540 370 600 420 S600 520 ${X(58)} ${Y(75) + 4} S760 560 820 600 S900 615 925 620" fill="none" stroke="#b9d0cc" stroke-width="2" stroke-linecap="round" opacity=".7"/>`);
  // ---- campos
  p.push(`<g opacity=".9"><path d="M250 300 l70 -14 l40 40 l-60 30 z" fill="url(#mp-campo)" stroke="#8a6a2a" stroke-width="1"/><path d="M322 286 l62 6 l-8 52 l-36 -18 z" fill="url(#mp-campo2)" stroke="#8a6a2a" stroke-width="1"/><path d="M262 360 l40 -6 l36 30 l-56 14 z" fill="url(#mp-campo2)" stroke="#8a6a2a" stroke-width="1"/></g>`);
  // ---- florestas
  const arvore = (x, y, s, tipo) => tipo ? `<path d="M${x} ${y - 14 * s} l${7 * s} ${16 * s} h${-14 * s} z M${x} ${y - 9 * s} l${8 * s} ${15 * s} h${-16 * s} z" fill="#4f5d2c" stroke="#2c3418" stroke-width=".8"/><path d="M${x} ${y + 6 * s} v${4 * s}" stroke="#3a2410" stroke-width="1.4"/>`
    : `<circle cx="${x}" cy="${y - 6 * s}" r="${7 * s}" fill="#5f6b30" stroke="#2f3a18" stroke-width=".8"/><path d="M${x} ${y} v${6 * s}" stroke="#3a2410" stroke-width="1.4"/>`;
  [[33, 32, 46, 1], [63, 33, 40, 0], [90, 50, 30, 0], [28, 13, 36, 1], [12, 46, 24, 1], [76, 44, 18, 0], [40, 58, 14, 0]].forEach(([fx, fy, n, tipo]) => {
    const arr = []; for (let k = 0; k < n; k++) { const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * (26 + n * .9); arr.push([X(fx) + Math.cos(a) * r * 1.3, Y(fy) + Math.sin(a) * r * .8, .8 + rnd() * .5]); }
    arr.sort((a, b) => a[1] - b[1]).forEach(([x, y, sc]) => p.push(arvore(Math.round(x), Math.round(y), +sc.toFixed(2), tipo)));
  });
  // ---- Cordilheira do Norte
  const picos = []; for (let x = 40; x < 960; x += 34 + rnd() * 24) picos.push([x, 66 + rnd() * 52, 34 + rnd() * 30]);
  picos.forEach(([x, base, h]) => { const w = h * (1 + rnd() * .5);
    p.push(`<path d="M${x - w} ${base} L${x} ${base - h} L${x + w} ${base}Z" fill="#cdb07a" stroke="#3a2410" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M${x} ${base - h} L${x + w} ${base} L${x + w * .25} ${base}Z" fill="#9a7a48" opacity=".75"/>
      <path d="M${x - w * .32} ${base - h * .68} L${x} ${base - h} L${x + w * .3} ${base - h * .7} L${x + w * .08} ${base - h * .6} L${x - w * .1} ${base - h * .72}Z" fill="#f6efdf" opacity=".9"/>`); });
  // a Fera dormindo entre os picos
  p.push(`<g class="mp-fera"><image href="img/dragao.webp" x="${X(43)}" y="${Y(-1)}" width="170" height="113" opacity=".88" style="filter: sepia(1) saturate(.6) brightness(1.15) contrast(1.1)"/></g>
    <text x="${X(51)}" y="${Y(17.5)}" text-anchor="middle" font-family="IM Fell English, Georgia, serif" font-style="italic" font-size="15" fill="#5a2a12">aqui dorme a Fera</text>`);
  // ---- muralha do Rei Louco (Fronteira)
  let mur = "M118 36"; for (let y = 36; y < 300; y += 14) mur += ` L${118 + Math.sin(y / 40) * 8} ${y}`;
  p.push(`<path d="${mur}" fill="none" stroke="#5a3a1a" stroke-width="7" stroke-dasharray="7 4"/><path d="${mur}" fill="none" stroke="#3a2410" stroke-width="2"/>`);
  // ---- colinas e minas
  const colina = (x, y, w) => `<path d="M${x - w} ${y} Q${x} ${y - w * .9} ${x + w} ${y}" fill="#d4b47a" stroke="#3a2410" stroke-width="1.4"/><path d="M${x - w * .5} ${y - w * .22} q${w * .3} -${w * .25} ${w * .6} 0" fill="none" stroke="#6b4a26" stroke-width="1" opacity=".7"/>`;
  [[78, 25, 38], [88, 25, 26], [70, 65, 40], [70, 87, 44], [50, 89, 36], [88, 37, 24]].forEach(([cx, cy, w]) => p.push(colina(X(cx), Y(cy), w)));
  // ---- a capital (Centro) com muralha e casas
  const cx0 = X(50), cy0 = Y(46);
  let casas = ""; for (let k = 0; k < 16; k++) { const a = rnd() * Math.PI * 2, r = 10 + rnd() * 30, x = cx0 + Math.cos(a) * r * 1.2, y = cy0 + Math.sin(a) * r * .8; casas += `<path d="M${x - 5} ${y} v-6 l5 -5 l5 5 v6z" fill="#e9d2a0" stroke="#3a2410" stroke-width=".9"/><path d="M${x - 6} ${y - 6} l6 -6 l6 6" fill="none" stroke="#8e1b1b" stroke-width="1.6"/>`; }
  p.push(`<ellipse cx="${cx0}" cy="${cy0}" rx="58" ry="42" fill="#dcc08a" stroke="#3a2410" stroke-width="3" stroke-dasharray="10 3"/>${casas}
    ${[0, 1, 2, 3, 4, 5].map(k => { const a = k / 6 * Math.PI * 2; return `<rect x="${cx0 + Math.cos(a) * 58 - 5}" y="${cy0 + Math.sin(a) * 42 - 9}" width="10" height="12" fill="#c9a86a" stroke="#3a2410" stroke-width="1.2"/>`; }).join("")}`);
  // ---- a arena (coliseu)
  p.push(`<ellipse cx="${X(40)}" cy="${Y(72)}" rx="30" ry="18" fill="#cdb07a" stroke="#3a2410" stroke-width="2"/><ellipse cx="${X(40)}" cy="${Y(72)}" rx="18" ry="10" fill="#b48a4a" stroke="#3a2410" stroke-width="1"/>`);
  // ---- névoa no Vale e na Mata Negra
  p.push(`<g class="mp-nevoa" opacity=".55"><ellipse cx="${X(89)}" cy="${Y(40)}" rx="70" ry="40" fill="#f6efe2" filter="url(#mp-blur)"/><ellipse cx="${X(84)}" cy="${Y(52)}" rx="50" ry="26" fill="#f6efe2" filter="url(#mp-blur)"/></g>`);
  // ---- estradas da capital a cada lugar
  const c0 = reg.find(l => /centro/i.test(l.nome)) || reg[0];
  for (const l of reg) { if (l === c0) continue; const mx = (X(c0.x) + X(l.x)) / 2 + (rnd() - .5) * 60, my = (Y(c0.y) + Y(l.y)) / 2 + (rnd() - .5) * 40;
    p.push(`<path d="M${X(c0.x)} ${Y(c0.y)} Q${mx.toFixed(0)} ${my.toFixed(0)} ${X(l.x)} ${Y(l.y)}" fill="none" stroke="#7a4f22" stroke-width="2" stroke-dasharray="2 7" stroke-linecap="round" opacity=".8"/>`); }
  // ---- barco e serpente no mar
  p.push(`<g transform="translate(962 470)"><path d="M-16 6 q16 10 32 0 l-4 -6 h-24z" fill="#6b4520" stroke="#2a1a08" stroke-width="1"/><path d="M0 0 v-26 M0 -24 q14 8 0 18" fill="#f3e4bf" stroke="#2a1a08" stroke-width="1.2"/></g>
    <g transform="translate(958 610)" fill="none" stroke="#3d5a52" stroke-width="3" stroke-linecap="round"><path d="M-24 4 q6 -14 12 0 t12 0 t12 0"/><path d="M12 4 q4 -12 10 -10" /><circle cx="22" cy="-7" r="1.6" fill="#3d5a52"/></g>`);
  // ---- nomes das regiões
  const nome = (x, y, t, sz, rot, cor) => `<text x="${x}" y="${y}" transform="rotate(${rot || 0} ${x} ${y})" text-anchor="middle" font-family="IM Fell English SC, Georgia, serif" font-size="${sz}" letter-spacing="3" fill="${cor || "#4a2a10"}" opacity=".85">${t}</text>`;
  p.push(nome(250, 30, "CORDILHEIRA DO NORTE", 17), nome(978, 400, "MAR DO LESTE", 15, 90, "#2f4d55"), nome(X(20), Y(75) + 36, "Lago de Dross", 14, 0, "#2f4d55"), nome(96, 200, "a Muralha", 13, -88));
  // ---- rosa dos ventos e cartela
  p.push(`<g transform="translate(70 640)"><circle r="34" fill="none" stroke="#5a3a1a" stroke-width="1.4"/><circle r="26" fill="none" stroke="#5a3a1a" stroke-width=".8" stroke-dasharray="2 3"/>
    <path d="M0 -40 L7 0 L0 40 L-7 0Z" fill="#8e1b1b" stroke="#3a2410"/><path d="M-40 0 L0 7 L40 0 L0 -7Z" fill="#c9a86a" stroke="#3a2410"/><circle r="4" fill="#3a2410"/>
    <text y="-46" text-anchor="middle" font-family="IM Fell English SC, Georgia, serif" font-size="15" fill="#3a2410">N</text></g>`);
  p.push(`<g transform="translate(${X(76)} ${Y(96)})"><path d="M-110 -18 h220 l-12 18 l12 18 h-220 l12 -18z" fill="#e8d3a3" stroke="#5a3a1a" stroke-width="1.6"/><text y="6" text-anchor="middle" font-family="IM Fell English SC, Georgia, serif" font-size="17" letter-spacing="2" fill="#3a2410">O LAR DA BESTA</text></g>`);
  // ---- grão do papel e vinheta
  p.push(`<rect width="${W}" height="${H}" fill="#000" opacity=".9" filter="url(#mp-grao)" style="mix-blend-mode: multiply"/>
    <rect width="${W}" height="${H}" fill="none" stroke="#6b4520" stroke-width="40" opacity=".18"/></g>
    <path d="${bordaD}" fill="none" stroke="#3a2410" stroke-width="2.5"/>`);
  // ---- os selos de cera
  reg.forEach((l, k) => {
    const x = X(l.x), y = Y(l.y), capital = /centro/i.test(l.nome), r = capital ? 19 : 14, gr = capital ? "mp-ouro" : "mp-cera";
    let borda2 = ""; for (let a = 0; a < 12; a++) { const ang = a / 12 * Math.PI * 2, rr = r + (a % 2 ? 1.5 : 3); borda2 += (a ? " L" : "M") + (Math.cos(ang) * rr).toFixed(1) + " " + (Math.sin(ang) * rr).toFixed(1); }
    const lw = Math.max(70, l.nome.length * 8.2 + 20), ly = l.y > 86 ? -r - 22 : r + 8;
    p.push(`<g class="mp-selo" data-k="${k}" tabindex="0" role="button" aria-label="${esc(l.nome)}" transform="translate(${x} ${y})">
      <circle class="halo" r="${r + 4}" fill="none" stroke="${capital ? "#ffd38a" : "#e9a64b"}" stroke-width="3" opacity="0"/>
      <g class="disco"><path d="${borda2}Z" fill="url(#${gr})" stroke="#2a0808" stroke-width="1"/><circle r="${r - 4}" fill="none" stroke="rgba(255,220,180,.45)" stroke-width="1.2"/>
        <text y="${capital ? 7 : 5}" text-anchor="middle" font-size="${capital ? 18 : 14}">${ICO(l.nome)}</text></g>
      <g class="rot" transform="translate(0 ${ly})"><rect x="${-lw / 2}" y="0" width="${lw}" height="22" rx="3" fill="#f3e4bf" stroke="#5a3a1a"/><text y="15.5" text-anchor="middle" font-family="IM Fell English, Georgia, serif" font-size="14" fill="#3a2410">${esc(l.nome)}</text></g>
    </g>`);
  });
  box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa ilustrado do reino">${p.join("")}</svg>`;
  const svg = box.querySelector("svg");
  // traz o selo escolhido para a frente (o rótulo não fica embaixo dos outros)
  function mostrar(l, g) {
    svg.querySelectorAll(".mp-selo.on").forEach(x => x.classList.remove("on"));
    if (g) { g.classList.add("on"); g.parentNode.appendChild(g); }
    const capital = /centro/i.test(l.nome);
    ficha.innerHTML = `<span class="ico-l">${ICO(l.nome)}</span><span class="rotulo">${capital ? "A capital" : "Um lugar do reino"}</span><h3>${esc(l.nome)}</h3><p class="sub">${esc(l.sub || "")}</p><p>${esc(l.desc || "")}</p>
      ${capital ? `<div class="lista">${cap.map((c, k) => `<button type="button" data-c="${k}">${esc(c.nome)}</button>`).join("")}</div>` : ""}`;
    ficha.querySelectorAll("[data-c]").forEach(x => x.addEventListener("click", () => { const c = cap[+x.dataset.c]; ficha.innerHTML = `<span class="rotulo">Na capital</span><h3>${esc(c.nome)}</h3><p class="sub">${esc(c.sub || "")}</p><p>${esc(c.desc || "")}</p><button class="btn vazio" type="button" data-volta style="justify-self:start;color:var(--cera);box-shadow:inset 0 0 0 1px var(--cera)">← Voltar ao Centro</button>`;
      ficha.querySelector("[data-volta]").addEventListener("click", () => mostrar(l, g)); }));
  }
  svg.querySelectorAll(".mp-selo").forEach(g => { const l = reg[+g.dataset.k], f = () => mostrar(l, g); g.addEventListener("click", f); g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f(); } }); });
  const g0 = [...svg.querySelectorAll(".mp-selo")].find(g => /centro/i.test(reg[+g.dataset.k].nome)); if (g0) mostrar(reg[+g0.dataset.k], g0);
})();

/* ===================== a primeira cena ===================== */
(() => {
  const chat = $("#chat"), f = $("#form-rp"), inp = $("#rp-txt"), sug = $("#sugestoes");
  const SUG = ["*entra na taverna e sacode a chuva do capuz*", "Taverneiro, uma sopa e um lugar perto do fogo.", "*derruba o bêbado com um soco e ele desmaia*", "[preciso sair, volto já]", "*tenta ler o mural de missões na parede*"];
  const NPC = ["*O taverneiro Brom limpa um copo e ergue a sobrancelha.* — Novo por aqui?", "*Uma figura de capuz no canto levanta os olhos do copo… e desvia.*", "*O fogo estala. Um gato laranja passa entre as suas pernas.*", "— Dizem que a Fera se mexeu ontem à noite — *cochicha alguém na mesa ao lado.*"];
  let n = 0;
  function add(cls, quem, txt) { const m = document.createElement("div"); m.className = "msg " + cls; m.innerHTML = `<span class="q">${esc(quem)}</span>${esc(txt)}`; chat.appendChild(m); chat.scrollTop = chat.scrollHeight; }
  function vovo(t, alerta) { setTimeout(() => add("vovo" + (alerta ? " alerta" : ""), "Vovó Erminda", t), 450); }
  function avaliar(t) {
    const s = t.trim(); if (!s) return;
    const acao = /^\*.+\*$/.test(s), ooc = /^\[.+\]$/.test(s) || /\[\s*\]\s*$/.test(s) || /^\(\(.+\)\)$/.test(s);
    add(acao ? "acao" : ooc ? "ooc" : "fala", acao ? "Você · ação" : ooc ? "Você · fora do personagem" : "Você · fala", s);
    const pp = /(desmai|nocaute|mata |matou|morre|morreu|derruba|arranca|decapit|desarma|rouba tudo)/i.test(s) && !/tenta/i.test(s);
    if (ooc) vovo("Perfeito. Os colchetes avisam que é você, a pessoa, falando (fala OFF). Ninguém vai achar que o seu personagem foi jantar.");
    else if (acao && pp) vovo("Opa! Isso é decidir pelo outro (o tal “powerplay”). Escreva a tentativa: “*tenta acertar um soco no bêbado*”, e deixe ele dizer se doeu.", true);
    else if (acao && s.length < 14) vovo("Boa ação! Dá para caprichar: o que o seu personagem vê, ouve, sente? Detalhe deixa a cena viva.");
    else if (acao) vovo("Lindo. Ação entre asteriscos, contando o que você faz sem decidir pelos outros. É assim.");
    else if (/^\*/.test(s) || /\*$/.test(s)) vovo("Quase! A ação precisa de asterisco no começo E no fim: *assim*.", true);
    else if (s.length < 3) vovo("Fala um pouquinho mais, querido(a). O taverneiro não ouviu.");
    else vovo("Isso é uma fala: o que o seu personagem diz em voz alta. Quer tentar uma ação agora, entre *asteriscos*?");
    setTimeout(() => add("npc", "O Cálice", NPC[n++ % NPC.length]), 1300);
  }
  f.addEventListener("submit", e => { e.preventDefault(); avaliar(inp.value); inp.value = ""; });
  SUG.forEach(t => { const b = document.createElement("button"); b.type = "button"; b.textContent = t; b.addEventListener("click", () => { inp.value = t; inp.focus(); }); sug.appendChild(b); });
  add("npc", "O Cálice", "*A porta range. Dentro, cheiro de sopa, lenha e cerveja derramada. Alguns rostos se viram para você.*");
  add("vovo", "Vovó Erminda", "Escreva o que você faz ao entrar. Pode usar um dos exemplos aqui embaixo.");
})();

/* ===================== a bola de cristal: profecia ou maldição ===================== */
(() => {
  const bola = $("#bola"), visao = $("#bola-visao"), sina = $("#sina"), btn = $("#bola-b"), nomeI = $("#bola-nome");
  let oferta = null, ocupado = false;
  const CHANCE = { cobre: [70, 25, 5], cabelo: [50, 38, 12], sangue: [34, 40, 26] };   // bênção · maldição · profecia de morte
  const VOZ = {
    bom: ["As névoas se abrem como cortina de teatro…", "Ouço risos. Os seus.", "O vidro esquenta nas minhas mãos. Isso é bom sinal."],
    mal: ["O vidro ficou verde. Eu odeio quando fica verde.", "Algo se agarrou à sua sombra.", "Não olhe agora, mas tem um corvo atrás de você."],
    morte: ["O vidro ficou vermelho. Sente-se, por favor.", "Vejo uma data. Não gosto de datas.", "Ninguém quer ouvir isso. Mas você pagou."]
  };
  const hash = s => { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  document.querySelectorAll("[data-of]").forEach(b => b.addEventListener("click", () => {
    if (ocupado) return; oferta = b.dataset.of; document.querySelectorAll("[data-of]").forEach(x => x.classList.toggle("on", x === b)); btn.disabled = false;
  }));
  btn.addEventListener("click", () => {
    if (!oferta || ocupado) return; ocupado = true; btn.disabled = true;
    const nome = (nomeI.value || "").trim().slice(0, 24) || "Forasteiro";
    // com nome, o vidro diz a mesma coisa o dia inteiro; sem nome, sorteia
    let s = (nomeI.value || "").trim() ? hash(nome.toLowerCase() + oferta + new Date().toDateString()) : Math.floor(Math.random() * 1e9);
    const r = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
    const [pb, pm] = CHANCE[oferta], d = r() * 100, tipo = d < pb ? "bom" : d < pb + pm ? "mal" : "morte";
    sina.innerHTML = ""; visao.classList.remove("ve"); bola.className = "bola agita";
    setTimeout(() => {
      let ico, html;
      const voz = VOZ[tipo][Math.floor(r() * VOZ[tipo].length)];
      if (tipo === "bom") {
        const boas = DADOS.arcanos.filter(a => !a.ruim), a = boas[Math.floor(r() * boas.length)]; ico = a.ico;
        html = `<div class="sina-c bom"><span class="tipo">✦ Uma bênção</span><h3>${esc(a.ico)} ${esc(a.nome)}</h3><i class="voz">“${esc(voz)}”</i><p>${esc(nome)}, ${esc(a.desc.charAt(0).toLowerCase() + a.desc.slice(1))}</p><p class="rodape">No reino, uma leitura assim dá bônus por três horas.</p></div>`;
      } else if (tipo === "mal") {
        const ms = DADOS.maldicoes.filter(m => !/profecia/i.test(m.desc)), m = ms[Math.floor(r() * ms.length)]; ico = m.ico;
        html = `<div class="sina-c mal"><span class="tipo">☾ Uma maldição</span><h3>${esc(m.ico)} ${esc(m.nome)}</h3><i class="voz">“${esc(voz)}”</i><p>${esc(m.desc)}</p><p class="rodape">Dura ${esc(m.horas)} horas. Água Benta quebra quase todas.</p></div>`;
      } else {
        const p = DADOS.mortes[Math.floor(r() * DADOS.mortes.length)], dias = 3 + Math.floor(r() * 5); ico = p.ico;
        html = `<div class="sina-c morte"><span class="tipo">☠ Uma profecia de morte</span><h3>${esc(p.ico)} ${esc(p.nome)}</h3><i class="voz">“${esc(voz)}”</i><p><b>${esc(p.visao)}</b></p><p>Em <b>${dias} dias</b> do calendário do reino, ${esc(nome)} morre, a não ser que… ${esc(p.evitar)}</p><p class="rodape">No reino a morte é de verdade, e só vale a partir do nível 10.</p></div>`;
      }
      visao.textContent = ico; visao.classList.add("ve"); bola.className = "bola " + tipo; sina.innerHTML = html;
      ocupado = false; btn.disabled = false; btn.textContent = "Olhar de novo";
    }, reduz ? 200 : 2200);
  });
})();

/* ===================== a bolsa: um bico na Travessa ===================== */
(() => {
  const b = $("#bico-b"); if (!b) return;
  let total = 0;
  const BICOS = [["carregou caixas no Porto Velho", 4, 9], ["lavou os canecos do Cálice", 3, 6], ["entregou cartas para a Selo & Lacre", 5, 10], ["vigiou a barraca do Zé Escama", 3, 7], ["varreu a forja do Torvo", 4, 8], ["cantou na praça (mal)", 1, 5], ["achou uma lasca no chão da Travessa", 1, 2]];
  b.addEventListener("click", () => {
    const [txt, a, z] = BICOS[Math.floor(Math.random() * BICOS.length)], v = a + Math.floor(Math.random() * (z - a + 1)), antes = { o: Math.floor(total / 100), c: Math.floor(total / 10) % 10 };
    total += v; const o = Math.floor(total / 100), c = Math.floor(total / 10) % 10, f = total % 10;
    $("#m-ouro").textContent = o; $("#m-cobre").textContent = c; $("#m-ferro").textContent = f;
    const pulou = o > antes.o ? "ouro" : (c !== antes.c ? "cobre" : "ferro");
    document.querySelectorAll(".bolsa-m .moeda").forEach(m => { m.classList.remove("pula"); if (m.classList.contains(pulou)) { void m.offsetWidth; m.classList.add("pula"); } });
    $("#bico-res").innerHTML = `Você ${esc(txt)}: <b>+${v} lascas de ferro</b>.${o > antes.o ? " Dez cobres viraram <b>uma moeda de ouro</b>!" : c !== antes.c ? " Dez lascas de ferro viraram um cobre." : ""}`;
  });
})();

/* ===================== as cartas da Madame Véu ===================== */
(() => {
  const leque = $("#leque"), leit = $("#leitura"), POS = ["Passado", "Presente", "Futuro"];
  let tiradas = [], abertas = 0;
  function dar() {
    const baralho = DADOS.arcanos.slice().sort(() => Math.random() - .5); tiradas = baralho.slice(0, 3); abertas = 0;
    leque.innerHTML = tiradas.map((a, k) => `<button class="tarot ${a.ruim ? "ruim" : ""}" type="button" aria-label="Carta do ${POS[k]}"><span class="in"><span class="face costas"><span>✦</span></span>
      <span class="face frente"><small>${POS[k]}</small><span class="ic">${esc(a.ico)}</span><b>${esc(a.nome)}</b><p>${esc(a.desc || "")}</p></span></span></button>`).join("");
    leit.innerHTML = "Clique nas três cartas viradas.";
    leque.querySelectorAll(".tarot").forEach((b, k) => b.addEventListener("click", () => { if (b.classList.contains("aberta")) return; b.classList.add("aberta"); abertas++; ler(); }));
  }
  function ler() {
    const ab = [...leque.querySelectorAll(".tarot")].map((b, k) => b.classList.contains("aberta") ? k : -1).filter(k => k >= 0);
    if (abertas < 3) { const k = ab[ab.length - 1]; leit.innerHTML = `<b>${esc(POS[k])}: ${esc(tiradas[k].nome)}.</b> ${esc(tiradas[k].desc)}`; return; }
    leit.innerHTML = `— Você veio de <b>${esc(tiradas[0].nome)}</b>, carrega <b>${esc(tiradas[1].nome)}</b> e caminha para <b>${esc(tiradas[2].nome)}</b>. ${esc(tiradas[2].desc)} <br>No reino, uma leitura dessas vale 15 Lascas de Ferro e dá bônus por quatro horas.`;
  }
  $("#embaralhar").addEventListener("click", dar); dar();
})();


/* ===================== as telas ===================== */
(() => {
  const TELAS = ["inicio", "extensao", "reino", "gente", "dados", "vida", "misterios", "jogar"];
  function ir() {
    let h = (location.hash || "").slice(1); const sec = { oraculo: "gente", novato: "jogar", cristal: "misterios", bestiario: "misterios", cartas: "misterios", treino: "jogar", mapa: "reino", topo: "inicio" }[h] || h;
    const t = TELAS.includes(sec) ? sec : "inicio";
    document.querySelectorAll(".tela").forEach(el => el.classList.toggle("on", el.id === "t-" + t));
    document.querySelectorAll("#menu a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + t));
    const ativo = document.querySelector("#menu a.on"); if (ativo && ativo.scrollIntoView) ativo.scrollIntoView({ block: "nearest", inline: "center" });
    window.scrollTo(0, 0); setTimeout(() => dispatchEvent(new Event("resize")), 30);
  }
  addEventListener("hashchange", ir); ir();
})();

/* ===================== os dados (d20) ===================== */
(() => {
  const ATR = [["forca", "FOR", "Força"], ["destreza", "DES", "Destreza"], ["constituicao", "CON", "Constituição"], ["inteligencia", "INT", "Inteligência"], ["sabedoria", "SAB", "Sabedoria"], ["carisma", "CAR", "Carisma"]];
  const A = { forca: 2, destreza: 4, constituicao: 4, inteligencia: -2, sabedoria: 2, carisma: -2 }; let cat = "combatente";
  const md = v => Math.floor(v / 2), sn = v => (v >= 0 ? "+" : "") + v;
  const resta = () => 24 - ATR.reduce((t, [k]) => t + (A[k] + 2), 0);
  function desenha() {
    const r = resta(); $("#pb-resta").textContent = r; $("#pb-resta").parentNode.classList.toggle("neg", r < 0);
    $("#pb-lista").innerHTML = ATR.map(([k, s, n]) => `<div class="pb-at"><span class="s">${s}</span><span class="n">${n}</span><button type="button" data-m="${k}" ${A[k] > -4 ? "" : "disabled"} aria-label="Tirar de ${n}">−</button><b class="${A[k] < -2 ? "sacr" : ""}">${A[k]}</b><button type="button" data-p="${k}" ${r > 0 && A[k] < 10 ? "" : "disabled"} aria-label="Somar em ${n}">+</button><em>${sn(md(A[k]))}</em></div>`).join("");
    const M = Object.fromEntries(ATR.map(([k]) => [k, md(A[k])])), pv = { combatente: 12, suporte: 8, vanguardista: 14 }[cat] + M.constituicao;
    const mana = cat === "suporte" ? 8 + Math.max(M.inteligencia, M.sabedoria, M.carisma) : cat === "vanguardista" ? 3 : 5;
    const pers = Math.max(1, { combatente: 1, suporte: 3, vanguardista: 2 }[cat] + Math.max(M.sabedoria, M.inteligencia));
    $("#pb-num").innerHTML = [["PV", pv], ["Mana", mana], ["CA", 10 + M.destreza], ["Ataque", sn(Math.max(M.forca, M.destreza) + 2)], ["Perícias", pers], ["Desloc.", "9 m"]].map(([a, b]) => `<div><small>${a}</small><b>${b}</b></div>`).join("");
  }
  $("#pb-lista").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; if (b.dataset.p) A[b.dataset.p]++; else A[b.dataset.m]--; desenha(); });
  $("#pb-cat").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; cat = b.dataset.cat; $("#pb-cat").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); desenha(); });
  desenha();
  const d = n => 1 + Math.floor(Math.random() * n);
  const dados = (q, f, crit) => { const l = []; for (let i = 0; i < q * (crit ? 2 : 1); i++) l.push(d(f)); return l; };
  const G = { espada: { nome: "Espada curta", a: "forca", q: 1, f: 8 }, arco: { nome: "Arco curto", a: "destreza", q: 1, f: 6 }, faisca: { nome: "Faísca Arcana", a: "carisma", q: 1, f: 8, mag: true }, raio: { nome: "Raio Congelante", a: "inteligencia", q: 3, f: 8, salv: true } };
  document.querySelectorAll("[data-rol]").forEach(b => b.addEventListener("click", () => {
    const g = G[b.dataset.rol], m = md(A[g.a]), dz = $("#dado20"), res = $("#rol-res");
    dz.className = "dado20"; void dz.offsetWidth; dz.classList.add("gira");
    let html;
    if (g.salv) {
      const r = d(20), bon = m + 2, tot0 = r + bon, crit = r === 20, ok = crit || (r !== 1 && tot0 >= 13);
      dz.querySelector("span").textContent = r; if (crit) dz.classList.add("crit"); if (r === 1) dz.classList.add("um");
      html = `<b>${g.nome}</b><span>Ataque: <code>d20 ${r} ${sn(bon)} = ${tot0} contra CA 13</code></span>`;
      if (!ok) html += `<span class="err">${r === 1 ? "Um natural: o raio passou longe." : "O lobo desviou do raio."}</span>`;
      else {
        const cd = 8 + 2 + m, s2 = d(20), tot = s2 + 3, passou = s2 === 20 || (s2 !== 1 && tot >= cd), l = dados(3, 8, crit), dano = l.reduce((a, c) => a + c, 0);
        html += `<span>Dano: <code>${crit ? 6 : 3}d8 (${l.join("+")}) = ${dano}</code> de frio</span><span>O lobo rola a salvaguarda de DES: <code>d20 ${s2} + 3 = ${tot} contra CD ${cd}</code></span><span class="${passou ? "err" : "ok"}">${passou ? `Ele se livra do gelo: leva <b>${dano}</b>, mas continua andando.` : `Falhou! <b>${dano}</b> de frio e fica impedido por dois turnos.`}</span>`;
      }
    } else {
      const r = d(20), bon = m + 2, tot = r + bon, crit = r === 20, ok = crit || (r !== 1 && tot >= 13);
      dz.querySelector("span").textContent = r; if (crit) dz.classList.add("crit"); if (r === 1) dz.classList.add("um");
      html = `<b>${g.nome}</b><span>Ataque: <code>d20 ${r} ${sn(bon)} = ${tot} contra CA 13</code></span>`;
      if (ok) { const l = dados(g.q, g.f, crit), dano = Math.max(0, l.reduce((a, c) => a + c, 0) + (g.mag ? 0 : m)); html += `<span>Dano: <code>${g.q * (crit ? 2 : 1)}d${g.f} (${l.join("+")})${g.mag ? "" : " " + sn(m)} = ${dano}</code></span><span class="ok">${crit ? "CRÍTICO! Os dados rolaram em dobro. " : "Acertou! "}O lobo perde <b>${dano}</b> de vida.</span>`; }
      else html += `<span class="err">${r === 1 ? "Um natural: errou feio." : "O lobo desviou."}${!g.mag && m < 0 ? " Com modificador negativo fica difícil: aumente esse atributo lá em cima." : ""}</span>`;
    }
    setTimeout(() => { res.innerHTML = html; }, 300);
  }));
})();

/* ===== Guia do Novato: o texto e o desenho do papiro (o mesmo no site e na extensão) ===== */
var GUIA_NOVATO = (function () {
  "use strict";
  var CAP = [
    { id: "rpg", rom: "I", ico: "🎭", t: "O que é um RPG?",
      p: ["RPG é uma experiência narrativa coletiva em que cada jogador interpreta um personagem dentro de um mundo compartilhado. As ações, escolhas e falas moldam a história em conjunto, respeitando o cenário, as regras e os limites do universo proposto.",
          "Não se trata de vencer, mas de construir uma narrativa viva, onde as consequências importam e cada personagem tem peso no desenrolar dos acontecimentos."],
      citacao: "No Lar ninguém ganha sozinho. Ou a história fica boa para todos, ou não fica para ninguém." },
    { id: "senso", rom: "II", ico: "🕯", t: "Senso e dedicação",
      p: ["O bom funcionamento do RPG depende de bom senso e comprometimento. Jogar é respeitar o tempo, a criatividade e as decisões dos outros participantes, mantendo coerência com o mundo e com o personagem.",
          "Dedicação não significa estar sempre ativo, mas participar com intenção, responsabilidade e cuidado com a narrativa coletiva."],
      dicas: [["⏳", "Respeite o tempo dos outros", "Responda as cenas em que você está. Se precisar sair, avise com uma fala OFF."], ["🧭", "Seja coerente", "Seu personagem sabe o que viveu, não o que você leu no Discord."], ["🤝", "Abra espaço", "Uma boa cena tem lugar para todo mundo brilhar um pouco."]] },
    { id: "acoes", rom: "III", ico: "⚔", t: "Sistema de ações",
      p: ["Toda ação relevante deve ser descrita de forma clara e respeitosa, permitindo a reação dos outros personagens envolvidos.",
          "Ações não podem assumir resultados absolutos sobre terceiros sem consentimento ou mecânica adequada. O sistema existe para equilibrar narrativa, justiça e fluidez do jogo: quando o resultado não é óbvio, a extensão rola o d20 (ataques, perícias, salvaguardas) e o dado decide."],
      compara: { bom: "*puxa a adaga e tenta acertar o ombro do guarda, avançando rápido*", ruim: "*crava a adaga no guarda, que cai morto na hora*",
        bomTxt: "Você tenta. O outro jogador (ou o dado) decide o que acontece.", ruimTxt: "Isso é powerplay: você decidiu o destino do outro por ele." } },
    { id: "falas", rom: "IV", ico: "💬", t: "Falas ON e OFF",
      p: ["As falas ON representam tudo o que o personagem diz ou faz dentro da história. Já as falas OFF são usadas para comunicação entre jogadores, esclarecimentos ou organização fora da narrativa.",
          "Manter essa separação é essencial para evitar confusão e garantir a imersão no roleplay."],
      exemplos: [
        { tipo: "on", rot: "Exemplo de declaração ON", quem: "Lyra Corvonegro", linhas: [["acao", "*empurra a porta do Cálice, sacode a chuva do capuz e vai direto ao balcão*"], ["fala", "Uma caneca do mais barato, Taverneiro. E notícias da Cordilheira, se tiver."]], nota: "Ação entre asteriscos; a fala, escrita normal." },
        { tipo: "off", rot: "Exemplo de declaração OFF", quem: "Nyska (a jogadora)", linhas: [["off", "[vou jantar, volto em 15 minutos. Podem seguir a cena sem a Lyra]"], ["off", "a taverna é o Cálice, né? []"]], nota: "Entre colchetes [assim], ou com [] no final da mensagem. Ninguém no reino ouve isso." }] },
    { id: "nivel", rom: "V", ico: "📜", t: "Nível de experiência do personagem",
      p: ["Todos os personagens iniciam sua jornada no nível 1 de experiência. A evolução não acontece de forma automática nem por ações isoladas: o crescimento verdadeiro está ligado à participação ativa nas tramas do enredo principal, onde decisões, riscos e consequências moldam o destino do mundo.",
          "A cada missão relevante concluída dentro da história central, o personagem acumula experiência e pode avançar de nível. Esse avanço representa aprendizado real, sobrevivência em situações extremas e amadurecimento diante da ruína que cerca o Lar da Besta."],
      sobe: [["🎯", "Aprimoramento de perícias", "a proficiência cresce e, a cada 10 níveis, você aprende uma perícia nova"], ["❤", "Aumento de pontos de vida", "os Pontos de Sangue sobem a cada nível, pela sua vocação e pela Constituição"], ["✦", "Expansão de pontos de mana", "mais mana para as magias e os dons"], ["⚡", "Ganho de pontos de esforço", "mais Vigor para os golpes físicos"], ["💎", "Atributos", "+2 pontos a cada 5 níveis"]],
      fecho: "Esse método de progressão garante que a evolução esteja diretamente conectada à história, tornando cada avanço significativo. Participar das tramas principais não é apenas uma escolha narrativa: é a forma mais eficiente e legítima de fortalecer seu personagem e deixá-lo preparado para os horrores que aguardam além das muralhas." },
    { id: "morte", rom: "VI", ico: "☠", t: "A morte ronda o Lar",
      p: ["No Lar da Besta a morte é real e pode chegar a qualquer momento. Um personagem pode morrer numa trama ou numa missão, mas também no roleplay do dia a dia: por uma escolha errada, por uma briga que foi longe demais, por confiar em quem não devia ou por um simples acidente.",
          "Isso não é castigo: é o que dá peso às decisões. Quando a morte é possível, cada escolha importa, cada vitória vale mais, e cada personagem que sobrevive tem uma história de verdade para contar."],
      dicas: [["🧠", "Pense antes de agir", "Provocar o guarda armado, entrar sozinho na Mata Negra à noite, beber o que um estranho ofereceu… tudo tem um preço."], ["🎲", "O dado não tem pena", "Quedas, venenos, armadilhas, feras e duelos são decididos no d20. Às vezes, o dado cai no 1."], ["⚰", "A morte é definitiva", "Quem morre vai para o cemitério do reino. Dá para criar um personagem novo, mas aquele não volta."]],
      aviso: "Poder morrer a qualquer momento não dá a ninguém o direito de matar o personagem de outra pessoa por conta própria: o golpe passa pelo sistema (o dado, a arena, o mestre) ou é combinado entre os jogadores. Matar alguém sem isso é powerplay." },
    { id: "convivencia", rom: "VII", ico: "⚖", t: "Regras de convivência",
      p: ["O Lar é um lugar de histórias sombrias, mas a mesa onde elas são contadas precisa ser segura para todos."],
      regras: [
        ["🤝", "Respeito mútuo", "Todos os jogadores devem tratar uns aos outros com educação e cordialidade, evitando qualquer tipo de comportamento agressivo ou ofensivo."],
        ["⛔", "Proibição de conteúdo prejudicial", "Não é permitido criar ou interpretar cenas de dark RP que envolvam transfobia, homofobia, racismo, assédio, estupro, zoofilia, antissemitismo ou qualquer forma de ódio ou discriminação."],
        ["🌗", "Separação de universo e mundo real", "Comentários ou comportamentos prejudiciais dentro do jogo (ON) ou fora dele (OFF) são igualmente proibidos."],
        ["🕊", "Convivência saudável", "Conflitos devem ser resolvidos de maneira madura e respeitosa, sem ataques pessoais ou perseguição."],
        ["🪶", "Jogabilidade responsável", "A criatividade é incentivada, desde que não viole as regras de respeito e segurança da comunidade."],
        ["🏰", "Ambiente inclusivo", "Todos os jogadores, independentemente de identidade de gênero, orientação sexual, etnia ou crença, devem se sentir seguros e bem-vindos para jogar."]] }
  ];
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function capitular(t) { return '<span class="gn-cap">' + esc(t.charAt(0)) + "</span>" + esc(t.slice(1)); }
  function corpo(c) {
    var h = c.p.map(function (t, i) { return "<p>" + (i === 0 ? capitular(t) : esc(t)) + "</p>"; }).join("");
    if (c.citacao) h += '<blockquote class="gn-cita">“' + esc(c.citacao) + '”<small>— Vovó Erminda</small></blockquote>';
    if (c.dicas) h += '<div class="gn-dicas">' + c.dicas.map(function (d) { return '<div><span>' + d[0] + "</span><b>" + esc(d[1]) + "</b><small>" + esc(d[2]) + "</small></div>"; }).join("") + "</div>";
    if (c.compara) { var x = c.compara;
      h += '<div class="gn-compara"><div class="bom"><span class="gn-selo">✔ Assim</span><code>' + esc(x.bom) + "</code><small>" + esc(x.bomTxt) + '</small></div><div class="ruim"><span class="gn-selo">✘ Assim não</span><code>' + esc(x.ruim) + "</code><small>" + esc(x.ruimTxt) + "</small></div></div>"; }
    if (c.exemplos) h += c.exemplos.map(function (e) {
      return '<div class="gn-ex ' + e.tipo + '"><div class="gn-ex-t"><span class="gn-tag">' + (e.tipo === "on" ? "ON" : "OFF") + "</span>" + esc(e.rot) + '</div><div class="gn-chat"><span class="gn-quem">' + esc(e.quem) + ":</span>" +
        e.linhas.map(function (l) { return '<span class="gn-l ' + l[0] + '">' + esc(l[1]) + "</span>"; }).join("") + '</div><small>' + esc(e.nota) + "</small></div>"; }).join("");
    if (c.sobe) h += '<p class="gn-lead">Ao subir de nível, o personagem fortalece diversos aspectos da ficha:</p><ul class="gn-sobe">' + c.sobe.map(function (s) { return "<li><span>" + s[0] + "</span><b>" + esc(s[1]) + "</b><small>" + esc(s[2]) + "</small></li>"; }).join("") + "</ul><p>" + esc(c.fecho) + "</p>";
    if (c.aviso) h += '<div class="gn-aviso"><span>⚠</span><p>' + esc(c.aviso) + "</p></div>";
    if (c.regras) h += '<ol class="gn-regras">' + c.regras.map(function (r) { return "<li><span>" + r[0] + "</span><div><b>" + esc(r[1]) + "</b><p>" + esc(r[2]) + "</p></div></li>"; }).join("") + "</ol>";
    return h;
  }
  /* html(op): op.jurado (bool), op.links (bool: mostra os links de capítulos) */
  function html(op) {
    op = op || {};
    return '<div class="gn-rolo">' +
      '<div class="gn-vara cima"><i></i><i></i></div>' +
      '<div class="gn-folha">' +
        '<header class="gn-topo"><div class="gn-lacre" aria-hidden="true">LdB</div><span class="gn-kicker">Pergaminho entregue a todo peregrino nos portões do Lar</span>' +
          '<h2 class="gn-titulo">Guia do Novato</h2><div class="gn-orn" aria-hidden="true">❦ ✦ ❦</div>' +
          '<p class="gn-intro">Leia com calma, peregrino. Estas são as leis não escritas que fazem o reino funcionar, e as escritas também.</p></header>' +
        '<nav class="gn-sum" aria-label="Capítulos do guia">' + CAP.map(function (c) { return '<button type="button" data-gn-ir="' + c.id + '"><b>' + c.rom + "</b>" + esc(c.t) + "</button>"; }).join("") + "</nav>" +
        CAP.map(function (c) { return '<section class="gn-sec" id="gn-' + c.id + '"><h3><span class="gn-rom">' + c.rom + '</span><span class="gn-ico" aria-hidden="true">' + c.ico + "</span>" + esc(c.t) + "</h3>" + corpo(c) + '<div class="gn-div" aria-hidden="true">~ ✦ ~</div></section>'; }).join("") +
        '<footer class="gn-jura ' + (op.jurado ? "feito" : "") + '"><h3>O juramento do peregrino</h3><p>“Juro contar boas histórias, respeitar quem as conta comigo e deixar o Lar um pouco melhor do que o encontrei.”</p>' +
          '<button type="button" class="gn-jurar" data-gn-jurar>' + (op.jurado ? "Jurado ✦" : "Li e juro") + '</button><div class="gn-carimbo" aria-hidden="true"><span>JURADO</span></div></footer>' +
      "</div>" +
      '<div class="gn-vara baixo"><i></i><i></i></div>' +
    "</div>";
  }
  /* liga o sumário e o juramento; onJurar(): chamado ao jurar */
  function ligar(raiz, rolagem, onJurar) {
    raiz.querySelectorAll("[data-gn-ir]").forEach(function (b) { b.addEventListener("click", function () {
      var alvo = raiz.querySelector("#gn-" + b.getAttribute("data-gn-ir")); if (!alvo) return;
      if (rolagem && rolagem !== window) rolagem.scrollTo({ top: alvo.offsetTop - 20, behavior: "smooth" }); else alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }); });
    var j = raiz.querySelector("[data-gn-jurar]");
    if (j) j.addEventListener("click", function () { var f = raiz.querySelector(".gn-jura"); f.classList.add("feito", "agora"); j.textContent = "Jurado ✦"; if (onJurar) onJurar(); });
  }
  return { CAP: CAP, html: html, ligar: ligar };
})();
if (typeof self !== "undefined") self.GUIA_NOVATO = GUIA_NOVATO;

(() => {
  const box = document.getElementById("guia-novato"); if (!box) return;
  let jurado = false; try { jurado = localStorage.getItem("ldbGuiaNovato") === "1"; } catch (_) {}
  box.innerHTML = GUIA_NOVATO.html({ jurado });
  GUIA_NOVATO.ligar(box, window, () => { try { localStorage.setItem("ldbGuiaNovato", "1"); } catch (_) {} });
  const rolo = box.querySelector(".gn-rolo");
  if ("IntersectionObserver" in window && !reduz) { rolo.classList.add("espera"); const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { rolo.classList.remove("espera"); rolo.classList.add("abre"); io.disconnect(); } }, { threshold: .05 }); io.observe(rolo); }
})();

/* ===================== a lupa ===================== */
document.addEventListener("click", e => {
  const b = e.target.closest && e.target.closest("[data-lupa]"); if (!b) return;
  const l = document.createElement("div"); l.className = "lupa"; l.setAttribute("role", "dialog"); l.innerHTML = `<img src="${b.dataset.lupa}" alt="">`; l.tabIndex = -1;
  const fechar = () => l.remove(); l.addEventListener("click", fechar); l.addEventListener("keydown", ev => { if (ev.key === "Escape") fechar(); });
  document.body.appendChild(l); l.focus();
});

/* ===================== personagens ===================== */
(() => {
  const AT = { forca: "FOR", destreza: "DES", constituicao: "CON", inteligencia: "INT", sabedoria: "SAB", carisma: "CAR" };
  const bn = b => Object.entries(b || {}).map(([k, v]) => `${v > 0 ? "+" : ""}${v} ${AT[k] || k}`).join(" · ");
  const R = $("#racas"), det = $("#raca-det");
  R.innerHTML = DADOS.racas.map((r, k) => `<button class="raca" type="button" data-k="${k}"><b>${esc(r.nome)}</b><small>${esc(r.sub || "")}</small><span class="bn">${esc(bn(r.bonus))}</span></button>`).join("");
  const mostrar = k => { const r = DADOS.racas[k]; R.querySelectorAll(".raca").forEach((b, i) => b.classList.toggle("on", i === k));
    det.innerHTML = `<h3>${esc(r.nome)}</h3><p><i>“${esc(r.lema || "")}”</i></p><p>${esc(r.traco || "")}</p>`; };
  R.querySelectorAll(".raca").forEach(b => b.addEventListener("click", () => mostrar(+b.dataset.k))); mostrar(0);
  const F = $("#filtros"), CL = $("#classes"), NOMES = { todas: "Todas", combatente: "Combatentes", vanguardista: "Vanguardistas", suporte: "Suportes" };
  let f = "todas";
  function desenhar() {
    F.innerHTML = Object.entries(NOMES).map(([k, n]) => `<button type="button" data-f="${k}" class="${k === f ? "on" : ""}">${n}</button>`).join("");
    F.querySelectorAll("button").forEach(b => b.addEventListener("click", () => { f = b.dataset.f; desenhar(); }));
    CL.innerHTML = DADOS.classes.filter(c => f === "todas" || c.chassi === f).map(c => `<div class="classe"><small>${esc(c.chassi)} · ${esc(AT[c.prim] || "")}</small><b>${esc(c.nome)}</b><i>“${esc(c.lema || "")}”</i></div>`).join("");
  }
  desenhar();
})();

/* ===================== o começo da história ===================== */
(() => {
  const H = DADOS.historia; $("#hist-intro").textContent = `A história principal tem ${H.total} capítulos em ${H.atos} atos, e o mestre abre um de cada vez. Estes são os primeiros. O resto, só jogando.`;
  $("#atos").innerHTML = H.abertos.map(c => `<div class="cap"><small>Ato ${c.ato} · ${esc(c.l || "")}</small><b>${esc(c.t)}</b><p>${esc(c.r)}</p></div>`).join("")
    + `<div class="cap fechado"><b>+ ${H.total - H.abertos.length} capítulos</b><p>lacrados até alguém chegar lá</p></div>`;
})();

/* ===================== mini-demos da vida no reino ===================== */
(() => {
  /* pechincha */
  let feito = false; $("#pech-b").addEventListener("click", () => {
    const r = $("#pech-res"); if (feito) { r.innerHTML = "— Já pechinchou hoje, freguês. Amanhã tem mais."; return; } feito = true;
    const ok = Math.random() < .55, pct = ok ? 10 + Math.floor(Math.random() * 11) : 10, p = ok ? Math.round(17 * (1 - pct / 100)) : Math.round(17 * 1.1);
    r.innerHTML = ok ? `— Tá bom, tá bom! Leva por <b>${p} de ferro</b>, mas não espalha. <span class="nota">(−${pct}%)</span>` : `— Desconto? Peixe tem preço de peixe! Agora é <b>${p} de ferro</b>, de castigo. <span class="nota">(+10%)</span>`; });
  /* ferreiro */
  const CH = [100, 85, 70, 55, 40]; let nv = 0;
  const tp = () => { $("#tp-n").textContent = "+" + nv; $("#tp-ch").textContent = nv >= 5 ? "no limite" : `chance ${CH[nv]}%${nv + 1 >= 4 ? " · pode trincar" : ""}`; $("#tp-b").disabled = nv >= 5; };
  $("#tp-b").addEventListener("click", () => {
    const r = $("#tp-res"); if (nv >= 5) return; const alvo = nv + 1, ok = Math.random() * 100 < CH[nv];
    if (ok) { nv = alvo; r.innerHTML = `Tssssss. <b>A têmpera pegou!</b> A espada agora é +${nv}.`; }
    else if (alvo >= 4 && Math.random() < .5) { nv = Math.max(0, nv - 1); r.innerHTML = `Crac. <b>Trincou…</b> Perdeu um nível. O Torvo fica em silêncio.`; }
    else r.innerHTML = "O ferro não quis. <b>Não pegou desta vez.</b> Nem melhorou, nem piorou.";
    tp(); });
  tp();
  /* caçada */
  const G = $("#cc-g"), N = 7; let eu = { x: 3, y: 3 }, fera = { x: 6, y: 0 }, area = null, rodada = 0;
  function nova() { area = { x: eu.x, y: eu.y, r: 1 }; }
  function desenhar(msg) {
    G.innerHTML = ""; for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", `casa ${x}, ${y}`);
      const p = area && Math.max(Math.abs(x - area.x), Math.abs(y - area.y)) <= area.r; if (p) b.classList.add("perigo");
      if (x === eu.x && y === eu.y) { b.classList.add("eu"); b.textContent = "você".slice(0, 1).toUpperCase(); }
      if (x === fera.x && y === fera.y) { b.classList.add("fera"); b.textContent = "🐺"; }
      b.addEventListener("click", () => andar(x, y)); G.appendChild(b);
    }
    if (msg) $("#cc-res").innerHTML = msg;
  }
  function andar(x, y) {
    if (Math.max(Math.abs(x - eu.x), Math.abs(y - eu.y)) > 2) { $("#cc-res").innerHTML = "Longe demais: no seu turno dá para andar até 2 casas."; return; }
    eu = { x, y }; rodada++;
    const pego = Math.max(Math.abs(eu.x - area.x), Math.abs(eu.y - area.y)) <= area.r;
    const msg = pego ? `💥 <b>A área explodiu com você dentro!</b> −16 de vida. Na próxima, saia de perto.` : `💨 <b>Você escapou.</b> A área explodiu no vazio. O lobo marca outra área em você…`;
    nova(); desenhar(msg + ` <span class="nota">(rodada ${rodada})</span>`);
  }
  nova(); desenhar("⚠ O Lobo-Alfa marcou a área em volta de você. Clique numa casa fora do vermelho (até 2 casas).");
  /* dança */
  const P = $("#dz-p"); P.innerHTML = Array.from({ length: 9 }, (_, k) => `<button type="button" data-k="${k}" aria-label="casa ${k + 1} da pista"></button>`).join("");
  let alvo = -1, pontos = 0, passo = 0, rel = 0, toque = false;
  P.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
    if (!toque || alvo < 0) return; const k = +b.dataset.k; if (k === alvo) { pontos++; b.classList.add("ok"); } else b.classList.add("erro"); alvo = -1; }));
  function batida() {
    P.querySelectorAll("button").forEach(b => { b.className = ""; b.textContent = ""; });
    if (passo >= 8) { toque = false; $("#dz-res").innerHTML = `Fim da música: <b>${pontos}/8</b>. ${pontos >= 7 ? "O bardo tira o chapéu para você!" : pontos >= 4 ? "A taverna bateu palma." : "Ninguém viu. Tente de novo."}`; $("#dz-b").disabled = false; return; }
    let k; do { k = Math.floor(Math.random() * 9); } while (k === alvo); alvo = k; const b = P.children[k]; b.classList.add("acesa"); b.textContent = "♪";
    $("#dz-res").textContent = `Passo ${passo + 1} de 8 · acertos ${pontos}`; passo++; rel = setTimeout(batida, Math.max(700, 1500 - passo * 90));
  }
  $("#dz-b").addEventListener("click", () => { clearTimeout(rel); pontos = 0; passo = 0; alvo = -1; toque = true; $("#dz-b").disabled = true; batida(); });
})();

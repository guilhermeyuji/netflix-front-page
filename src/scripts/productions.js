const productions = [
  {
    name: 'Anne with an "E"',
    description: 'Neste filme baseado no livro "Anne de Green Gables", uma impetuosa órfã é adotada por engano por um casal de irmãos solteirões do interior.',
    logo: 'anne.webp',
    videoId: 'S5qJXYNNINo',
    classification: '12',
    background: 'anne.webp',
    box: 'anne.jpg',
  },
  {
    name: 'Stranger Things',
    description: 'Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.',
    logo: 'stranger-things.webp',
    videoId: 'yQEondeGvKo',
    classification: '16',
    background: 'stranger-things.webp',
    box: 'stranger.jpg',
  },
  {
    name: 'The Flash',
    description: 'Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.',
    logo: 'flash.webp',
    videoId: 'nGRUfid21dU',
    classification: '12',
    background: 'flash.webp',
    box: 'flash.webp',
  },
  {
    name: 'Dark',
    description: 'Quatro famílias iniciam uma desesperada busca por respostas quando uma criança desaparece e um complexo mistério envolvendo três gerações começa a se revelar.',
    logo: 'dark.webp',
    videoId: 'ESEUoa-mz2c',
    classification: '16',
    background: 'dark.jpg',
    box: 'dark.jpg',
  },
  {
    name: 'A Maldição da Residência Hill',
    description: 'Entre o passado e o presente, uma família dividida confronta memórias assustadoras do antigo lar e dos eventos aterrorizantes que os expulsaram de lá.',
    logo: 'residencia-hill.webp',
    videoId: 'cxeiY2W03Mc',
    classification: '16',
    background: 'residencia-hill.jpg',
    box: 'residencia-hill.jpg',
  },
  {
    name: 'Warcraft',
    description: 'Humanos e orcs se enfrentam quando os guerreiros de Draenor chegam a Azeroth através de um portal. Viaje nesta história fantástica baseada num jogo de videogame.',
    logo: 'warcraft.webp',
    videoId: '2Rxoz13Bthc',
    classification: '12',
    background: 'warcraft.jpg',
    box: 'warcraft.webp',
  },
  {
    name: 'O Gambito da Rainha',
    description: 'Em um orfanato nos anos 1950, uma garota-prodígio do xadrez luta contra o vício em uma jornada improvável para se tornar a número 1 do mundo.',
    logo: 'gambito.webp',
    videoId: 'oZn3qSgmLqI',
    classification: '16',
    background: 'gambito.jpg',
    box: 'gambito.jpg',
  },
  {
    name: 'Breaking Bad',
    description: 'Ao saber que tem câncer, um professor passa a fabricar matanfetamina pelo futuro da família, mudando o destino de todos.',
    logo: 'breaking-bad.webp',
    videoId: 'HhesaQXLuRY',
    classification: '18',
    background: 'breaking-bad.jpg',
    box: 'breaking-bad.webp',
  },
  {
    name: 'The Umbrella Academy',
    description: 'Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreeendentes segredos de família. Além de uma ameaça iminente à humanidade.',
    logo: 'umbrella.webp',
    videoId: '0DAmWHxeoKw',
    classification: '16',
    background: 'umbrella.jpg',
    box: 'umbrella.jpg',
  },
  {
    name: 'The Walking Dead',
    description: 'Zumbis dominam o mundo dos vivos, e os sobreviventes unem forças para manter viva a raça humana.',
    logo: 'walking-dead.webp',
    videoId: 'BXqUmob-nfg',
    classification: '16',
    background: 'walking-dead.jpg',
    box: 'walking-dead.webp',
  },
  {
    name: 'Demon Slayer',
    description: 'Demônios massacraram sua família e amaldiçoaram sua irmã. Agora Tanjiro inicia sua jornada para encontrar a cura e se vingar.',
    logo: 'demon-slayer.webp',
    videoId: '6vMuWuWlW4I',
    classification: '16',
    background: 'demon-slayer.jpg',
    box: 'demon-slayer.webp',
  },
  {
    name: 'Ozark',
    description: 'Um consultor financeiro leva a família para um lago remoto para lavar quinhentos milhões de dólares e acalmar um traficante.',
    logo: 'ozark.webp',
    videoId: '5hAXVqrljbs',
    classification: '16',
    background: 'ozark.jpg',
    box: 'ozark.jpg',
  },
  {
    name: 'Mindhunter',
    description: 'Dois agentes do FBI expandem as fronteiras da ciência criminal nos anos 70 com um perigoso mergulho no universo da psicologia do assassinato.',
    logo: 'mindhunter.webp',
    videoId: 'J4LWdJHJxbs',
    classification: '16',
    background: 'mindhunter.jpg',
    box: 'mindhunter.jpg',
  },
  {
    name: 'Orange is the new Black',
    description: 'Um crime cometido no passado coloca uma privilegiada nova-iorquina na prisão, onde ela faz várias amigas. E inimigas.',
    logo: 'orange.webp',
    videoId: 'vY0qzXi5oJg',
    classification: '18',
    background: 'orange.jpg',
    box: 'orange.jpg',
  },
  {
    name: 'House of Cards',
    description: 'Com Frank fora da jogada, Claire Underwood pode exercer todo o seu poder como a primeira presidente mulher dos Estados Unidos. Mas poderosos inimigos estão à espreita.',
    logo: 'houseCards.webp',
    videoId: '2OdjW2WSfp8',
    classification: '18',
    background: 'houseCards.jpg',
    box: 'houseCards.jpg',
  },
  {
    name: 'Rick and Morty',
    description: 'O brilhante cientista beberrão Rick sequestra Morty, seu neto aborrescente, para viver loucuras em outros mundos e dimensões alternativas.',
    logo: 'rick.webp',
    videoId: 'hl1U0bxTHbY',
    classification: '16',
    background: 'rick.jpg',
    box: 'rick.webp',
  },
  {
    name: 'Seinfield',
    description: 'A "série sobre nada" é um marco da comédia na TV. Jerry e seus três amigos têm o poder de fazer rir não só nas situações ridículas, mas também nas situações corriqueiras.',
    logo: 'seinfield.webp',
    videoId: 'hQXKyIG_NS4',
    classification: '12',
    background: 'seinfield.jpg',
    box: 'seinfield.webp',
  },
  {
    name: 'Avatar',
    description: 'Os irmãos Katara e Sokka acordam o jovem Aang de uma longa hibernação e descobrem que ele é um Avatar, com poderes que podem derrotar a Nação do Fogo.',
    logo: 'avatar.webp',
    videoId: 'FMbENDknKi4',
    classification: '10',
    background: 'avatar.jpg',
    box: 'avatar.webp',
  },
  {
    name: 'Sweet Tooth',
    description: 'Em uma perigosa aventura em um mundo pós-apocalíptico, um adorável menino-cervo sai em busca de um novo começo na companhia de um protetor rabungento.',
    logo: 'sweet.webp',
    videoId: '9zG9RuJb3QU',
    classification: '14',
    background: 'sweet.jpg',
    box: 'sweet.jpg',
  },
  {
    name: 'Spider-Man into the Spider-verse',
    description: 'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.',
    logo: 'spiderman.webp',
    videoId: 'g4Hbz2jLxvQ',
    classification: '10',
    background: 'spiderman.jpg',
    box: 'spiderman.webp',
  },
  {
    name: 'John Wick 2',
    description: 'Forçado a honrar um dívida de sua vida passada, John Wick assassina um alvo que não desejava matar, depois é traído pelo mandante do crime.',
    logo: 'wick.webp',
    videoId: 'XGk2EfbD_Ps',
    classification: '16',
    background: 'wick.jpg',
    box: 'wick.webp',
  },
  {
    name: 'Um Sonho de Liberdade',
    description: 'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade de um detento chamado Red para sobreviver à prisão.',
    logo: 'liberdade.webp',
    videoId: 'v1nZq1vfgSw',
    classification: '16',
    background: 'liberdade.jpg',
    box: 'liberdade.webp',
  },
  {
    name: 'Vikings',
    description: 'Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.',
    logo: 'vikings.webp',
    videoId: 'Auzs95InJzo',
    classification: '16',
    background: 'vikings.jpg',
    box: 'vikings.webp',
  },
  {
    name: 'Bohemian Rhapsody',
    description: 'Acompanhe a trajetória de Freddie Mercury rumo ao estrelato com o Queen nesta biografia musical, que retrata também seus problemas pessoais.',
    logo: 'rhapsody.webp',
    videoId: 'mP0VHJYFOAU',
    classification: '14',
    background: 'rhapsody.jpg',
    box: 'rhapsody.webp',
  },
];

export default productions;
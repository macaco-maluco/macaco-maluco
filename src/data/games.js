import pressoraVideo from './pressora.mp4'
import dayOneVideo from './day-one.mp4'
import cinemaFuImage from './cinema-fu.png'
import giftellersVideo from './giftellers.mp4'
import birintoVideo from './birinto.mp4'
import goHorseGoVideo from './go-horse-go.mp4'
import peixeImage from './peixe.png'
import thermalImage from './thermal.png'

export default [
  {
    name: 'Thermal Runway',
    shortDescription: "Your ship has lost control and there's a rocky road ahead! How far can you get?",
    longDescription: 'Submission for the GMTK Game Jam 2020.',
    url: 'https://thermalrunway.macacomaluco.space/',
    image: thermalImage,
    mainColor: '#ecf0f1',

    authors: ['jucomin', 'marlonicus'],

    hackathon: {
      name: 'GMTK Game Jam',
      edition: '2020',
      entry: 'https://itch.io/jam/gmtk-2020/rate/699486',
      leaderboard: 'https://itch.io/jam/gmtk-2020/results',
      pitch: 'https://youtu.be/VosVyCBdwCU',
    },
  },
  {
    name: 'Peixe',
    shortDescription: 'A 3D game where you pilot a submarine and you must gather the biggest shoal in the pond',
    longDescription:
      'With the mouse or touch you control the direction and speed that your submarine navigates in this pond. Your goal is to make all of the fishes in the pond to join your big shoal!',
    url: 'http://peixe.macacomaluco.space/',
    image: peixeImage,
    mainColor: '#ffffff',

    authors: ['jucomin', 'pirelenito'],

    hackathon: {
      name: 'Node KO',
      edition: '2018',
      entry: 'https://www.nodeknockout.com/entries/7-macaco-maluco',
      leaderboard: 'https://www.nodeknockout.com/entries/all',
      pitch: 'https://youtu.be/Ky-sCyxZiUE',
    },
  },
  {
    name: 'Day One',
    shortDescription: 'Explore and colonize an infinite procedurally generated universe',
    longDescription:
      'You start the game very close to the beginning of time and must fight to survive for as long as you can before the heat death of the universe.',
    url: 'http://day-one.macacomaluco.space/',
    video: dayOneVideo,
    mainColor: '#ecf0f1',

    authors: ['xaviervia', 'npejo', 'pirelenito', 'tulios'],

    hackathon: {
      name: 'Node KO',
      edition: '2016',
      entry: 'https://www.nodeknockout.com/entries/55-batata-frita',
      leaderboard: 'https://www.nodeknockout.com/entries/all',
      pitch: 'https://www.youtube.com/watch?v=l-iS5pEy7V8',
    },
  },
  {
    name: 'Giftellers',
    shortDescription: 'A couch card-game to be played with friends',
    longDescription:
      " Using a deck of GIF cards, players select cards that match a title suggested by the 'storyteller' then latter attempt to guess which card the 'storyteller' selected.",
    url: 'http://giftellers.macacomaluco.space/',
    video: giftellersVideo,
    mainColor: '#ffffff',

    authors: ['pirelenito', 'tulios'],

    hackathon: {
      name: 'Static Showdown',
      edition: '2016',
      entry: 'https://2016.staticshowdown.com/entries/macaco-frito',
      leaderboard: 'https://2016.staticshowdown.com/entries',
    },
  },
  {
    name: 'Pressora',
    shortDescription: 'Control battleships remotely while dealing with the latency of space scale',
    longDescription:
      'Pressora is a turn-based multiplayer game where, due to the latencies caused by the massive distances of the solar system, you must program a set of instructions first and them watch the battle unfolds.',
    url: 'http://pressora.macacomaluco.space/',
    video: pressoraVideo,
    mainColor: '#ecf0f1',

    authors: ['marcioos', 'npejo', 'pirelenito', 'tulios'],

    hackathon: {
      name: 'Node KO',
      edition: '2015',
      entry: 'http://www.nodeknockout.com/teams/macaco-frito',
      leaderboard: 'http://www.nodeknockout.com/entries?sort=completeness',
      pitch: 'https://www.youtube.com/watch?v=XdWIbQtbz5A',
    },
  },
  {
    name: 'Birinto',
    shortDescription:
      'Birinto is the ultimate maze solving challenge. Get unlimited procedurally generated mazes to solve until the end of the world!',
    longDescription: 'Test your skills of problem solving and make it to the end before the time runs out.',
    url: 'http://birinto.macacomaluco.space/',
    video: birintoVideo,
    mainColor: '#ffffff',

    authors: ['maxcnunes', 'pirelenito'],

    hackathon: {
      name: 'Static Showdown',
      edition: '2015',
      entry: 'https://2015.staticshowdown.com/teams/macaco-maluco',
      leaderboard: 'https://2015.staticshowdown.com/winners',
      pitch: 'https://www.youtube.com/watch?v=5Z04I65kDSI',
    },
  },
  {
    name: 'Cinema fu',
    shortDescription: 'The connections between movies and stars.',
    longDescription:
      'A game where you need to find connections between 2 actors and/or movies. Try to get the least steps possible and share the challenge with your friends.',
    url: 'http://cinema-fu.macacomaluco.space/',
    image: cinemaFuImage,
    mainColor: '#ecf0f1',

    authors: ['besen', 'fnmunhoz', 'pirelenito', 'RobertoMoura'],

    hackathon: {
      name: 'Node KO',
      edition: '2013',
      pitch: 'https://www.youtube.com/watch?v=QbwSH71bypc',
    },
  },
  {
    name: 'Go Horse Go!',
    shortDescription: 'We are shooting horses! On space!',
    longDescription:
      "This an awesome sci-fi game! It's mythology is derived from Assassin's Creed and the game-play is heavily influenced by Angry Birds and Pac-Man.",
    url: 'http://go-horse-go.macacomaluco.space',
    mainColor: '#ffffff',
    video: goHorseGoVideo,

    authors: ['besen', 'fnmunhoz', 'pirelenito', 'rodrigomachado'],

    hackathon: {
      name: 'Node KO',
      edition: '2012',
      pitch: 'https://www.youtube.com/watch?v=8pmwit3Ysug',
    },
  },
]

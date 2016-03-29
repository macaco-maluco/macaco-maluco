import pressoraVideo from './pressora.mp4'
import cinemaFuImage from './cinema-fu.png'
import goHorseGoVideo from './go-horse-go.mp4'

export default [
  {
    name: 'Pressora',
    shortDescription: 'Control battleships remotely while dealing with the latency of space scale',
    longDescription: 'Pressora is a turn-based multiplayer game where, due to the latencies caused by the massive distances of the solar system, you must program a set of instructions first and them watch the battle unfolds.',
    url: 'http://pressora.macacomaluco.space/',
    video: pressoraVideo
  },
  {
    name: 'Cinema fu',
    shortDescription: 'The connections between movies and stars.',
    longDescription: 'A game where you need to find connections between 2 actors and/or movies. Try to get the least steps possible and share the challenge with your friends.',
    url: 'http://cinema-fu.macacomaluco.space/',
    image: cinemaFuImage
  },
  {
    name: 'Go Horse Go!',
    shortDescription: 'We are shooting horses! On space!',
    longDescription: 'This an awesome sci-fi game! It\'s mythology is derived from Assassin\'s Creed and the game-play is heavily influenced by Angry Birds and Pac-Man.',
    url: 'http://go-horse-go.macacomaluco.space',
    video: goHorseGoVideo
  }
]

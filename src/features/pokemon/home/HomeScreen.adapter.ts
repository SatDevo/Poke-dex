import { IPokemon } from 'features/pokemon/home/types'
import { getPokemonImageById } from 'api/pokemon/actions'

export default (pokemons: IPokemon[]) =>
  pokemons?.map(({ name, url }) => {
    const urlSplit = url.split('/')
    const id = urlSplit[urlSplit.length - 2]
    const image = getPokemonImageById(id)
    return { id, image, name }
  })

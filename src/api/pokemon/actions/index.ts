import { apiEntry, version, imageUrl } from 'api/middlewares/constants'
import applyMiddlewares from 'api/middlewares'

const getPokemons = async (start: number, limit: number) => {
  // Secure API Limit
  const maxLimit = limit > 150 ? 150 : limit
  const url = `${apiEntry}/${version}/pokemon/?offset=${start}&limit=${maxLimit}`
  return applyMiddlewares(url)
}

const getPokemonById = async (id: string) => {
  const url = `${apiEntry}/${version}/pokemon/${id}`
  return applyMiddlewares(url)
}

const getPokemonForm = async (id: string) => {
  const url = `${apiEntry}/${version}/pokemon-species/${id}`
  return applyMiddlewares(url)
}

const getPokemonEvolution = async (evolutionChainId: string) => {
  const url = `${apiEntry}/${version}/evolution-chain/${evolutionChainId}`
  return applyMiddlewares(url)
}

const getPokemonImageById = (id: string) => {
  return `${imageUrl}/${id}.png`
}

export {
  getPokemons,
  getPokemonImageById,
  getPokemonById,
  getPokemonForm,
  getPokemonEvolution,
}

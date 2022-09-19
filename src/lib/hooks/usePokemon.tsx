import React, { useEffect, useState } from 'react'
import {
  getPokemonById,
  getPokemonForm,
  getPokemonEvolution,
} from 'api/pokemon/actions'
import { IPokemon } from 'features/pokemon/home/types'

function usePokemon(pokemon: IPokemon) {
  const { id } = pokemon
  const [status, setStatus] = useState('')
  const [data, setData] = useState(null)

  const getPokemon = async () => {
    try {
      setStatus('loading')
      const [about, details] = await Promise.all([
        getPokemonById(id),
        getPokemonForm(id),
      ])
      const urlSplit = details.evolution_chain.url.split('/')
      const evolutionChainId = urlSplit[urlSplit.length - 2]
      const evolutions = await getPokemonEvolution(evolutionChainId)
      setData({ about, details, evolutions })
      setStatus('success')
      return data
    } catch (error) {
      setStatus('error')
    }

    return {
      data,
      status,
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return { data, status }
}

export default usePokemon

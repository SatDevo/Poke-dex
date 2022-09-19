import React, { useEffect, useState } from 'react'
import { getPokemons } from 'api/pokemon/actions'
import { useQuery } from 'react-query'
import usePrevious from 'lib/hooks/usePrevious'

function usePokemons() {
  const [limit, setLimit] = useState(20)
  const prevLimit = usePrevious(limit)

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    refetch,
  } = useQuery(['pokemon'], () => getPokemons(0, limit), {
    keepPreviousData: true,
  })

  useEffect(() => {
    if (prevLimit && limit === prevLimit + 20) refetch()
  }, [limit])

  const loadMore = () => {
    if (!isFetching && data?.results?.length < 150) {
      setLimit(limit + 20)
    }
  }

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    loadMore,
  }
}

export default usePokemons

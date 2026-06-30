import { useState, useEffect } from "react"
import requestApi from "../services/apiService"
import type { Owner } from "../types"

const apiUrl = `${import.meta.env.VITE_API_BASE_URL ?? ""}/books`

interface OwnersBooks {
  owners: Owner[]
  loading: boolean
  error: string | null
}

const useOwnersBooks = (): OwnersBooks => {
  const [owners, setOwners] = useState<Owner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const fetchBooks = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await requestApi<Owner[]>(apiUrl)
        if (!cancelled) setOwners(result)
      } catch (err) {
        if (!cancelled) setError((err as Error).message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchBooks()

    return () => {
      cancelled = true
    }
  }, [])

  return { owners, loading, error }
}

export default useOwnersBooks

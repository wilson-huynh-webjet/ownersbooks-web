import { useState, useEffect } from "react"
import requestApi from "../services/apiService.js"

const apiUrl = `${import.meta.env.VITE_API_BASE_URL ?? ""}/books`

const useOwnersBooks = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    const fetchBooks = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await requestApi(apiUrl)
        if (!cancelled) setData(result)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchBooks()

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}

export default useOwnersBooks

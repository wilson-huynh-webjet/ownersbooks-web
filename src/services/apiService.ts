const requestApi = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.error || "Request failed")
  return data as T
}

export default requestApi

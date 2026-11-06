
type TokenResult = {
  ok: true,
  token: string
} | 
{
  ok: false,
  reason: "invalid-code" | "server-error" | "network-error"
}

export default async function getToken(): Promise<TokenResult> {
    try {
      const res  = await fetch("/api/token", {headers: {"demo-code": code}})
      if (!res.ok) throw new Error(`Token request failed: ${res.status}`)
      const {token} = await res.json()
      if (!token.ok) 
      return token
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error"
      setError(message)
      return null
    }
  }
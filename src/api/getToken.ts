
export type TokenResult = {
  ok: true,
  token: string
} | 
{
  ok: false,
  reason: "invalid-code" | "server-error" | "network-error" 
}

export type ErrorReason = "invalid-code" | "server-error" | "network-error" 

export default async function getToken(code: string): Promise<TokenResult> {
    try {
      const res  = await fetch("/api/token", {headers: {"demo-code": code}});
      if (!res.ok) {
        const reason = res.status === 401 ? "invalid-code" : "server-error"; //error reasons adjusted to user reaction: only 'invalid code' user can fix, some client errors treated as server errors
        return {ok: false, reason: reason}
      }
      const {token}: {token: string} = await res.json()
      if (!(typeof token === "string")|| token === "") return {ok: false, reason: "server-error"}
      return {ok: true, token: token}
    } catch (e) {
      console.log(e);
      if (e instanceof SyntaxError) { // catches invalid json
        return {ok: false, reason: "server-error"} 
      } else 
      return {ok: false, reason: "network-error"}
    }
  }
export default async function(req: Request) { 

    const code = req.headers.get("demo-code")
    const expected = process.env.ACESS_CODE
    if (!expected || code != expected) {
        return new Response("Wrong access code", {status: 401})
    }

    
    const response = await fetch(`https://api.elevenlabs.io/v1/convai/conversation/token?agent_id=${process.env.ELEVENLABS_AGENT_ID}`,
        {headers: {"xi-api-key": process.env.ELEVENLABS_API_KEY!}}
    )
    if (!response.ok) {
        console.error("Elevenlabs error:", response.status, await response.text())
        return new Response("Failed to get conversation token", {status: 500})
    }

    const body = await response.json()
    console.log("Agent ID used:", process.env.ELEVENLABS_AGENT_ID);
    return Response.json({token: body.token})
}

export const config = {path: "/api/token"} // function becomes into an api by Netlify, (serverless function) accessible with fetch("/api/token")
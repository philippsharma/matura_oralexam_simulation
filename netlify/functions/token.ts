export default async function() {
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

export const config = {path: "/api/token"}
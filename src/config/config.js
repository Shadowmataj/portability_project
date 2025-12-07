import { Client } from "@botpress/client"

const client = new Client({
        token: import.meta.env.VITE_ACCESS_TOKEN || '',
        botId: import.meta.env.VITE_BOT_ID || '',
        workspaceId: import.meta.env.VITE_WORKSPACE_ID || ''
    })


const config = {
    client: client,
    botLink: import.meta.env.VITE_BOT_LINK || ''
}

export default config

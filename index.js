const axios = require('axios');

async function main(guildid) {
    const token = "Bot Token"
    const res = await axios.put(`https://discord.com/api/v9/guilds/${guildid}/incident-actions`, {
        invites_disabled_until: null,
        dms_disabled_until: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    }, {
        headers: {
            Authorization: `Bot ${token}`,
            'Content-Type': 'application/json'
        }
    });
    console.log(res.data) 
}


main("guildID(serverid)");

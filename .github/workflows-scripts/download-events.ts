const COUNT = 100;

let events = []

let running = true;
let error = false;

while (running) {
    try {
        const response = await fetch(`https://store.steampowered.com/events/ajaxgetpartnereventspageable/?appid=387990&offset=${events.length}&count=${COUNT}`);
        if (!response.ok) {
            running = false;
            error = true;
            break;
        }
        const data = await response.json();
        if (data.success !== 1) {
            running = false;
            error = true;
            break;
        }
        events.push(...data.events);
        if (data.events < COUNT) {
            running = false;
            break;
        }
    } catch(e) {
        console.error(e);
        running = false;
        error = true;
        break;
    }
}

if(!error) {
    for (const event of events) {
        await Deno.writeTextFile(`steam/events/${event.gid}/event.bbcode`, event.announcement_body.body);
        delete event.announcement_body.body;
        await Deno.writeTextFile(`steam/events/${event.gid}/event.jsondata.json`, event.jsondata);
        delete event.jsondata;
        await Deno.writeTextFile(`steam/events/${event.gid}/event.json`, JSON.stringify(event));
    }
} 
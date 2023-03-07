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
        if (!Array.isArray(data.events)) {
            running = false;
            break;
        }
        events.push(...data.events);
        if (data.events.length < COUNT) {
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
        await Deno.mkdir(`./steam/events/${event.gid}`, {
            recursive: true
        });
        await Promise.all([
            Deno.writeTextFile(`./steam/events/${event.gid}/event.bbcode`, event.announcement_body.body, {
                create: false
            }),
            Deno.writeTextFile(`./steam/events/${event.gid}/event.jsondata.json`, event.jsondata, {
                create: false
            })
        ]);
        delete event.announcement_body.body;
        delete event.jsondata;
        await Deno.writeTextFile(`./steam/events/${event.gid}/event.json`, JSON.stringify(event, null, 2), {
            create: false
        });
    }
} 
import { ensureFile } from "https://deno.land/std@0.178.0/fs/ensure_file.ts";

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
        await Promise.all([
            ensureFile(`./steam/announcements/${event.gid}/announcement.bbcode`),
            ensureFile(`./steam/announcements/${event.gid}/announcement.jsondata.json`),
            ensureFile(`./steam/announcements/${event.gid}/announcement.json`)
        ]);

        await Promise.all([
            Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.bbcode`, event.announcement_body.body, {
                create: false
            }),
            Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.jsondata.json`, event.jsondata, {
                create: false
            })
        ]);
        delete event.announcement_body.body;
        delete event.jsondata;
        await Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.json`, JSON.stringify(event, null, 2), {
            create: false
        });
    }
} 
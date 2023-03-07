import { ensureFile } from "https://deno.land/std@0.178.0/fs/ensure_file.ts";

const COUNT = 100;

interface Event {
    gid: string;
    clan_steamid: string;
    event_name: string;
    event_type: number;
    appid: number;
    server_address: string;
    server_password: string;
    rtime32_start_time: number;
    rtime32_end_time: number;
    comment_count?: number;
    creator_steamid: string;
    last_update_steamid: string;
    event_notes: string;
    jsondata: string;
    announcement_body: AnnouncementBody;
    published: number;
    hidden: number;
    rtime32_visibility_start: number;
    rtime32_visibility_end: number;
    broadcaster_accountid: number;
    follower_count?: number;
    ignore_count?: number;
    forum_topic_id: string;
    rtime32_last_modified?: number;
    news_post_gid: string;
    rtime_mod_reviewed: number;
    featured_app_tagid: number;
    referenced_appids: any[];
    build_id: number;
    build_branch: string;
    votes_up?: number;
    votes_down?: number;
    comment_type: string;
    gidfeature: string;
    gidfeature2: string;
    clan_steamid_original: string;
}
interface AnnouncementBody {
    gid: string;
    clanid: string;
    posterid: string;
    headline: string;
    posttime: number;
    updatetime: number;
    body: string;
    commentcount?: number;
    tags: string[];
    language: number;
    hidden: number;
    forum_topic_id: string;
    event_gid: string;
    voteupcount?: number;
    votedowncount?: number;
    ban_check_result: number;
    banned: number;
}


const events: Event[] = []

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
    } catch (e) {
        console.error(e);
        running = false;
        error = true;
        break;
    }
}

if (!error) {
    for (const event of events) {
        await Promise.all([
            ensureFile(`./steam/announcements/${event.gid}/announcement.md`),
            ensureFile(`./steam/announcements/${event.gid}/announcement.bbcode`),
            ensureFile(`./steam/announcements/${event.gid}/announcement.jsondata.json`),
            ensureFile(`./steam/announcements/${event.gid}/announcement.json`)
        ]);

        const bbcode = event.announcement_body.body.replaceAll('\r\n', '\n').replaceAll('\u2028', '\n')
        const markdown = bbcode
            .replace(/\{STEAM_CLAN_IMAGE\}/g, 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/')
            .replace(/\[img\](.*?)\[\/img\]/g, '![]($1)')
            .replace(/\[b\](.*?)\[\/b\]((\s*?)(\n))?/g, '**$1**$3$4$4')
            .replace(/\[i\](.*?)\[\/i\]/g, '*$1*')
            .replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '[$2]($1)')
            .replace(/\[previewyoutube=(.*?)(;.*?)?\](.*?)\[\/previewyoutube\]/, '<iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
            .replace(/\[\*\]/g, '*')
            .replace(/\[list\]\n?(.*?)\n?\[\/list\]/, '$1\n');

        await Promise.all([
            Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.bbcode`, bbcode, {
                create: false
            }),
            Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.md`, markdown, {
                create: false
            }),
            Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.jsondata.json`, JSON.stringify(JSON.parse(event.jsondata), null, 2), {
                create: false
            })
        ]);

        // @ts-ignore
        delete event.announcement_body.body;
        // @ts-ignore
        delete event.jsondata;
        delete event.votes_up;
        delete event.votes_down;
        delete event.rtime32_last_modified;
        delete event.follower_count;
        delete event.ignore_count;
        delete event.comment_count;
        delete event.announcement_body.commentcount;
        delete event.announcement_body.voteupcount;
        delete event.announcement_body.votedowncount;

        await Deno.writeTextFile(`./steam/announcements/${event.gid}/announcement.json`, JSON.stringify(event, null, 2), {
            create: false
        });
    }
} 
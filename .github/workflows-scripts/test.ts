// const dirs = await Promise.all([...Deno.readDirSync('./steam/announcements')].map(async e => [e.name,await Deno.readTextFile(`./steam/announcements/${e.name}/announcement.bbcode`)]))

// for (const [id, bbcode] of dirs) {
//     let markdown = bbcode
//         .replace(/\{STEAM_CLAN_IMAGE\}/g, 'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/')
//         .replace(/\[\/img\]\n\[(img|b)\]/gi, '[/img]\n\n[$1]')
//         .replace(/(\S)\n\[img\]/gi, '$1\n\n[img]')
//         .replace(/\[img\](.*?)\[\/img\]/gi, '![]($1)')
//         .replace(/\[\/(b|i|img)\]\n(\S)/gi, '[/$1]\n\n$2')
//         .replace(/\[b\](.*?)\[\/b\]/gsi, '**$1**')
//         .replace(/\[i\](.*?)\[\/i\]/gsi, '*$1*')
//         .replace(/\[u\](.*?)\[\/u\]/gsi, '<u>$1</u>')
//         .replace(/\[h([1-6])\](.*?)\[\/h[1-6]\]/gsi, '<h$1>$2</h$1>')
//         .replace(/\[url=(.*?)\](.*?)\[\/url\]/gi, '[$2]($1)')
//         .replace(/\[previewyoutube=(.*?)(;.*?)?\](.*?)\[\/previewyoutube\]/gi, '<iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
//         .replace(/\[\*\]\s*/g, '* ')

//     // deno-lint-ignore no-inner-declarations
//     function match(input: string, depth = 0): string {
//         const start = input.indexOf('[list]');
//         const end = input.indexOf('[/list]')
//         // const idx = input.indexOf('[list]');
//         // const idxEnd = input.indexOf('[/list]')
//         // if (idx !== -1 && idxEnd !== -1) {
//         //     match(input.slice(idx + '[list]'.length), depth + 1)
//         // } else {
//         //     return input
//         // }
//         // const m = /\[list\](.*)\[\/list\]/gs.exec(input)
//         // if (m !== null) {
//         //     if (id === '2881695680538437721') console.log(m[0], depth, input)
//         //     const before = input.substring(0, m.index).replace(/\n$/, '');
//         //     const after = input.substring(m.index + m[0].length).replace(/^\n/, '')
//         //     return before + match(m[1], depth + 1).split('\n').join('\n' + '    '.repeat(depth)) + match(after, depth)
//         // }
//         // return input;
//     }

//     markdown = match(markdown).replace(/\[\/?list\]/gi, '')

//     await Deno.writeTextFile(`./steam/announcements/${id}/announcement.md`, markdown, {
//         create: false
//     });
// }




// function match(input: string, depth = 0) {
//     const start = input.indexOf('[list]')
//     const startEnd = start + '[list]'.length;
//     const end = input.indexOf('[/list]')
//     const endEnd = end + '[/list]'.length;

//     if (depth > 0) {
//         const levelContent = input.slice()
//     }

//     if (start === -1 && end === -1) return;
//     console.log(depth, start, startEnd, end, input)
//     if (startEnd < end) {
//         match(input.slice(startEnd), depth + 1)
//     } else {
//         match(input.slice(end + '[/list]'.length), depth - 1)
//     }
// }

// match(bbcode)

const bbcode = `aaaa[list][/list]aaaa`

const openTag = '[list]';
const openTagLength = openTag.length;
const closeTag = '[/list]';
const closeTagLength = closeTag.length;

let level = 0;
let matching = true
let matched = bbcode;
let output = '';

while (matching) {
    const openIdx = matched.indexOf(openTag);
    const openEndIdx = openIdx + openTagLength;
    const closeIdx = matched.indexOf(closeTag);
    const closeEndIdx = closeIdx + closeTagLength;

    console.log(JSON.stringify({
        level,
        openIdx,
        openEndIdx,
        closeIdx,
        closeEndIdx,
        matched,
        output
    }, null, 2))

    let out;
    if (openIdx > 0 && openIdx < closeIdx) {
        level += 1;
        output += out = matched.slice(0, openIdx)
    } 
    if((openIdx === -1 || openIdx > closeIdx) && closeIdx > 0) {
        level -= 1;
        output += out = matched.slice(0, closeIdx).split('\n').join('\n' + '   '.repeat(level))
    }

    if (openIdx === -1 && closeIdx === -1) break;

    matched = matched.slice((openIdx > closeIdx || openIdx === -1) ? closeEndIdx : openEndIdx)
}

console.log(output)
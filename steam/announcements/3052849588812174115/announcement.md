![](https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans//11471984/01459a509dc273d3bb90923b30eeb2e98eed2880.png)<br/>
<br/>
*Updated March 30*<br/>
<br/>
**Bug fixes**<br/>
<br/>
* Fixed camera issues in the World Builder<br/><br/>
<br/>
--------------------------------------------------------<br/>
<br/>
*Updated March 26*<br/>
<br/>
**Bug fixes**<br/>
<br/>
* Players that had issues starting the game in the test branch should now be able to start<br/>
* Games containing a corrupt player position is repaired<br/>
* Fixed a crash that could occur when removing blocks or parts while restarting a challenge or exiting a world<br/>
* Fixed an issue that could cause the blueprint preview to stop updating<br/>
* Fixed a crash that occurred when placing blocks on the ground using the Vacuum (hotpatched)<br/>
* Fixed an issue where some harvesting assets were invisible, like corn and soil (hotpatched)<br/><br/>
<br/>
**Modding**<br/>
<br/>
* Fixed a crash that occurred when joining a game containing custom characters that were not present on the client<br/>
* Fixed a crash with that occurred when setting the density of parts or blocks to 0<br/>
* Fixed a crash with that occurred when setting the character mass to 0<br/>
* Added a hint to verify the integrity of game files then shaders are broken<br/><br/>
<br/>
--------------------------------------------------------<br/>
<br/>
*Updated March 24*<br/>
<br/>
**Features**<br/>
<br/>
* Added Easy difficulty to the gameplay setting<br/>
* Glowstick added to creative mode<br/>
* Crafting resources needed by the Craftbot added to creative mode<br/>
* Added Bucket to creative mode<br/><br/>
<br/>
**New chat commands**<br/>
<br/>
* /day - Set day<br/>
* /night - Set night<br/><br/>
Type /help to show all commands<br/>
Type /help &lt;command&gt; for more info<br/>
<br/>
**Improvements**<br/>
<br/>
* Vacuum can suck up Pigment Flower, Cotton and dropped items<br/>
* Explosives can be triggered by bot collisions<br/><br/>
<br/>
**Bug fixes**<br/>
<br/>
* Fixed a case when bots could sometimes stop and not make a new decision<br/>
* Fixed some popups scaling issues<br/>
* Other GUI fixes<br/><br/>
<br/>
**Optimizations**<br/>
<br/>
* Preloading character meshes for more smooth capsule pops<br/><br/>
<br/>
**Modding**<br/>
<br/>
* Fixed a crash, introduced in the previous test, that occurred when accessing functions on a part directly after being created to a pre-existing creation.<br/><br/>
<br/>
--------------------------------------------------------<br/>
<br/>
*Updated March 19*<br/>
<br/>
**Hi Mechanics!**<br/>
Thanks for helping us test the upcoming update.<br/>
In this test, we did a bunch of additional fixes based on your feedback.<br/>
For example, we added more chat commands for the capsules that will be helpful and fun to use.<br/>
Fixed some of the bots misbehaving and some additional fixes for players using mods.<br/>
<br/>
Here is the list:<br/>
<br/>
**Features**<br/>
<br/>
* Updated flat terrain<br/>
* Added Craftbot to creative mode<br/>
* Added Refinery to creative mode<br/>
* Added Resource Collector to creative mode<br/>
* Added Large Chest to creative mode<br/>
* Added Vacuum Pump and Vacuum Pipes to creative mode<br/><br/>
<br/>
**New chat commands**<br/>
<br/>
* /noaggrocreations - Bots do not aggro creations<br/>
* /popcapsules - Open all capsules<br/>
* /killall - Kills all spawned units<br/>
* /place tree - Places a tree in creative mode<br/>
* /place stone - Places a stone in creative mode<br/>
* /place birch|spruce|leafy|pine - Places a specific tree type<br/>
* /dropscrap - Enables or disables Scrap Metal loot drops in creative mode (default off)<br/>
* /restrictions - Allows removing restricted objects in creative mode, like tree parts.<br/>
* /clear -Removes all creations from the entire world in creative mode. Can only be used by the host and must be enabled with /allowclear<br/>
* /allowclear - Allows the use of the /clear chat command<br/><br/>
Type /help to show all commands<br/>
Type /help &lt;command&gt; for more info<br/>
<br/>
<br/>
**Improvements**<br/>
<br/>
* Threading prioritization improvements. Should solve issues with creations despawning for some players when driving around.<br/>
* Bot capsules can be opened by drilling or sawing them<br/>
* Updated Red Tapebot visuals<br/>
* Hotbar is saved in the menu build mode<br/>
* Game settings saved (per world)<br/><br/>
<br/>
**Tweaks**<br/>
<br/>
* Bots no longer target capsules<br/><br/>
<br/>
**Bug fixes**<br/>
<br/>
* Fixed color of carried Scrap Metal<br/>
* Fixed an issue where creations containing static bodies triggered the fall through ground check.<br/>
* Spruce tree texture fixes<br/>
* Fixed an issue where players could be stuck with a grey screen after testing a challenge in the challenge builder<br/>
* Fixed an issue where creations placed on the ground could sometimes become loose in survival mode when returning to an unloaded area<br/><br/>
<br/>
**Optimizations**<br/>
<br/>
* Optimized AI pathfinding<br/>
* Stone LODs added<br/>
* Fixed issues with lua running out of memory.<br/>
* Optimized the loading time of the user content icons in the main menu <br/><br/>
<br/>
**Modding**<br/>
<br/>
* Scripts can access the hotbar in creative mode<br/>
* Fixed issues with mods reading and writing json files<br/>
* Mods can load custom GUI layouts<br/>
* Fixed an issue where adding shapes to existing bodies from scripts could crash the game<br/>
* Fixed a crash that occurred when creating a modded thruster with invalid configuration<br/><br/>
<br/>
--------------------------------------------------------<br/>
<br/>
*Updated March 5*<br/>
<br/>
* Added Woc capsule.<br/>
* Added Glowbug capsule.<br/>
* Fixed a crash that occurred when clients left the game with a spudgun equipped.<br/><br/>
<br/>
--------------------------------------------------------<br/>
<br/>
**Hi Mechanics!**<br/>
<br/>
Last few week we’ve been hard at work on the Creative mode update that we mentioned in our latest devblog. It contains a lot of new things that we need help testing out to make sure it runs well.<br/>
<br/>
Some of these things are updated terrain worlds that now have trees and rocks from survival.<br/>
We also added water to the terrain and slightly expanded it in size.<br/>
Something we are really excited to see you try out are the new enemy capsules.<br/>
These allow you to release bots in to the creative world. You can also paint the bots in other colors to make them turn on each other. This is a fun feature that let’s you set up bot battles.<br/>
We also made it possible for mechanics to customize their main menu buy clicking on the blue pen icon at the bottom. Keep in mind that bearings can’t be used in the main menu world.<br/>
<br/>
On top of all this we also made a ton of fixes and improvements that we are sure a lot of mechanics will be happy with! One of them is a physics quality slider that can be accessed in-game from the ESC – Option menu. Here you can set how good you want the physics to be. It’s a good slider to have to adjust performance, but also to make some really wacky creations. Give these a try!<br/>
Please keep in mind that some things are still missing in the test that will be added in the coming days.<br/>
For example Woc and glowbug Capsules and a few more fixes we are still currently in the works. <br/>
<br/>
<br/>
Here is the full list!<br/>
<br/>
**Features**<br/>
<br/>
* 64 bit executable.<br/>
* Physics quality sliders.<br/>
* Added bot capsules in creative mode.<br/>
* Bots can be painted.<br/>
* Painted bots will team up with bots of the same color.<br/>
* New creative worlds will now have water.<br/>
* New creative worlds will now have trees that can be cut down and stones that can be drilled.<br/>
* Tiles containing water can now be used in the world builder terrain.<br/>
* Larger creative flat world.<br/>
* Added a fence around the edge of the flat world.<br/>
* Added buildable main menu background.<br/>
* Added the Beacon to creative mode.<br/>
* Added the Water Cannon and Water Container to creative mode.<br/>
* Added the Ammo Container to creative mode. <br/>
* Added /noaggro and /aggroall chat commands in creative for bot vs player combat settings.<br/>
* Fade to black when respawning and while riding elevators.<br/>
* Chat history, press up and down in chat to repeat chat messages.<br/><br/>
<br/>
**Improvements**<br/>
<br/>
* The character can now be rotated in the main menu character customization screen.<br/>
* New loading screens for all game modes.<br/>
* Added new Logic Gate GUI.<br/>
* Collision Effects should now trigger more consistently at high speeds.<br/>
* Collisions with bots and wocs are much more responsive.<br/>
* Reworked character vs character collision.<br/>
* Creation visualization is now more accurate for animated parts when using the Lift and Weld Tool.<br/>
* Added a blur effect in the main menu.<br/>
* The Logbook can now be opened while seated.<br/>
* Better lighting in creative mode.<br/><br/>
<br/>
**Tweaks**<br/>
<br/>
* Saw blades deal more damage to small logs.<br/>
* Slightly increased Spudling Gun damage.<br/>
* Reduced hand refine time.<br/>
* Tweaked sledgehammer chain attack timing.<br/>
* Tweaked collision damage.<br/>
* Crafting the Beacon requires a little more metal.<br/><br/>
<br/>
**Optimizations**<br/>
<br/>
* Improved loading times when joining world with many creations.<br/>
* Optimized inventory searching.<br/>
* Faster load times when loading particles.<br/>
* Other optimizations :) <br/><br/>
<br/>
**Bug fixes**<br/>
<br/>
* Fixed an issue that caused Terrain Asset Mods to not work with the World Builder terrain.<br/>
* Fix for dropping framerate when playing survival for a long time.<br/>
* Fixed a sound issue with the yellow Totebot Head.<br/>
* Fixed an issue where Totebot Head settings did not save and sync properly.<br/>
* Fixed an issue where Terrain Asset Mods would not load properly.<br/>
* Fixed a bug that could cause Farmbots to become unkillable.<br/>
* Fixed an issue that caused Wocs to unload if they were ragdolling while driving them around.<br/>
* Fixed connect tool rendering issues that could occur when building more than 1024 bodies.<br/>
* Fixed an issue where dynamic creations could stay in the air if laying on a lift and the lift was removed.<br/>
* Fixed crash that could occur when joining a game.<br/>
* Fixed a crash that could occur when switching display resolution.<br/>
* Fixed a crash that could occur when characters were ragdolling.<br/>
* Fixed an issue where lifts could be seen on the wrong warehouse floor.<br/>
* Fixed an issue where other players would not seem to have a tool equipped when spawning.<br/>
* Fixed an issue where carry animations would not be played.<br/>
* Fixed an issue where the player could still erase things while seated.<br/>
* Fixed an issue that could cause physics impulses to stop working on characters.<br/>
* Fixed a bug causing some effects to be missing.<br/>
* Fixed client crash caused by sending invalid creations.<br/>
* Fixed a bug that would give multiple yields and when harvesting the same plant with multiple vacuum pumps.<br/>
* Fixed an issue where beacon distances sometimes did non update correctly in the logbook.<br/>
* Fixed rendering issues with the build area and goal holograms in challenge mode.<br/>
* Fixed an issue that could cause the camera to get stuck if the player respawned while aiming at a Dressbot.<br/>
* Various tool animation fixes.<br/>
* Mechanic Station graphics fixes.<br/><br/>
<br/>
**Tile Editor**<br/>
<br/>
* Water can now be added in the tile editor.<br/>
* Fixed an issue where the tile editor would not save multiple Terrain Asset Mod dependencies for a tile.<br/>
* Option to create assets with or without random rotation in the tile editor.<br/>
* Fixed tile icon rendering issues.<br/><br/>
<br/>
<br/>
**For all the latest news, follow us on**<br/>
[Twitter](https://twitter.com/ScrapMechanic)<br/>
[Facebook](https://www.facebook.com/scrapmechanic/)<br/>

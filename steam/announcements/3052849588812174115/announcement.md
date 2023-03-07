![](https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans//11471984/01459a509dc273d3bb90923b30eeb2e98eed2880.png)

*Updated March 30*

**Bug fixes**

*Fixed camera issues in the World Builder


--------------------------------------------------------

*Updated March 26*

**Bug fixes**

[list]
*Players that had issues starting the game in the test branch should now be able to start
*Games containing a corrupt player position is repaired
*Fixed a crash that could occur when removing blocks or parts while restarting a challenge or exiting a world
*Fixed an issue that could cause the blueprint preview to stop updating
*Fixed a crash that occurred when placing blocks on the ground using the Vacuum (hotpatched)
*Fixed an issue where some harvesting assets were invisible, like corn and soil (hotpatched)
[/list]

**Modding**

[list]
*Fixed a crash that occurred when joining a game containing custom characters that were not present on the client
*Fixed a crash with that occurred when setting the density of parts or blocks to 0
*Fixed a crash with that occurred when setting the character mass to 0
*Added a hint to verify the integrity of game files then shaders are broken
[/list]

--------------------------------------------------------

*Updated March 24*

**Features**

[list]
*Added Easy difficulty to the gameplay setting
*Glowstick added to creative mode
*Crafting resources needed by the Craftbot added to creative mode
*Added Bucket to creative mode
[/list]

**New chat commands**

[list]
*/day - Set day
*/night - Set night
[/list]
Type /help to show all commands
Type /help <command> for more info

**Improvements**

[list]
*Vacuum can suck up Pigment Flower, Cotton and dropped items
*Explosives can be triggered by bot collisions
[/list]

**Bug fixes**

[list]
*Fixed a case when bots could sometimes stop and not make a new decision
*Fixed some popups scaling issues
*Other GUI fixes
[/list]

**Optimizations**

[list]
*Preloading character meshes for more smooth capsule pops
[/list]

**Modding**

[list]
*Fixed a crash, introduced in the previous test, that occurred when accessing functions on a part directly after being created to a pre-existing creation.
[/list]

--------------------------------------------------------

*Updated March 19*

**Hi Mechanics!**

Thanks for helping us test the upcoming update.
In this test, we did a bunch of additional fixes based on your feedback.
For example, we added more chat commands for the capsules that will be helpful and fun to use.
Fixed some of the bots misbehaving and some additional fixes for players using mods.

Here is the list:

**Features**

[list]
*Updated flat terrain
*Added Craftbot to creative mode
*Added Refinery to creative mode
*Added Resource Collector to creative mode
*Added Large Chest to creative mode
*Added Vacuum Pump and Vacuum Pipes to creative mode
[/list]

**New chat commands**

[list]
*/noaggrocreations - Bots do not aggro creations
*/popcapsules - Open all capsules
*/killall - Kills all spawned units
*/place tree - Places a tree in creative mode
*/place stone - Places a stone in creative mode
*/place birch|spruce|leafy|pine - Places a specific tree type
*/dropscrap - Enables or disables Scrap Metal loot drops in creative mode (default off)
*/restrictions - Allows removing restricted objects in creative mode, like tree parts.
*/clear -Removes all creations from the entire world in creative mode. Can only be used by the host and must be enabled with /allowclear
*/allowclear - Allows the use of the /clear chat command
[/list]
Type /help to show all commands
Type /help <command> for more info


**Improvements**

[list]
*Threading prioritization improvements. Should solve issues with creations despawning for some players when driving around.
*Bot capsules can be opened by drilling or sawing them
*Updated Red Tapebot visuals
*Hotbar is saved in the menu build mode
*Game settings saved (per world)
[/list]

**Tweaks**

[list]
*Bots no longer target capsules
[/list]

**Bug fixes**

[list]
*Fixed color of carried Scrap Metal
*Fixed an issue where creations containing static bodies triggered the fall through ground check.
*Spruce tree texture fixes
*Fixed an issue where players could be stuck with a grey screen after testing a challenge in the challenge builder
*Fixed an issue where creations placed on the ground could sometimes become loose in survival mode when returning to an unloaded area
[/list]

**Optimizations**

[list]
*Optimized AI pathfinding
*Stone LODs added
*Fixed issues with lua running out of memory.
*Optimized the loading time of the user content icons in the main menu 
[/list]

**Modding**

[list]
*Scripts can access the hotbar in creative mode
*Fixed issues with mods reading and writing json files
*Mods can load custom GUI layouts
*Fixed an issue where adding shapes to existing bodies from scripts could crash the game
*Fixed a crash that occurred when creating a modded thruster with invalid configuration
[/list]

--------------------------------------------------------

*Updated March 5*
[list]
*Added Woc capsule.
*Added Glowbug capsule.
*Fixed a crash that occurred when clients left the game with a spudgun equipped.
[/list]

--------------------------------------------------------

**Hi Mechanics!**


Last few week we’ve been hard at work on the Creative mode update that we mentioned in our latest devblog. It contains a lot of new things that we need help testing out to make sure it runs well.

Some of these things are updated terrain worlds that now have trees and rocks from survival.
We also added water to the terrain and slightly expanded it in size.
Something we are really excited to see you try out are the new enemy capsules.
These allow you to release bots in to the creative world. You can also paint the bots in other colors to make them turn on each other. This is a fun feature that let’s you set up bot battles.
We also made it possible for mechanics to customize their main menu buy clicking on the blue pen icon at the bottom. Keep in mind that bearings can’t be used in the main menu world.

On top of all this we also made a ton of fixes and improvements that we are sure a lot of mechanics will be happy with! One of them is a physics quality slider that can be accessed in-game from the ESC – Option menu. Here you can set how good you want the physics to be. It’s a good slider to have to adjust performance, but also to make some really wacky creations. Give these a try!
Please keep in mind that some things are still missing in the test that will be added in the coming days.
For example Woc and glowbug Capsules and a few more fixes we are still currently in the works. 


Here is the full list!

**Features**

[list]
*64 bit executable.
*Physics quality sliders.
*Added bot capsules in creative mode.
*Bots can be painted.
*Painted bots will team up with bots of the same color.
*New creative worlds will now have water.
*New creative worlds will now have trees that can be cut down and stones that can be drilled.
*Tiles containing water can now be used in the world builder terrain.
*Larger creative flat world.
*Added a fence around the edge of the flat world.
*Added buildable main menu background.
*Added the Beacon to creative mode.
*Added the Water Cannon and Water Container to creative mode.
*Added the Ammo Container to creative mode. 
*Added /noaggro and /aggroall chat commands in creative for bot vs player combat settings.
*Fade to black when respawning and while riding elevators.
*Chat history, press up and down in chat to repeat chat messages.
[/list]

**Improvements**

[list]
*The character can now be rotated in the main menu character customization screen.
*New loading screens for all game modes.
*Added new Logic Gate GUI.
*Collision Effects should now trigger more consistently at high speeds.
*Collisions with bots and wocs are much more responsive.
*Reworked character vs character collision.
*Creation visualization is now more accurate for animated parts when using the Lift and Weld Tool.
*Added a blur effect in the main menu.
*The Logbook can now be opened while seated.
*Better lighting in creative mode.
[/list]

**Tweaks**

[list]
*Saw blades deal more damage to small logs.
*Slightly increased Spudling Gun damage.
*Reduced hand refine time.
*Tweaked sledgehammer chain attack timing.
*Tweaked collision damage.
*Crafting the Beacon requires a little more metal.
[/list]

**Optimizations**

[list]
*Improved loading times when joining world with many creations.
*Optimized inventory searching.
*Faster load times when loading particles.
*Other optimizations :) 
[/list]

**Bug fixes**

[list]
*Fixed an issue that caused Terrain Asset Mods to not work with the World Builder terrain.
*Fix for dropping framerate when playing survival for a long time.
*Fixed a sound issue with the yellow Totebot Head.
*Fixed an issue where Totebot Head settings did not save and sync properly.
*Fixed an issue where Terrain Asset Mods would not load properly.
*Fixed a bug that could cause Farmbots to become unkillable.
*Fixed an issue that caused Wocs to unload if they were ragdolling while driving them around.
*Fixed connect tool rendering issues that could occur when building more than 1024 bodies.
*Fixed an issue where dynamic creations could stay in the air if laying on a lift and the lift was removed.
*Fixed crash that could occur when joining a game.
*Fixed a crash that could occur when switching display resolution.
*Fixed a crash that could occur when characters were ragdolling.
*Fixed an issue where lifts could be seen on the wrong warehouse floor.
*Fixed an issue where other players would not seem to have a tool equipped when spawning.
*Fixed an issue where carry animations would not be played.
*Fixed an issue where the player could still erase things while seated.
*Fixed an issue that could cause physics impulses to stop working on characters.
*Fixed a bug causing some effects to be missing.
*Fixed client crash caused by sending invalid creations.
*Fixed a bug that would give multiple yields and when harvesting the same plant with multiple vacuum pumps.
*Fixed an issue where beacon distances sometimes did non update correctly in the logbook.
*Fixed rendering issues with the build area and goal holograms in challenge mode.
*Fixed an issue that could cause the camera to get stuck if the player respawned while aiming at a Dressbot.
*Various tool animation fixes.
*Mechanic Station graphics fixes.
[/list]

**Tile Editor**

[list]
*Water can now be added in the tile editor.
*Fixed an issue where the tile editor would not save multiple Terrain Asset Mod dependencies for a tile.
*Option to create assets with or without random rotation in the tile editor.
*Fixed tile icon rendering issues.
[/list]


**For all the latest news, follow us on**

[Twitter](https://twitter.com/ScrapMechanic)
[Facebook](https://www.facebook.com/scrapmechanic/)

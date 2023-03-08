*Updated May 30*<br/>
<br/>
* New quest tracker HUD<br/>
* Added support for adding/removing dependencies to other mods in the Mod Tool<br/>
* Other mod dependencies show up in Tile Editor and World Builder when launched from the Mod Tool<br/>
* Fixed a crash that occurred when generating icons for blueprints in a custom game mod with translation files<br/>
* Fixed bug where part names in mods would fail to fallback to English when translation to selected language was missing<br/>
* Fixed crashes where json files would contain invalid numbers<br/>
* Fixed builder guide icon positioning<br/>
* Electric Engine powers up significantly faster<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 25*<br/>
<br/>
* Added support for modded log book entries in custom games<br/>
* Fixed bug where too long names for mods and blueprints would not upload to steam<br/>
* Fixed bug with health bars in challenge mode showing up for clients<br/>
* Fixed crash when attempting to weld joints against joints<br/>
* Fixed bug with missing fires and other script data when entering old worlds<br/>
* Fixed bug with modded items having the wrong sorting order in inventory<br/>
* Fixed bug with sm.joint.setTargetLength not working with pistons added in survival<br/>
* Fixed bug when carrying objects and got incorrect interaction prompts<br/>
* Fixed bug where menu music would continue to play when starting a custom game<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 24*<br/>
<br/>
* Added prefabs to the Mod Tool Tile Builder<br/>
* Horn GUI improvements<br/>
* Blueprints can again have flat shapes but should no longer cause crashes<br/>
* Fixed a crash that occurred when blueprints had invalid joint json<br/>
* Fixed a crash that occurred when renderable json files had an invalid root object<br/>
* Added option in script API to stop effects with stopBreakSustain, this allows some looping sound effects to end correctly when triggered from scripts<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 23*<br/>
<br/>
* Added blueprints to the Mod Tool Tile Editor (Must be in $CONTENT_DATA/Blueprints) <br/>
* Added tools, projectiles, melee attacks och harvestables to Blocks and Parts mods<br/>
* Fixed a crash related to the Controller<br/>
* Fixed crash that occurred when projectiles were fired in an area triggers projectile hit callback<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated again May 20*<br/>
<br/>
* Added a temporary quickfix for looping sounds. (A better fix coming next week)<br/>
* Waypoint nodes available in the in-game Tile Editor<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 20*<br/>
<br/>
* Added nodes to the Tile Editor<br/>
* Custom Game mods can define their own nodes<br/>
* Crash fixes<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 19*<br/>
<br/>
* The horn GUI is back (still work in progress)<br/>
* Added scrollbar functions to the script API<br/>
* Fixed a crash that occurred when generating icons in the Mod tool<br/>
* Added setWorldPosition to character userdata in the script API<br/>
* Dropped carried items are now placed in the same place as when built, they should now be much less likely to fall through the ground<br/>
* Fixed a crash that occurred when writing a chat message too early from a script <br/>
* Kinematics support added to the default mod terrain script<br/>
* Tutorial GUI now displays the correct keybinding<br/>
* New tutorial added to the crash site bucket<br/>
* Updated quest texts<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 18*<br/>
<br/>
* Mods can now set character name tags with setNameTag<br/>
* Added shapes to the Tile Editor<br/>
* Added sm.gu.translateLocalizationTags to script API<br/>
* Fixed more API calls not correctly translating $CONTENT_DATA<br/>
* Fixed a crash that occurred when spamming the take picture button in the blueprint export GUI<br/>
* Fixed a crash that could occur when closing GUIs of some interactable parts after the part was destroyed<br/>
* Fixed a crash that could happen when a client is joining a game into a world that is being destroyed (challenge mode)<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 17*<br/>
<br/>
* Added a low-quality option for World Builder.<br/>
* Added free placement menu toggle (previously only available on Shift + Click)<br/>
* Added brush size menu (previously only available on Shift + Scroll)<br/>
* Added options in editors to delete tiles and worlds<br/>
* Added more world sizes to the world builder<br/>
* Fixed custom tiles not showing up in tile browser when making a custom game world<br/>
* Fixed crashes for clients playing multiplayer challenge mode<br/>
* Fixed incorrect path reading in Lua API<br/>
* Fixed save dialogs in the mod tool<br/>
* Creating new assets sets in the mod tool now working<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 16*<br/>
<br/>
* Fixed a crash related to the builder guide<br/>
* Fixed player hands being rendered incorrectly<br/>
* Fixed fix tree crash<br/>
* Fixed a crash that occurred when having incorrect item translation files in a mod<br/>
* Fixed particle emitters being hidden incorrectly in the particle editor<br/>
* Fixed a particle editor shutdown crash<br/>
* Updated Visual Studio runtime<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 13*<br/>
<br/>
* Fixed an issue where with the builder guide visualization that could lead to a crash<br/>
* Some items that disappeared from the creative inventory in the previous update are back<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 12*<br/>
<br/>
* Fixed a crash when using non-english new save filename<br/>
* Fixed a crash when mods use an inventory smaller than the hotbar size<br/>
* Fixed a bug where the game settings dropdown would stay after closing the menu<br/>
* Fixed num pad and other special key button prompts spacing and font color<br/>
* Fixed a crash when displaying visualization and switching worlds<br/>
* Fixed auto-generation for effect sets in the mod tool<br/>
* Fixed a bug where mods could not dofile() script files in the core content directories<br/>
* Fixed an interaction bug with the logbook<br/>
* Fixed broken tutorial GUI in some resolutions<br/>
* Survival tutorial car builder guide part is hidden in creative mode<br/>
* Fixed script errors<br/><br/>
--------------------------------------------------------<br/>
<br/>
*Updated May 10*<br/>
<br/>
* Preview image generation fix for Worlds and Tiles<br/>
* Fixed a crash when starting the game with an invalid menu blueprint<br/>
* Fixed a crash when sending an AreaTrigger to a client<br/>
* Fixed bug where player spawn position would be wrong when loading in a warehouse<br/>
* Fixed issues with file referencing in mods<br/>
* Fixed GetHarvestableForCell script callback for mods<br/>
* Other mod scripting fixes<br/>
* Quest script fixes<br/>
* Other crash fixes<br/><br/>
--------------------------------------------------------<br/>
<br/>
Hi Mechanics!<br/>
<br/>
We are closing in on a new update release with a lot of nice new content.<br/>
Today we are rolling out the first test on the test branch mainly for the mod makers.<br/>
The Mod Tool has been updated, making it a lot more open and flexible.<br/>
If you are a mod maker, you will find a lot of new features on the test branch of the Mod Tool.<br/>
We also updated the scripting API reference pages:<br/>
https://scrapmechanic.com/api/index.html<br/>
As some of you might have noticed. We have added two new categories to the Workshop as well.<br/>
World and Custom Games.<br/>
<br/>
Worlds: This is where mechanics can upload custom creative worlds to the workshop.<br/>
Custom Games: This is where mod makers can upload modded survival game modes as well as completely own custom games.<br/>
<br/>
Keep in mind that there will be bugs and issues on the test branch at this stage.<br/>
But it will get more stable as we keep updating it with new content and fixes in the coming days.<br/>
<br/>
**Warning! Do not open saves from the current version of the game on the test branch since things are still a bit unstable and they might break.<br/>
Mods updated with the new Mod Tool will not work in the current version of the game.<br/>
Worlds and Challenges created in the test will not work in the current version of the game either.<br/>
**<br/>
Game Improvements:<br/>
* New Tile Editor GUI<br/>
* Added a lot of Tile Editor features<br/>
* New World Builder GUI<br/>
* Added a lot of World Builder features<br/>
* Worlds can be uploaded to Steam Workshop<br/>
* Multiplayer join settings added<br/>
* Tutorial Quests added to Survival Mode<br/>
* Builder Guide part added to Survival Mode<br/>
* Loading time optimizations<br/>
* Ragdoll optimizations<br/>
* Debris optimizations (new debris system)<br/>
* Particle quality improvements<br/>
* Lighting improvements<br/>
* Visualization shader improvement<br/>Mod Tool:<br/>
* Custom Game mods added to the Mod Tool<br/>
* Tile Editor standalone version for editing Custom Game content added to the Mod Tool<br/>
* World Builder standalone version for editing Custom Game content added to the Mod Tool<br/>
* New Particle Editor added to the Mod Tool<br/>Modding support:<br/>
* Tools and Weapons<br/>
* NPC Characters<br/>
* Kinematics<br/>
* Harvestables<br/>
* Game Script<br/>
* World Scripts<br/>
* Terrain Scripts<br/>
* Projectiles<br/>
* Melee attacks<br/>
* Effects<br/>
* Terrain ground materials<br/>
* Decals usable in Tile Editor<br/>
* Major Script API update<br/>Coming soon:<br/>
* Foliage clutter<br/>
* Prefabs usable in Tile Editor<br/>
* Blueprints usable in Tile Editor<br/>
* Adding nodes in Tile Editor<br/>
* Loading Blocks and Parts mods to custom games<br/><br/>
Stay creative!<br/>
<br/>
Here is how you access the test:<br/>
![](https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans//11471984/2262edd2c87b4da8a0b89d835e307c8dae0a3515.png)<br/>
<br/>
**For all the latest news, follow us on**<br/>
[Twitter](https://twitter.com/ScrapMechanic)<br/>

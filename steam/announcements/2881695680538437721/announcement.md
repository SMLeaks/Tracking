![](https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans//11471984/01459a509dc273d3bb90923b30eeb2e98eed2880.png)<br/>
<br/>
**Hi Mechanics!**<br/>
<br/>
This test turned in to a pretty long one as you might have noticed. We ended up doing a lot of small fixes. But also because we wanted to add a few more things for testing before we drop it.<br/>
Today the 30th of October we finally added the new Beacon interactive part that we’ve been teasing on our Twitter. The Beacon will help you set navigation waypoints in the world to make exploration much easier. It can now be crafted in the Craftbot! Some other highlights are fixes to the UI and main menu that we didn’t find time to add for the survival release. There is still more work to be done to the UI but we are getting there. We also fixed a bigger issue where the frame rate dropped for no clear reason for some players after playing longer sessions in survival. That should not happen anymore.<br/>
We hope to move all of these things to the main game very soon!<br/>
<br/>
Here is the full list!<br/>
<br/>
*Updated November 11*<br/>
<br/>
* The crosshair will now light up when pointing on an object that can be interacted with or picked up.<br/>
* Fixed an issue that could cause the character to arrive in the warehouse before the interior was loaded when using the elevator.<br/>
* Modded bearings, springs and pistons from mods that are not loaded will now default to standard ones.<br/>
* Fixed a bug that caused glow worms to be placed as a block if selecting a spudgun in the hotbar while swimming.<br/>
* Very large creations built on the ground will not become loose when the ground they are attached to is unloaded.<br/>
* Fixed weld tool rendering issues that could occur in some cases.<br/>
* Russian font fixes.<br/>
* Fixed an issue that caused the icons for lift creation exports to be offset.<br/>
* Fixed an issue with the reward item rendering in the dressbot.<br/>
* Minor gui fixes.<br/><br/>
<br/>
*Updated November 4*<br/>
<br/>
* Creative games can now be started even if it contains blocks or parts from a mod that is not loaded. The missing blocks and parts will be replaced by a removable error-object.<br/>
* Fixed an issue that caused only the 3 first ingredients to be visible in the Craftbot.<br/>
* Creations with a gas tank containing fuel can now be saved on the Lift.<br/>
* Fixed an issue where thrusters connected to both a gas tank and a button/driver's seat did not load correctly on the lift.<br/>
* Fixed an issue that caused clients to not see the loot-projectile when dropping items on the ground.<br/>
* The large challenge sensor will now trigger even if the challenge has not started.<br/>
* Fixed a rare crash related to blocks and parts removing grass from the terrain.<br/>
* Fixed a rare crash that could occur when using some tools in a warehouse elevator.<br/>
* Fixed GUI issues with the big challenge piston and the old creative piston.<br/>
* Fixed an issue that caused only 9 mod items to be shown per row instead of 10 in the inventory mod tab.<br/>
* Added missing "[E] Use" text when looking at upgradable sensors.<br/>
* Fixed a crash that occurred when a modded part tried to upgrade into a non-existing part.<br/><br/>
<br/>
*Updated October 30*<br/>
<br/>
* Added a beacon that can be crafted in the craftbot.<br/>
* Optimized code that finds blocks that enemies till try to destroy in raids.<br/>
* Optimized Woc corn finding.<br/>
* Component kits can be used in challenge builder.<br/>
* Potato ammo can be used in challenge builder. Use /enable_ammo_consumption chat command to enable ammo consumption.<br/>
* Gas and Battery can be used in challenge builder. Use /enable_fuel_consumption chat command to enable fuel consumption.<br/>
* Use /enable_ammo_consumption chat command to enable ammo consumption.<br/>
* Added a quest system for future content.<br/>
* Fixed an issue related to the the optimized water calculation that caused lower framerate that increased over time.<br/>
* Fixed freezes that could occur when shutting down a game.<br/>
* Fixed issues with the terrain loading that could cause some terrain to not load properly. This could for instance cause water to not work.<br/>
* Fixed a bug that put items in the hotbar when destroying objects in creative mode and challenge builder.<br/>
* Fixed an issue that could cause GUI placement issues in windowed mode.<br/>
* Level 5 Driver's seat/saddle settings are now saved in blueprints.<br/>
* Items in hotbar 2 and 3 can now be swapped.<br/>
* Load game date being one month off and formatting fix.<br/>
* Main menu camera animations.<br/>
* Elevator audio fixes<br/>
* New lift save and load blueprint GUIs<br/>
* Dressbot GUI improved rendering and effects.<br/>
* Consumable item tab for craftbot and inventory.<br/>
* Craftbot tooltip shows the names of ingredients.<br/>
* Level 5 Driver's Seat GUI fixes.<br/>
* Replaced GUIs that had the old style.<br/>
* Letter spacing added to font rendering.<br/>
* A lot of visual GUI fixes and interaction fixes.<br/><br/>
<br/>
*Updated September 11*<br/>
<br/>
* Putting soil or blocks on the ground removes grass. The grass will grow back when they are removed.<br/>
* If all crops are destroyed by a raid, the bots will destroy random parts.<br/>
* Fixed an issue in the test where tools thrown on the ground in challenge mode disappeared.<br/>
* Multiple lifts and sledgehammers caused by a previous bug in the test are removed when joining a game.<br/><br/>
<br/>
*Updated September 7*<br/>
<br/>
* Fixed a bug in the test where the sledgehammer and lift would disappear if moved with shift-click into a chest. (Players who lost them will get new ones when loading/joining a world.)<br/>
* Reduced the chances that Totebots and Haybots will destroy high durability materials.<br/><br/>
<br/>
**Hi Mechanics!**<br/>
<br/>
More important fixes and improvements are on the way! But you can already now help us test them in the latest test branch. Interactive parts from survival are now added to Creative mode with the exception of the Water cannon and the Vacuum pump. These will be added later together with a water update to creative mode that will come soon. We also improved the ragdoll physics a lot to reduce frame drops. So creative traps that push a lot of bots in to a ragdoll state should work much better now!<br/>
<br/>
Patch notes:<br/>
<br/>
* A majority of interactive parts from survival mode are now added to creative mode.<br/>
* All parts in creative mode are now usable in challenge builder.<br/>
* Character ragdolls are synchronized to clients.<br/>
* Fixed character jitter when driving on clients.<br/>
* Optimized character ragdolls.<br/>
* The corn can now be broken by creation collisions.<br/>
* Farmbots react to sounds.<br/>
* Glowsticks now emits more light when held in the hand.<br/>
* Fixed an issue where shapes did not correctly block explosions.<br/>
* Totebots and Haybots will try to destroy blocks and parts with all durability levels.<br/>
* Haybots will try to attack more often where they would otherwise try to chase the player.<br/>
* Explosions can no longer be triggered by character collision.<br/>
* The sawblade can now saw logs welded to the same creation.<br/>
* Increased durability on some stackable items from 1 to 2.<br/>
* Improved block remove interaction.<br/>
* Shift-click to put gas/battery in engine improvement.<br/>
* Added a brightness slider in the display settings.<br/>
* Added a framerate cap selection in the display settings.<br/>
* The handbook nows up in first and third person.<br/>
* Chests show an animation when opened.<br/>
* New effects when hitting trees and burnt trees.<br/>
* The weld tool does no longer show a visualization of removed branches when welding logs.<br/>
* Added names to clothes.<br/>
* Minor warehouse collision optimization.<br/>
* Warehouse elevator sound fixes.<br/>
* Fixed a crash that occurred if a client joined the game while a character was seated.<br/>
* Fixed a bug that caused the fertilizer to not be spent when fertilizing plants.<br/>
* Fixed fertilizer first-person effect placement.<br/>
* Fixed a bug that allowed the lift to be placed on dynamic creations.<br/>
* Fixed a bug that could cause KO-bag icons to get stuck.<br/>
* Fixed a bug that could cause the character to go into T-pose when holding an edible item.<br/>
* Fixed a bug that caused the light to not be updated when the intensity was changed or when painted.<br/>
* Fixed a bug in challenge builder that could cause an extra builder bot to get stuck.<br/>
* Fixed a crash that could happen if a corrupt game file was selected in the menu.<br/>
* Fixed a bug that could cause shapes to levitate after removing the shape it was resting on.<br/>
* Fixed an issue that could cause the sensor setting to be incorrectly updated when edited.<br/>
* Fixed an issue that could cause the timer setting to be incorrectly updated when edited.<br/>
* Fixed an issue that could cause the totebot head setting to be incorrectly updated when edited.<br/>
* Fixed a bug that caused the builder bot hands to be shown in first person when testing a challenge.<br/>
* Fixed an animation issue on the big red farmbot when ragdolled while aiming.<br/>
* Fixed a sync issue with the electric engine when connected to a button or switch.<br/><br/>
<br/>
Keep in mind that worlds used on the test branch will not open in the main branch until this update is officially out.<br/>
<br/>
Here is how you jump on the test branch to check out the new stuff. <br/>
![](https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans//11471984/2262edd2c87b4da8a0b89d835e307c8dae0a3515.png)<br/>
<br/>
More fixes and improvements coming soon!<br/>
<br/>
**For all the latest news, follow us on**<br/>
[Twitter](https://twitter.com/ScrapMechanic)<br/>
[Facebook](https://www.facebook.com/scrapmechanic/)
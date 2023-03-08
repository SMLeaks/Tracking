**(Updated May 30)**<br/>
<br/>
* Modded terrain assets should now work as intended.<br/>
* The in-game console will now only automatically appear on errors if the game was started with the -dev command line option. (To enable, right-click Scrap Mechanic, press "SET LAUNCH OPTIONS..." in the GENERAL tab and type -dev and press OK. This is typically what you want to do if you are working on a mod.)<br/><br/>
**(Updated May 29)**<br/>
<br/>
* Mods can store data using sm.storage.save( id, object ) and load using object = sm.storage.load( id ). Id is any integer and will not conflict with other mods.<br/>
* Added an in-game console where Lua errors and prints will be visible. Use /console to open.<br/>
* Lua scripts will now stop running update callbacks if there is an error in one.<br/>
* Improved character network synchronization.<br/>
* Handheld spud gun potato position tweaks.<br/><br/>
**(Updated May 28)**<br/>
<br/>
* Fixed an issue in the test where custom terrain could not be created or loaded.<br/><br/>
**(Updated May 25)**<br/>
<br/>
* Fixed world load/join crash that occurred when the game auto-downloaded required workshop content.<br/>
* Fixed a bug that could cause missing tools and player names for other players.<br/>
* Reverted experimental character network synchronization.<br/>
* Optimized network data usage.<br/>
* Fixes to file cache system.<br/>
* Restricted some unsafe and experimental lua interfaces. Will return in a safe version!<br/>
* Added missing plastic particle effect and sound.<br/>
* Optimized potato.<br/><br/>
**(Updated May 18)**<br/>
<br/>
* Fixed a crash that occurred when destroying blocks with spud guns on clients and on rare occasions also on hosts.<br/>
* Mountable spud guns should no longer shoot through blocks when moving.<br/>
* Adjusted the connect tool animation when dragging connections.<br/>
* Testing out some new force calculations for recoil and potato impact.<br/>
* Changed the color of mountable spud gun connection point.<br/>
* For modders: sm.projectile.shapeFire and sm.physics.applyImpulse changed to local space.<br/><br/>
![](https://i.imgur.com/PBXDBtt.png)<br/>
<br/>
**Hi Mechanics!**<br/>
<br/>
This is a big test with a lot of new stuff so get ready!<br/>
<br/>
<1>IMPORTANT <br/>
* Old worlds will not work with this test at the moment.<br/>
* We will do improvements and changes during the test period. It’s not completely done.</1><br/>
<br/>
We got a ton of requests to add the spud gun and the mountable spud gun before the survival release. So we decided to lift it out of our survival branch and add it to the current creative mode. Of course, this came with some extra work and changes. Since it’s creative mode the spud guns have unlimited potato ammo and there is no reload. The only blocks the spud gun can break is glass and the new cardboard block that is also in this update. Please use these blocks when building vehicles for car combat and other cool creations that you would like to be able to destroy. <br/>
The spud gun does no damage to players in creative mode. We will, however, look into some type of feedback like a pushback when hit. It might be added during the test period.<br/>
<br/>
We also decided to do a lot of awesome improvements with the update.<br/>
The biggest one is the network re-work. The players should not be teleported around anymore when playing with friends and it should be a lot more accurate and stable. <br/>
We have also added a lot of new animations. For example, there is a proper sprint animation now that works with all the tools. The sledgehammer animation is completely re-made to name a few. We also added the updated tools from survival with more details and animations. But these are just some of the new things. There is more!<br/>
Check out the update list:<br/>
<br/>
* Added Spud gun with 3rd and first person aim.<br/>
* Added mountable Spud gun with recoil.<br/>
* Added new cardboard block.<br/>
* Added spud gun destruction to cardboard and glass blocks.<br/>
* Added moddable scripting for interactive parts.<br/>
Modders can now make their own spud guns and thrusters for example. <br/>
* Made a complete re-work to the network code. <br/>
* Made better grass level of detail that shows grass in further distance.<br/>
* Added new sprint animation.<br/>
* Added new crouch animation. <br/>
* Added a lot of new tool animations.<br/>
* Made graphical update to all the tools. <br/>
* Added new particle effects.<br/>
* Smooth camera when crouching.<br/>
<br/>
**Here is how you access the test!**<br/>
![](http://i.imgur.com/3RWu68O.png)<br/>
<br/>
We are so excited to see how you will use the spud guns!<br/>
Let us know how this test works for you. <br/>
We listen to all constructive and friendly feedback!<br/>
<br/>
**For all the latest news, follow us on**<br/>
[Facebook](https://www.facebook.com/scrapmechanic/)<br/>
[Twitter](https://twitter.com/ScrapMechanic)
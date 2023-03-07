**Hi Mechanics!**


**(Updated September 26)**

[list]
*Scripted interactive parts no longer incorrectly show up as buttons when connected to a seat.
*Character impulses are applied per tick instead of every frame.
*Only explosion impulses are penalized when applied multiple times.
*Fixed "Server started with mismatching developer mode flags" issue when loading games.
*Fixed a networking related crash.
[/list]

**(Updated September 21)**

[list]
*Fixed an issue in the test that caused creations and players to fly away with a very high speed when building the lift into them.
*Tweaked (increased) the explosion impulse on players.
*Fixed a crash that was caused by an invalid terrain generation script or an invalid world builder terrain.
[/list]

Today we are doing a little improvement update test. 
We’ve been looking at all the creative ways you use the explosives and decided to do some further improvements. 
For example, blowing up larger creations with a lot of explosives should now run a bit smoother.
We also did some other fixes!


Check out the update list:
[list]
*Parts that are split of from creations inherit the velocities of the creation.
* Optimized explosions.
* The range that explosions remove metal has been reduced.
* Changed the particle effect that appears on the point where potatoes hit the gas canister.
* Fixed connect tool attaching to invisible gas canister connection points.
* Fixed a networking issue that caused crashes when playing as a client.
* Fixed a rendering issue that could cause a crash when some parts were destroyed by an explosion.
* Fixed an issue where the impulses were applied with half strength if the game was running on low fps.
* Multiple explosion impulses on the character have less effect.
* More explosion particles should be visible.
* Mods with no translation for the selected language will now default to English.
* Added more helpful error messages.
* Fix for lowest playable resolution (1024x768) defaulting to 1280x720.
* [Lua API updates](http://scrapmechanic.com/api/0.3.2/whats_new.html) (no breaking changes).
[/list]

**Here is how you access the test!**

![](http://i.imgur.com/3RWu68O.png)

We would love to hear how this test works for you!

**For all the latest news, follow us on**

[Facebook](https://www.facebook.com/scrapmechanic/)
[Twitter](https://twitter.com/ScrapMechanic)
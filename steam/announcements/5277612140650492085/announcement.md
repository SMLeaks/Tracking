![](http://i.imgur.com/vVArjGa.png)<br/>
<br/>
**Hi Mechanics!** <br/>
<br/>
We just uploaded a new beta with the upcoming Workshop update! <br/>
If you like to help us test it out you can do so now by following these steps<br/>
<br/>
![](http://i.imgur.com/1xOkRGv.png)<br/>
<br/>
Keep in mind that you can only play the beta in multiplayer with <br/>
other players if they are playing the beta as well. <br/>
<br/>
This is how the new lift feature works:<br/>
<br/>
<br/>
<br/>
**Save creation**<br/>
To save your creation, make sure it’s on the lift and then press E on the lift to access the menu. <br/>
<br/>
**Build saved creation**<br/>
To build saved or downloaded creations you need to have an empty lift and press E on the lift.<br/>
<br/>
------------------------------------------------------------------------------------------------------------------------<br/>
<br/>
**For the mod  creators only!**<br/>
<br/>
We have decided to makes things easier for you and the Mechanics. <br/>
<br/>
In preparation for official mod support we have decided to replace the id system for parts to uuids. This will ensure that ID's don’t clash when a player have more then one mod installed<br/>
at the same time.<br/>
[More info](https://en.wikipedia.org/wiki/Universally_unique_identifier)<br/>
<br/>
To make your mods continue to work in patch 0.1.29 make sure to add a randomly generated uuid to the part definition.<br/>
We recommend using [this generator](https://www.uuidgenerator.net/version4) to generate the UUID.<br/>
You have to keep your old id (or legacy_id) entry to make worlds upgrade correctly.<br/>
For example:<br/>
<br/>
{<br/>
 "legacy_id": 300,<br/>
 "uuid": "69e362c3-32aa-4cd1-adc0-dcfc47b92c0d",<br/>
 "mesh": "wheel.mesh",<br/>
 ...<br/>
}<br/>
<br/>
Basic materials also require a id/legacy_id which corresponds to the order in the file starting from 1.<br/>
For example:<br/>
<br/>
{<br/>
 "legacy_id": 1,<br/>
 "uuid": "a6c6ce30-dd47-4587-b475-085d55c6a3b4",<br/>
 "dif": "blk_concrete01_dif.tga",<br/>
 ...<br/>
}<br/>
<br/>
It’s a little headache to change your current mods. But it will make it possible for our lovely mechanics to have any number of mods installed at the same time.<br/>
<br/>
**For all the latest news, follow us on** <br/>
[Facebook](https://www.facebook.com/scrapmechanic/)<br/>
[Twitter](https://twitter.com/ScrapMechanic)
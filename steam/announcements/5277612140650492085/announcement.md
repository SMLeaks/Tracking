![](http://i.imgur.com/vVArjGa.png)

**Hi Mechanics!** 


We just uploaded a new beta with the upcoming Workshop update! 
If you like to help us test it out you can do so now by following these steps

![](http://i.imgur.com/1xOkRGv.png)

Keep in mind that you can only play the beta in multiplayer with 
other players if they are playing the beta as well. 

This is how the new lift feature works:



**Save creation**

To save your creation, make sure it’s on the lift and then press E on the lift to access the menu. 

**Build saved creation**

To build saved or downloaded creations you need to have an empty lift and press E on the lift.

------------------------------------------------------------------------------------------------------------------------

**For the mod  creators only!**


We have decided to makes things easier for you and the Mechanics. 

In preparation for official mod support we have decided to replace the id system for parts to uuids. This will ensure that ID's don’t clash when a player have more then one mod installed
at the same time.
[More info](https://en.wikipedia.org/wiki/Universally_unique_identifier)

To make your mods continue to work in patch 0.1.29 make sure to add a randomly generated uuid to the part definition.
We recommend using [this generator](https://www.uuidgenerator.net/version4) to generate the UUID.
You have to keep your old id (or legacy_id) entry to make worlds upgrade correctly.
For example:

{
 "legacy_id": 300,
 "uuid": "69e362c3-32aa-4cd1-adc0-dcfc47b92c0d",
 "mesh": "wheel.mesh",
 ...
}

Basic materials also require a id/legacy_id which corresponds to the order in the file starting from 1.
For example:

{
 "legacy_id": 1,
 "uuid": "a6c6ce30-dd47-4587-b475-085d55c6a3b4",
 "dif": "blk_concrete01_dif.tga",
 ...
}

It’s a little headache to change your current mods. But it will make it possible for our lovely mechanics to have any number of mods installed at the same time.

**For all the latest news, follow us on** 

[Facebook](https://www.facebook.com/scrapmechanic/)
[Twitter](https://twitter.com/ScrapMechanic)
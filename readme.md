AdTech JS SDKs, tracked and de-minified
===================================================

This project aims to provide a useful resource to developers who are working with exernal AdTech JS SDKs and would like to see what has changed recently.

My server runs a cronjob every 15 minutes that downloads the latest js files, commits any changes, and then pushes to github.

Links to change history for each file currently being tracked:
-----
[Facebook Main - https://connect.facebook.net/en_US/all.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/connect.facebook.net/en_US/all.pretty.js)

[Facebook Audience Network - https://connect.facebook.net/en_US/fbadnw55.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/connect.facebook.net/en_US/fbadnw55.pretty.js)

[Facebook Events - https://connect.facebook.net/en_US/fbevents.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/connect.facebook.net/en_US/fbevents.pretty.js)

[Criteo - https://static.criteo.net/js/ld/publishertag.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/static.criteo.net/js/ld/publishertag.pretty.js)

[Amazon TAM - https://c.amazon-adsystem.com/aax2/apstag.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/c.amazon-adsystem.com/aax2/apstag.pretty.js)

[Google Publisher Tools - https://www.googletagservices.com/tag/js/gpt.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/www.googletagservices.com/tag/js/gpt.pretty.js)

[Moat - https://z.moatads.com/px2/client.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/z.moatads.com/px2/client.pretty.js)

[PulsePoint - https://tag.contextweb.com/getjs.static.js](https://github.com/andyblackwell/adtech-js-monitoring/commits/master/data/tag.contextweb.com/getjs.static.pretty.js)

---

Setup
-----

To run your own copy (which I recommend), you'll need to fork the github project, test the shell script, and then set up cronjob like so:

    MAILTO="you@[your_site].com"
    # m h dom mon dow command
    0 5 * * * /home/nfriedly/facebook/connect-js/update_fb_github.sh > /dev/null

This setup sends an email if there were errors, but not if everything worked successfully.

Setup on Heroku
---------------

This script works well on a free Heroku instance. Put your github username and password (or [token (https://github.com/settings/tokens)) in environmental variables like so:

    heroku config:add GH_USER=<username>
    heroku config:add GH_PASS=<password>
    
Then add the [Heroku Scheduler](https://addons.heroku.com/scheduler) addon and create a task that runs `./heroku.sh` as often as you'd like.

---

Credits
-------

Forked from - https://github.com/nfriedly/facebook-js-sdk

Credit for the idea goes to Roger Hu - http://hustoknow.blogspot.com/

The shell scripts are copyright Nathan Friedly http://nfriedly.com and released under an MIT License.

The JS is copyright Facebook, Inc. and released under an Apache 2.0 License

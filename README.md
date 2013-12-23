Beaver Express
==============

An unofficial Google Chrome extension for the London School of Economics and Political Science (LSE) library. 
Beaver Express (codenamed B.EX) was developed as a proof-of-concept prototype to demonstrate one among many other possible uses of LSE's library API that is currently private. 
The library system's generativity will depend ultimately on the versatility of its API which is currently limited.

[Preview v2.0.0](http://imgur.com/CaNjbXj)

[Preview v2.1.0](http://imgur.com/2JhPnLA)


Installation
------------

### For Developers
1. Install [Bower](http://bower.io/).
2. Run `bower install` in the main B.EX directory _(containing bower.json)_.
3. Open up Chrome extensions and enable **Developer Mode**.
4. Select _Load unpacked extension..._ and browse to the B.EX directory.

### Everyone Else
1. Download the __.CRX file__ in the _dist_ directory.
2. Drag and drop the .CRX file onto Chrome extensions or open it with Chrome.
3. Install.


Features
--------

- List / renew loans.
- Search summon _~~(work in progress~~ not functional - JSON API is not available)_.


### Roadmap
- Notifications.
- Favourites.
- Auto Sign-In (via proxy or local storage and AJAX)?
- Full-fledged app: timetables, reading lists, etc.


Development
----------

Refer to _bower.json_ for a list of the extension's dependencies.

To modify and/or extend the B.EX extension you will need the following installed:
- Ruby for SASS and Foundation.
- Bower for front-end package management / components.
- Google Chrome, of course.


Boring Stuff
------------

### Acknowledgements
- [LSE](http://www.lse.ac.uk/)
- [AngularJS](http://angularjs.org/)
- [Foundation by ZURB](http://foundation.zurb.com/)

### Copyright
Copyright (C) 2013, Ian Lai.

### Licensing
Modified (a/k/a "New") BSD License. 
Refer to the LICENSE file for more information or click [here](http://www.opensource.org/licenses/bsd-3-clause).

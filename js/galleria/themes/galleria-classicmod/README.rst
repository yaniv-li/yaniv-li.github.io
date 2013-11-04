=========================
Galleria Classicmod theme
=========================

Created by `Jan-Philip Gehrcke <http://gehrcke.de>`_. View the demo at
http://gehrcke.de/galleria-classicmod.


Overview
========

The Galleria Classicmod theme is an enhanced version of the Classic theme
included in the free and open source releases of Galleria. Currently, Classicmod
has the following advantages over the default theme:

    - Includes fullscreen buttons & functionality.
    - Includes slideshow buttons & functionality.
    - The thumbnail bar behavior and positioning (especially in fullscreen mode)
      is largely improved.


Development and release notes
=============================

Although Classicmod is already stable in my tests, I will wait with the first
official release until I and you have collected more experience. Until then,
please use the development version from the
`Bitbucket repository <https://bitbucket.org/jgehrcke/galleria-classicmod/>`_, 
report issues, and let me know about your wishes. Thanks.


Usage
=====

Generally, you can and should follow the
`Galleria docs <http://galleria.io/docs/>`_.

The most stable and fastest method for loading a Galleria theme is via direct
inclusion of the theme's CSS and JavaScript files in the HTML source.

First, load the theme's CSS and the Galleria core::

    <link rel="stylesheet" href="galleria-classicmod/galleria.classicmod.css">
    <script src="galleria/galleria-1.2.9.min.js"></script>

Then load the theme's JavaScript::

    <script src="galleria-classicmod/galleria.classicmod.js"></script>

For a simple implementation example, you can also have a look at the source 
code of http://gehrcke.de/galleria-classicmod. There, image data is provided
to Galleria via JSON and keyboard gallery navigation is enabled.


Contact & Support
=================

If you observe any issues or have feature suggestions, please use the issue
tracker at
`Bitbucket <https://bitbucket.org/jgehrcke/galleria-classicmod/issues>`_ or
write an email to `me <jgehrcke@googlemail.com>`_.

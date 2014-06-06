[![NPM](https://nodei.co/npm/bytes-i18n.png?downloads=true&stars=true)](https://nodei.co/npm/bytes-i18n/)

**bytes-i18n**
===================

Work with bytes; format, convert.

**Usage**
=========

    var b = require('bytes-i18n');

    console.log(b(8566540000));
    // result -> 7.98gb

    // French example translation
    var i18nBytesConf = {
        "b":"o",
        "kb":"Ko",
        "mb":"Mo",
        "gb":"Go",
        "tb":"To"
    };

    console.log(b(8566540000,i18nBytesConf));
    // result -> 7.98Go

    console.log("Bytes : "+ b("8GB"));
    // result -> 8589934592

    console.log("Bytes : "+ b("8gb"));
    // result -> 8589934592


If you want to convert in bytes, you need to use default i18n in your code. **(not case sensitive)**

* kb / mb / gb /tb

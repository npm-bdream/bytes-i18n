var BytesI18n = function (size,i18n) {
    if (i18n) BytesI18n.i18n=i18n;
    else BytesI18n.i18n=BytesI18n.i18nBase;
    if ('number' == typeof size) return BytesI18n.convert(size);
    var lowersize = size.toLowerCase();
    var parts = lowersize.match(/^(\d+(?:\.\d+)?) *(kb|mb|gb|tb)$/)
        , n = parseFloat(parts[1])
        , type = parts[2];

    var map = {
        kb: 1 << 10
        , mb: 1 << 20
        , gb: 1 << 30
        , tb: ((1 << 30) * 1024)
    };
    return map[type] * n;
};

BytesI18n.i18n = {};

BytesI18n.i18nBase = {
    "b":"b",
    "kb":"kb",
    "mb":"mb",
    "gb":"gb",
    "tb":"tb"
};

BytesI18n.convert = function (b) {
    var tb = ((1 << 30) * 1024), gb = 1 << 30, mb = 1 << 20, kb = 1 << 10, abs = Math.abs(b);
    if (abs >= tb) return (Math.round(b / tb * 100) / 100) + BytesI18n.i18n.tb;
    if (abs >= gb) return (Math.round(b / gb * 100) / 100) + BytesI18n.i18n.gb;
    if (abs >= mb) return (Math.round(b / mb * 100) / 100) + BytesI18n.i18n.mb;
    if (abs >= kb) return (Math.round(b / kb * 100) / 100) + BytesI18n.i18n.kb;
    return b + BytesI18n.i18n.b;
};

module.exports = BytesI18n;
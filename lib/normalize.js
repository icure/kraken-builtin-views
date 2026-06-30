var rm = {"ᶏ":"a","ⱥ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ɓ":"b","ᵬ":"b","ᶀ":"b","ƀ":"b","ƃ":"b","ɵ":"o","ɕ":"c","ƈ":"c","ȼ":"c","ȡ":"d","ɗ":"d","ᶑ":"d","ᵭ":"d","ᶁ":"d","đ":"d","ɖ":"d","ƌ":"d","ı":"i","ȷ":"j","ɟ":"j","ʄ":"j","ⱸ":"e","ᶒ":"e","ɇ":"e","ꝫ":"et","ƒ":"f","ᵮ":"f","ᶂ":"f","ɠ":"g","ᶃ":"g","ǥ":"g","ⱨ":"h","ɦ":"h","ħ":"h","ƕ":"hv","ᶖ":"i","ɨ":"i","ꝺ":"d","ꝼ":"f","ᵹ":"g","ꞃ":"rq","ꞅ":"s","ꞇ":"t","ꝭ":"is","ʝ":"j","ɉ":"j","ⱪ":"k","ꝃ":"k","ƙ":"k","ᶄ":"k","ꝁ":"k","ꝅ":"k","ƚ":"l","ɬ":"l","ȴ":"l","ⱡ":"l","ꝉ":"l","ɫ":"l","ᶅ":"l","ɭ":"l","ł":"l","ẜ":"s","ẝ":"s","ß":"ss","ɱ":"m","ᵯ":"m","ᶆ":"m","ȵ":"n","ɲ":"n","ƞ":"n","ᵰ":"n","ᶇ":"n","ɳ":"n","ꝋ":"o","ꝍ":"o","ⱺ":"o","ø":"o","ǿ":"o","ƣ":"oi","ꝏ":"oo","ɛ":"e","ᶓ":"e","ɔ":"o","ᶗ":"o","ȣ":"ou","ꝓ":"p","ƥ":"p","ᵱ":"p","ᶈ":"p","ꝕ":"p","ᵽ":"p","ꝑ":"p","ꝙ":"q","ʠ":"q","ɋ":"q","ꝗ":"q","ɾ":"r","ᵳ":"r","ɼ":"r","ᵲ":"r","ᶉ":"r","ɍ":"r","ɽ":"r","ↄ":"c","ꜿ":"c","ɘ":"e","ɿ":"r","ʂ":"s","ᵴ":"s","ᶊ":"s","ȿ":"s","ɡ":"g","ᴑ":"o","ᴓ":"o","ᴝ":"u","ȶ":"t","ⱦ":"t","ƭ":"t","ᵵ":"t","ƫ":"t","ʈ":"t","ŧ":"t","ᵺ":"th","ɐ":"a","ᴂ":"ae","ǝ":"e","ᵷ":"g","ɥ":"h","ʮ":"h","ʯ":"h","ᴉ":"i","ʞ":"k","ꞁ":"l","ɯ":"m","ɰ":"m","ᴔ":"oe","ɹ":"r","ɻ":"r","ɺ":"r","ⱹ":"r","ʇ":"t","ʌ":"v","ʍ":"w","ʎ":"y","ꜩ":"tz","ᶙ":"u","ᵫ":"ue","ꝸ":"um","ⱴ":"v","ꝟ":"v","ʋ":"v","ᶌ":"v","ⱱ":"v","ꝡ":"vy","ⱳ":"w","ᶍ":"x","ƴ":"y","ỿ":"y","ɏ":"y","ʑ":"z","ⱬ":"z","ȥ":"z","ᵶ":"z","ᶎ":"z","ʐ":"z","ƶ":"z","ɀ":"z","œ":"oe"};
var do_normalize = function(name) {
    return name.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, function(a) { return rm[a] || ''; });
};

var sieve = function(strings, max_length, max_length_for_split, do_emit, do_else) {
    if (max_length != null && strings.any(it => it.size > max_length)) {
        do_emit(null)
    }
    if (max_length_for_split != null) {
        strings.filter(it => it.size > max_length_for_split && (max_length == null || it.size <= max_length)).forEach(it => {
            do_emit(do_normalize(it.toLowerCase()))
        })
    }
    var remaining = strings.filter(it => max_length_for_split == null || it.size <= max_length_for_split)
    if (remaining.length > 0) {
        do_else(remaining.join(''))
    }
}

var do_normalize_and_split = function(strings, max_length, max_length_for_split, min_emit_length, do_emit) {
    sieve(
        strings,
        max_length,
        max_length_for_split,
        (text) => {
            text.trim().split(/[ |/'`]+/).filter((word) => word.length >= min_emit_length).forEach(function(word) {
                var normalized = do_normalize(word.toLowerCase())
                if (normalized.length > 0) {
                    do_emit(normalized)
                }
            });
        },
        do_emit
    )
}

var do_normalize_and_substring = function(text, max_length, max_length_for_substring, do_emit) {
    sieve(
        strings,
        max_length,
        max_length_for_split,
        do_emit,
        (text) => {
            var r = do_normalize(text.toLowerCase())
            for (var i = 0; i <= r.length - 3; i++) {
                do_emit(r.substr(i, r.length - i))
            }
        }
    )
}

exports.normalize = do_normalize
exports.normalize_and_split = do_normalize_and_split
exports.normalize_and_substring = do_normalize_and_substring
$(function() {
	compareVersions = function(v1, v2) {
        var v1parts = v1.split('.');
        var v2parts = v2.split('.');
        
        for (var i = 0; i < v1parts.length; ++i) {
            if (v2parts.length == i) {
                return v1;
            }
            if (v1parts[i] == v2parts[i]) {
                continue;
            } else if (v1parts[i] > v2parts[i]) {
                return v1;
            } else {
                return v2;
            }
        }

        if (v1parts.length != v2parts.length) {
            return v2;
        }
        return v1;
    }

    getNewestTag = function(response) {
        var tags = response['data'];
        var newestTag = '0.0.0';
        var urls = {};
        for (i in tags) {
            var tag = tags[i];
            urls[tag['name']] = tag['zipball_url'];
            newestTag = compareVersions(newestTag, tag['name']);
        }
        
        $('.newest-tag').text(newestTag);
        $('.newest-tag-href').attr('href', urls[newestTag]);
        $('.newest-tag-href-replacement').each(function(i, el) {
            var a = $(el);
            a.attr('href', a.attr('href').replace('{newest-tag}', newestTag));
        });
    }

    $('body').append('<script src="https://api.github.com/repos/flourishlib/flourish-classes/tags?callback=getNewestTag"></script>');
});
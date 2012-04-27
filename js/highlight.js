$(function() {
	$('pre.php').each(function(i, el) {
		var code = $(el).text();
		if (code.match(/^<?(php| |=)/)) {
			CodeMirror.runMode(code, "application/x-httpd-php", el);
		} else {
			CodeMirror.runMode(code, "text/x-php", el);
		} 
		$(el).addClass('cm-s-default');
	});

	$('pre.sql').each(function(i, el) {
		var code = $(el).text();
		CodeMirror.runMode(code, "text/x-mysql", el);
		$(el).addClass('cm-s-default');
	});

	$('pre.css').each(function(i, el) {
		var code = $(el).text();
		CodeMirror.runMode(code, "text/css", el);
		$(el).addClass('cm-s-default');
	});

	$('pre.js').each(function(i, el) {
		var code = $(el).text();
		CodeMirror.runMode(code, "text/javascript", el);
		$(el).addClass('cm-s-default');
	});

	$('pre.html').each(function(i, el) {
		var code = $(el).text();
		CodeMirror.runMode(code, "text/html", el);
		$(el).addClass('cm-s-default');
	});
});
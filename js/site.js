$(function() {
	$('h1[id],h2[id],h3[id],h4[id],dt[id]').click(function() {
		self.location.href = '#' + $(this).attr('id');
	}).css('cursor', 'pointer');
});
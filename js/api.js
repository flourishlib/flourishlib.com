$(function() {
	var changes = $('div.changes');
	changes.hide();
	var showHide = $('<a href="#">Show changelog</a>');
	showHide.click(function() {
		if (changes.is(':visible')) {
			changes.hide();
			showHide.text('Show changelog');
		} else {
			changes.show();
			showHide.text('Hide changelog');
		}
		return false;
	});
	showHide.insertBefore(changes);
});
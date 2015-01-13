$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, "> spoiler \n>## \n> text kamu disini");
				controls.updateTextareaSelection(textarea, selectionStart + 17, selectionStart + 34);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '> spoiler \n>## \n>','\n>');
				controls.updateTextareaSelection(textarea, selectionStart + 17, selectionEnd + 17);
			}
		});
	});
});
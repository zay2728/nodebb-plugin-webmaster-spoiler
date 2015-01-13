$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, ">## \n> text kamu disini");
				controls.updateTextareaSelection(textarea, selectionStart + 3, selectionStart + 12);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '>## \n>','\n>');
				controls.updateTextareaSelection(textarea, selectionStart + 3, selectionEnd + 3);
			}
		});
	});
});
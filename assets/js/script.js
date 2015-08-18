window.onload = function() {
	marked.setOptions({
		highlight: function (code) {
			return hljs.highlightAuto(code).value;
		},
		gfm: true,
		tables: true,
		breaks: true,
		pedantic: false,
		sanitize: false,
		smartLists: false,
		smartypants: true,
	});



	var pad = ace.edit("pad");
	pad.setTheme("ace/theme/solarized_dark");
	pad.setReadOnly(true);

	// var MarkdownMode = ace.require("ace/mode/markdown").Mode;
	// var session = editor.getSession();
	// session.setMode(new MarkdownMode());
	// session.setTabSize(4);
	// session.setUseSoftTabs(false);

	var markdownArea = document.getElementById('markdown');





	var previousMarkdownValue;

	// convert text area to markdown html
	var convertTextAreaToMarkdown = function(){
		var markdownText = pad.getValue();
		previousMarkdownValue = markdownText;

		html = marked(markdownText);
		markdownArea.innerHTML = html;

		$("table").addClass("table table-striped")
	};

	var didChangeOccur = function(){
		if(previousMarkdownValue != pad.value){
			return true;
		}
		return false;
	};

	// check every second if the text area has changed
	setInterval(function(){
		if(didChangeOccur()){
			convertTextAreaToMarkdown();
		}
	}, 1000);

	// convert textarea on input change
	// pad.addEventListener('input', convertTextAreaToMarkdown);
	// pad.on('change', convertTextAreaToMarkdown);


	// ignore if on home page
	var doc = null;
	if(document.location.pathname.length > 1){
		// implement share js
		var documentName = document.location.pathname.substring(1);
		sharejs.open(documentName, 'text', function(error, newDoc) {

			if (doc != null) {
				doc.close();
				doc.detach_ace();
			}

			doc = newDoc;

			doc.attach_ace(pad);
			pad.setReadOnly(false);


			convertTextAreaToMarkdown();
		});
	}

	// convert on page load
	convertTextAreaToMarkdown();

};

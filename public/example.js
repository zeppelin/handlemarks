var Handlemarks = require('handlemarks')['default'];
var handlemarks = new Handlemarks();

handlemarks.registerHelper('hbs:video', function() {
  return new Handlebars.SafeString(
    '<img src="http://img.youtube.com/vi/JzcYyzCZdiM/default.jpg">'
  );
});

handlemarks.registerHelper('md:heading', function(text, level) {
  return '<h'+level+' style="color:red">'+text+'</h'+level+'>';
});



///////////////////////////////////////////////////////////////////////

function renderResult(value) {
  document.getElementById('preview').innerHTML = handlemarks.compile(value);
}

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true,
  sanitize: true,
  smartLists: true,
  smartypants: true
});

var editor = ace.edit("editor");

editor.setOptions({
  showLineNumbers: false,
  wrap: true
});

editor.setTheme("ace/theme/solarized_light");
editor.getSession().setMode(new MarkdownMode());
editor.on('change', function(o, editor) {
  renderResult(editor.getValue());
});

renderResult(editor.getValue());

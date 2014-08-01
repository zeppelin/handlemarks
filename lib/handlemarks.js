import Compiler from './handlebars/handlemarks-compiler';

export default class Handlemarks {

  constructor() {
    this.mdRenderer = new marked.Renderer();
  }

  registerHelper(name, fn) {
    var nameParts = name.split(':');
    var kind = nameParts[0];
    var helperName = nameParts[1];

    if (kind === 'hbs') {
      Handlebars.registerHelper(helperName, fn);
    } else {
      this.mdRenderer[helperName] = fn;
    }
  }

  compile(string) {
    var ast = Handlebars.parse(string);
    var compiler = new Compiler({
      renderer: this.mdRenderer
    });
    var result = compiler.accept(ast);

    return Handlebars.compile(result)({});
  }
}

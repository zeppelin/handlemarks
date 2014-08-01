import CoreCompiler from './core-compiler';

export default class HandlemarksCompiler extends CoreCompiler {

  constructor(options = {}) {
    this.renderer = options.renderer || new marked.Renderer();
  }

  content(content) {
    var string = content.string;

    // It's best to leave whitespace characters alone: they have meaning in
    // Handlebars' context
    if (string.match(/[^\s]/g)) {
      content.string = marked(string, {
        renderer: this.renderer
      });
    }

    return content;
  }
};

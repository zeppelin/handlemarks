import Visitor from './visitor';

export default class CoreCompiler extends Visitor {

  program(program) {
    program.statements = program.statements.map((statement)=>
      this.accept(statement)
    );

    return program;
  }

  block(block) {
    if (block.program) {
      block.program = this.accept(block.program);
    }

    if (block.inverse) {
      block.inverse = this.accept(block.inverse);
    }

    return block;
  }
};

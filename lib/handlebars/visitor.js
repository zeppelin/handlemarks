export default class Visitor {

  accept(object) {
    var handler = this[object.type];

    if (handler) {
      return handler.call(this, object);
    }

    return object;
  }
};

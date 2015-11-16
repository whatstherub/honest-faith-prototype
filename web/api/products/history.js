function *r(next) {
  console.log(this.request);
  console.log(this.params);

  this.body = {
    id: this.params.id,
    test: false,
    test2: false
  };

  yield next;
};

module.exports = r;


module.exports = function(method, noError) {
  return function() {
    var args = Array.from(arguments);
    return new Promise((resolve, reject) => {
      method.apply(this, args.concat((err, res) => {
        if (noError && err) resolve(err);
        else if (err) reject(err);
        else resolve(res);
      }));
    });
  };
};

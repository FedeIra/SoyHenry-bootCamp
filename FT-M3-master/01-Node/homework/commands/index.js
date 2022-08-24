var fs = require("fs");

module.exports = {
  pwd: function (args, print) {
    print(process.cwd());
  },
  date: function (args, print) {
    print(Date());
  },
  ls: function (args, print) {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },
  echo: function (args, print) {
    print(args.join(""));
  },
};

//comando curl. curl hará un pedido GET de HTTP a un URL dado, e imprimirá el body del response del HTTP.
module.exports.curl = function (args, print) {
  var http = require("http");
  var url = args[0];
  http
    .get(url, function (response) {
      response.setEncoding("utf8");
      response
        .on("data", function (data) {
          print(data);
        })
        .on("end", function () {
          process.stdout.write("prompt > ");
        });
    })
    .on("error", function (err) {
      print(err.message);
    })
    .end();
};

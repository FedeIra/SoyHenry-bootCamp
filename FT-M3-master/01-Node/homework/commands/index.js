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

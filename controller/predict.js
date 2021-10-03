var { PythonShell } = require("python-shell");

exports.predict = async (req, res) => {
  console.log(req.body.inputt);
  try {
    var options = {
      pythonOptions: ["-u"],
      args: req.body.inputt,
    };
    console.log("ok");

    PythonShell.run(
      "E:/Practice/controller/prediction model/predict.py",
      options,
      function (err, results) {
        if (err) throw err;

        console.log(results[0]);
        res.json({ price: results[0], success: true });
      }
    );
  } catch (err) {
    res.json({ message: err.message, success: false });
  }
};

const Path = require('path-parser');
const { URL } = require('url');
const Gpio = require('onoff').Gpio;
const PIN = new Gpio(18, 'out');

module.exports = app => {
  app.get('/api/pins', async (req, res) => {
    try {
      var pinStatus = PIN.readSync();
      res.send(pinStatus.toString());
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/pins/:pin/:setting', async (req, res) => {
    var PIN = new Gpio(18, 'out');
    try {
      if (req.params.setting == 'false') {
        var pinValue = 0;
      } else {
        var pinValue = 1;
      }
      PIN.writeSync(pinValue);
      const PIN_STATUS = PIN.readSync().toString();

      res.send(PIN_STATUS);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

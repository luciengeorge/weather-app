const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

geocode(address, (error, { latitude, longitude, location }) => {
  if (address) {
    if (error) {
      return console.log('Error', error);
    }
    forecast(latitude, longitude, (error, forecast) => {
      if (error) {
        return console.log('Error', error);
      }
      console.log(location);
      console.log(forecast);
    });
  } else {
    console.log('please provide an address');
  }
});


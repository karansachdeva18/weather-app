# Weather App

[**DEMO**](https://weather-app-karansachdeva18.netlify.app/)

**Weather App** is a simple app developed in Javascript using React, HTML and SASS. The app allows you to see the weather from your current location or another location using **Google Maps Api** and **OpenWeather Api**. Using **One Call API** from **OpenWeather Api** to displays the current weather, 24 hours and 8 days forecast. You can change the unit system from metric to imperial.

#### App Layout
<img src="https://github.com/karansachdeva18/weather-app/screenshots/App_Views.png" Width="1620" />

#### PageSpeed Insights Mobile performance
<img src="https://github.com/karansachdeva18/weather-app/screenshots/Mobile_Performance.png" Width="1620" />

#### PageSpeed Insights Desktop performance
<img src="https://github.com/karansachdeva18/weather-app/screenshots/Desktop_Perfomance.png" Width="1620" />


## Libraries Used

- [React](https://github.com/facebook/react)
- [Axios](https://github.com/axios/axios) (API Calls)
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) (Icons)

## Setup

Create a file called **.env** in the root of the weather-app project. Add the following code in the file.

```
REACT_APP_OPEN_WEATHER_API_KEY = "YOUR_OPENWEATHERAPI_KEY"
REACT_APP_GEOCODE_API_KEY = "YOUR_GOOGLEMAPSAPI_KEY"
```

The app is using **One Call API** from OpenWeather API. To start you need an account and OpenWeather API Key. You can signup and get the key from [here](https://openweathermap.org/api).

The app is using **Geocoding** and **Reverse Geocoding** from Google Maps API. To start you need a **google account** and **Google Maps API Key**. You can get the key from [here](https://developers.google.com/maps/documentation/geocoding/overview).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

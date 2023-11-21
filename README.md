# SkyCast - Weather App

SkyCast is a weather application built with React that allows users to check the current weather and 5-day forecast for their location or other selected cities. It is a project that was made for the RtC bootcamp (https://www.rockthecode.es/).

## Features

- View the current weather for your location.
- Check a 5-day weather forecast.
- Select other cities to view their current weather and forecast.
- Responsive design for a seamless experience on different devices.

## Demo

[View Demo](https://prismatic-lily-9b9640.netlify.app/)

## Project Structure

- **`src/`**: Contains the source code for the React application.
  - **`components/`**: Reusable React components.
    - **`CitySelection/`**: Component for selecting a city and managing geolocation based on the chosen city.
    - **`CurrentWeatherViewer/`**: Component for displaying current weather details.
    - **`ForecastViewer/`**: Component for displaying 5-day weather forecast.
    - **`GetCurrentWeather/`**: Component for fetching and displaying current weather data.
    - **`GetForecast/`**: Component for fetching and displaying weather forecast data.
    - **`MainWeatherInfo/`**: Component for displaying main weather information.
    - **`UserLocation/`**: Component for handling user geolocation.
  - **`context/`**: React context providers for state management.
    - **`LocationContext.jsx`**: Context provider for managing geolocation.
    - **`WeatherContext.jsx`**: Context provider for managing weather data.
  - **`DATA/`**: Data files used in the app.
    - **`citiesLocation.js`**: File containing latitude and longitude of preselected cities.
  - **`page/`**: Components representing different pages of the application.
    - **`MyLocation/`**: Page component for the user's current location.
    - **`OtherCities/`**: Page component for other cities' weather.
  - **`App.jsx`**: Main application component.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React.js.
- **Vite.js**: A fast, opinionated web dev build tool that serves your code via native ES Module imports during development.
- **Axios**: A promise-based HTTP client for the browser and Node.js.

## License

This project is licensed under the MIT Licence - see the LICENCE.txt file for details.

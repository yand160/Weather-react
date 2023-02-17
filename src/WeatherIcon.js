import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_SKY_DAY",
    "01n": "CLEAR_SKY_NIGHT",
    "02d": "FEW_CLOUDS_DAY",
    "02n": "FEW_CLOUDS_NIGHT",
    "03d": "SCATTERED_CLOUDS_DAY",
    "03n": "SCATTERED_CLOUDS_NIGHT",
    "04d": "BROKEN_CLOUDS_DAY",
    "04n": "BROKEN_CLOUDS_NIGHT",
    "09d": "SHOWER_RAIN_DAY",
    "09n": "SHOWER_RAIN_NIGHT",
    "10d": "RAIN_DAY",
    "10n": "RAIN_NIGHT",
    "11d": "THUNDERSTORM_DAY",
    "11n": "THUNDERSTORM_NIGHT",
    "13d": "SNOW_DAY",
    "13n": "SNOW_NIGHT",
    "50d": "MIST_DAY",
    "50n": "MIST_NIGHT",
  };

  return (
    <WeatherIcon
      icon={codeMapping[props.code]}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}

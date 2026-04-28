import { DisplayDevice } from "./displayDevice.js";
import { MobileDevice } from "./mobileDevice.js";
import { WeatherStation } from "./weatherStation.js";

const station = new WeatherStation();

const displayDevice = new DisplayDevice();
const mobileDevice = new MobileDevice();


station.attach(displayDevice);
station.attach(mobileDevice);

station.setTemperature(25);

station.detach(displayDevice);

station.setTemperature(30);

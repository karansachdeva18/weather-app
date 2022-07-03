import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloud, faCloudBolt, faCloudShowersHeavy, faCloudSunRain, faSmog, faSnowflake, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faCloud, faCloudBolt, faCloudShowersHeavy, faCloudSunRain, faSmog, faSnowflake, faSun);

const ICONS_COLLECTION = {
    Thunderstorm: "cloud-bolt",
    Drizzle:"cloud-sun-rain",
    Rain:"cloud-showers-heavy",
    Snow:"snowflake",
    Mist:"smog",
    Smoke:"smog",
    Haze:"smog",
    Dust:"smog",
    Fog:"smog",
    Sand:"smog",
    Ash:"smog",
    Squall:"smog",
    Tornado:"smog",
    Clear:"sun",
    Clouds:"cloud"
}

export const ICONS = (icon) => ICONS_COLLECTION[icon]
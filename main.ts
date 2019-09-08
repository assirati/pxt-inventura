//% color="#22AA8D" icon="\uf02d"
namespace inventura {

    /**
    * Calculates heat index (in °C) based on temperature (in °C) and air humidity.
    * @param tempC temperature (in °C), eg: 0
    * @param relHum air humidity (in %), eg: 0
    */
    //% block="heat index (°C) Temp. = $tempC Humid. = $relHum"
    //% relHum.min=0 relHum.max= 100 relHum.defl=0
    export function heatIndexC(tempC: number, relHum: number): number {
        let tempF, heatIndex;
        tempF = ((tempC * 1.8) + 32);
        if (tempF <= 32) {
            heatIndex = tempF;
        }
        else {
            heatIndex = 0.5 * (tempF + 61.0 + ((tempF - 68.0) * 1.2) + (relHum * 0.094));
            if (heatIndex > 79) {
                heatIndex = -42.379 + 2.04901523 * tempF + 10.14333127 * relHum - 0.22475541 * tempF * relHum - 0.00683783 * tempF * tempF - 0.05481717 * relHum * relHum + 0.00122874 * tempF * tempF * relHum + 0.00085282 * tempF * relHum * relHum - 0.00000199 * tempF * tempF * relHum * relHum;
                if ((relHum <= 13) && ((tempF >= 80) && tempF <= 112)) {
                    heatIndex -= ((13 - relHum) / 4) * Math.sqrt((17 - Math.abs(tempF - 95.)) / 17);
                }
                if ((relHum > 85) && ((tempF >= 80) && tempF <= 87)) {
                    heatIndex += ((relHum - 85) / 10) * ((87 - tempF) / 5);
                }
            }
        }
        heatIndex = (heatIndex - 32) / 1.8;
        return Math.round(heatIndex);
    }

    /**
    * Calculates heat index (in °F) based on temperature (in °F) and air humidity.
    * @param tempF temperature (in °F), eg: 0
    * @param relHum air humidity (in %), eg: 0
    */
    //% block="heat index (°F) Temp. = $tempF Humid. = $relHum"
    //% relHum.min=0 relHum.max= 100 relHum.defl=0
    export function heatIndexF(tempF: number, relHum: number): number {
        let HIC, heatIndex;
        if (tempF <= 32) {
            heatIndex = tempF;
        }
        else {
            heatIndex = 0.5 * (tempF + 61.0 + ((tempF - 68.0) * 1.2) + (relHum * 0.094));
            if (heatIndex > 79) {
                heatIndex = -42.379 + 2.04901523 * tempF + 10.14333127 * relHum - 0.22475541 * tempF * relHum - 0.00683783 * tempF * tempF - 0.05481717 * relHum * relHum + 0.00122874 * tempF * tempF * relHum + 0.00085282 * tempF * relHum * relHum - 0.00000199 * tempF * tempF * relHum * relHum;
                if ((relHum <= 13) && ((tempF >= 80) && tempF <= 112)) {
                    heatIndex -= ((13 - relHum) / 4) * Math.sqrt((17 - Math.abs(tempF - 95.)) / 17);
                }
                if ((relHum > 85) && ((tempF >= 80) && tempF <= 87)) {
                    heatIndex += ((relHum - 85) / 10) * ((87 - tempF) / 5);
                }
            }
        }
        return Math.round(heatIndex);
    }
}
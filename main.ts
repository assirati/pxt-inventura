//% color="#22AA8D"
namespace inventura {

    /**
    * Calculates heat index (in °C) based on temperature (in °C) and air humidity.
    * @param tempC temperature (in °C), eg: 0
    * @param relUm air humidity (in %), eg: 0
    */
    //% block="Indice de Calor (°C) Temp. = $tempC Umid. = $relUm"
    //% relUm.min=0 relUm.max= 100 relUm.defl=0
    export function heatIndexC(tempC: number, relUm: number): number {
        let tempF, heatIndex;
        tempF = ((tempC * 1.8) + 32);
        if (tempF <= 32) {
            heatIndex = tempF;
        }
        else {
            heatIndex = 0.5 * (tempF + 61.0 + ((tempF - 68.0) * 1.2) + (relUm * 0.094));
            if (heatIndex > 79) {
                heatIndex = -42.379 + 2.04901523 * tempF + 10.14333127 * relUm - 0.22475541 * tempF * relUm - 0.00683783 * tempF * tempF - 0.05481717 * relUm * relUm + 0.00122874 * tempF * tempF * relUm + 0.00085282 * tempF * relUm * relUm - 0.00000199 * tempF * tempF * relUm * relUm;
                if ((relUm <= 13) && ((tempF >= 80) && tempF <= 112)) {
                    heatIndex -= ((13 - relUm) / 4) * Math.sqrt((17 - Math.abs(tempF - 95.)) / 17);
                }
                if ((relUm > 85) && ((tempF >= 80) && tempF <= 87)) {
                    heatIndex += ((relUm - 85) / 10) * ((87 - tempF) / 5);
                }
            }
        }
        heatIndex = (heatIndex - 32) / 1.8;
        return heatIndex;
    }

    /**
    * Calculates heat index (in °F) based on temperature (in °F) and air humidity.
    * @param tempF temperature (in °F), eg: 0
    * @param relUm air humidity (in %), eg: 0
    */
    //% block="Indice de Calor (°F) Temp. = $tempF Umid. = $relUm"
    //% relUm.min=0 relUm.max= 100 relUm.defl=0
    export function heatIndexF(tempF: number, relUm: number): number {
        let HIC, heatIndex;
        if (tempF <= 32) {
            heatIndex = tempF;
        }
        else {
            heatIndex = 0.5 * (tempF + 61.0 + ((tempF - 68.0) * 1.2) + (relUm * 0.094));
            if (heatIndex > 79) {
                heatIndex = -42.379 + 2.04901523 * tempF + 10.14333127 * relUm - 0.22475541 * tempF * relUm - 0.00683783 * tempF * tempF - 0.05481717 * relUm * relUm + 0.00122874 * tempF * tempF * relUm + 0.00085282 * tempF * relUm * relUm - 0.00000199 * tempF * tempF * relUm * relUm;
                if ((relUm <= 13) && ((tempF >= 80) && tempF <= 112)) {
                    heatIndex -= ((13 - relUm) / 4) * Math.sqrt((17 - Math.abs(tempF - 95.)) / 17);
                }
                if ((relUm > 85) && ((tempF >= 80) && tempF <= 87)) {
                    heatIndex += ((relUm - 85) / 10) * ((87 - tempF) / 5);
                }
            }
        }
        return heatIndex;
    }
}
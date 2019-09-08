# BBC micro:bit MakeCode editor extension with functions for Inventura textbook activities

This extension contains functions to help students perform the projects and activities proposed in the [Inventura](https://www.positivoteceduc.com.br/inventura/) books (eg: a function to calculate heat index, given air temperature and humidity).

To import this extension, go to Advanced -> +Extension and enter "Inventura" in the search box, or copy/paste [https://github.com/assirati/pxt-inventura/](https://github.com/assirati/pxt-inventura/) into the search box. Press enter and click the extension.

![img_0001](https://user-images.githubusercontent.com/2685426/64482296-8fa18300-d1c5-11e9-92b4-a3868838c15b.jpg)

[Inventura](https://www.positivoteceduc.com.br/inventura/) is an educational solution designed to turn children into inventors, making programming learning an easy, immersive and stimulating experience. It has different volumes for elementary students.

## Blocks

This extension contains functions to help students perform the projects and activities proposed in the [Inventura](https://www.positivoteceduc.com.br/inventura/). 

The Heat Index blocks calculates the [heat index](https://en.wikipedia.org/wiki/Heat_index) based on temperature and air humidity.

![snip_20190907232009](https://user-images.githubusercontent.com/2685426/64482321-240be580-d1c6-11e9-84a7-28e21f005112.png)

The first block receives air humidity (given in %) and temperature in celsius (°C), returning the heat index also in celsius (°C). The second block uses the temperature in fareinheigh (°F) and calculates the index also in fareinheigh (°F).

For both blocks, the air humidity must be between 0% and 100%.

![microbit-screenshot (2)](https://user-images.githubusercontent.com/2685426/64482463-d0e76200-d1c8-11e9-9ba3-2257c3e8f6fa.png)

```blocks
basic.forever(function () {
    basic.showNumber(inventura.heatIndexC(32, 70))
    basic.showNumber(inventura.heatIndexF(90, 70))
})
```
## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

exports.celsiusFahrenheit = (value) => {
    return (value * 9 / 5) + 32;
};

exports.fahrenheitCelsius = (value) => {
    return (value - 32) * 5 / 9;
};
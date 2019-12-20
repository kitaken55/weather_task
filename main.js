const url = "https://api.openweathermap.org/data/2.5/weather";
const query_parameters = {
    APPID: "4b5774e9f3d2a07b84f0f2f88e486224",
    q: "London"
}
const test = new URLSearchParams(query_parameters);
function test_click() {
    fetch(`${url}?${test}`)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json["weather"][0]["description"]);
    });
};
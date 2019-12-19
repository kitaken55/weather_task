(function () {
    var httpRequest;
    document.querySelector("#ajaxButton").addEventListener('click', makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('中断 :( XMLHTTP インスタンスを生成できませんでした');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;

        httpRequest.open('GET', 'https://api.openweathermap.org/data/2.5/weather?APPID=4b5774e9f3d2a07b84f0f2f88e486224&q=London');
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                let json = httpRequest.responseText;
                json = JSON.parse(json);
                console.log(json["weather"][0]["description"]);
            } else {
                alert('リクエストに問題が発生しました');
            }
        }
    }
})();
'use strict';
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var uploadedDataURL = "datamap.json";
$.getJSON(uploadedDataURL, function (weiboData) {
    myChart.hideLoading();

    weiboData = weiboData.map(function (serieData, idx) {
        var px = serieData[0] / 1000;
        var py = serieData[1] / 1000;
        var res = [[px, py]];

        for (var i = 2; i < serieData.length; i += 2) {
            var dx = serieData[i] / 1000;
            var dy = serieData[i + 1] / 1000;
            var x = px + dx;
            var y = py + dy;
            res.push([x, y, 1]);

            px = x;
            py = y;
        }
        return res;
    });
    var bgc = "transparent";
    var data1 = weiboData[0];
    var data2 = weiboData[1];
    var data3 = weiboData[2];
    window.colorMap(data1, data2, data3, bgc);
});
(function ($) {
    'use strict';

    var colorMap = function (data1,data2,data3,bgc) {
        var option = {};
        myChart.setOption(
            (option = {
                backgroundColor: bgc,
                title: {
                    text: "",
                    subtext: "",
                    sublink: "",
                    left: "center",
                    top: "top",
                    textStyle: {
                        color: "#fff"
                    }
                },
                // legend: {
                //   left: "left",
                //   data: ["强", "中", "弱"],
                //   textStyle: {
                //     color: "#ccc"
                //   }
                // },
                geo: {
                    name: "强",
                    type: "scatter",
                    map: "china",
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#1F4060",
                            borderColor: "#111"
                        },
                        emphasis: {
                            areaColor: "#1F4060"
                        }
                    }
                },
                series: [
                    {
                        name: "弱",
                        type: "scatter",
                        coordinateSystem: "geo",
                        symbolSize: 1,
                        large: true,
                        itemStyle: {
                            normal: {
                                shadowBlur: 2,
                                shadowColor: "rgba(37, 140, 249, 0.8)",
                                color: "rgba(37, 140, 249, 0.8)"
                            }
                        },
                        data: data1
                    },
                    {
                        name: "中",
                        type: "scatter",
                        coordinateSystem: "geo",
                        symbolSize: 1,
                        large: true,
                        itemStyle: {
                            normal: {
                                shadowBlur: 2,
                                shadowColor: "rgba(14, 241, 242, 0.8)",
                                color: "rgba(14, 241, 242, 0.8)"
                            }
                        },
                        data: data2
                    },
                    {
                        name: "强",
                        type: "scatter",
                        coordinateSystem: "geo",
                        symbolSize: 1,
                        large: true,
                        itemStyle: {
                            normal: {
                                shadowBlur: 2,
                                shadowColor: "rgba(255, 255, 255, 0.8)",
                                color: "rgba(255, 255, 255, 0.8)"
                            }
                        },
                        data: data3
                    }
                ]
            })
        );
    }

    window.colorMap = colorMap;
})(jQuery);
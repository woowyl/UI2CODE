(function() {
    // 是否
    var myChart = echarts.init(document.getElementById('scoreRatio'));

    var xAxisData = [];
    // 中国电影0-10
    var data1 = window.CHINA_SCORE;
    var data2 = window.FOREIGN_SCORE;
    for (var i = 0; i <= 100; i++) {
        xAxisData.push(i/10);
    }

    option = {
        title: {
            text: '国内外电影评分对比'
        },
        legend: {
            data: ['中国', '国外']
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: xAxisData,
            splitLine: {
                show: false
            }
        },
        yAxis: {
        },
        series: [{
            name: '中国',
            type: 'bar',
            data: data1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: '国外',
            type: 'bar',
            data: data2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };    
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
})()


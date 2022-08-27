(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('scoreTop'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '评分TOP20'
        },
        tooltip: {},
        toolbox: {
            // y: 'bottom',
            feature: {
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        grid: {
            left: "30%"
        },
        legend: {
            data:['评分']
        },
        xAxis: {
            type: 'value',
            min: 8.5
        },
        yAxis: {
            data: window.SCORE_TOP_NAMES,
            inverse: true
        },
        series: [{
            name: '评分',
            type: 'bar',
            data: window.SCORE_TOP_VALUES,
            label: {
                show: true,
                position: 'right'
            },
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();
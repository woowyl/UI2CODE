(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('commentNumTop'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '评论人数Top20'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
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
            data:['评论人数']
        },
        xAxis: [
            {
                type: 'value',
                name: '评论人数',
                min: 30000
            },
            {
                type: 'value',
                name: '分数',
                min: 1
            },
        ],
        yAxis: {
            data: window.COMMENT_TOP_NAMES,
            inverse: true,
        },
        series: [{
            name: '评论人数',
            type: 'bar',
            data: window.COMMENT_TOP_VALUES,
            label: {
                show: true,
                position: 'right'
            },
        },{
            name: '分数',
            type: 'line',
            data: window.COMMENT_TOP_SCORE,
            xAxisIndex: 1,
            label: {
                show: true,
                position: 'right'
            },
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})();
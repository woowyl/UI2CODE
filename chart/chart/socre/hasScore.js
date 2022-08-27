
(function() {
    // 是否
    var myChart = echarts.init(document.getElementById('isScored'));

    option = {
        title: {
            text: '是否有评分',
            subtext: 'douban',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['有数据', '无数据']
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: [
                    {value: window.SOCORED, name: '有数据'},
                    {value: window.NOSCORED, name: '无数据'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    

     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
})()


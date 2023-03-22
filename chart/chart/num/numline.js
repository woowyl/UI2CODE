(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('numInsert'));

    // 指定图表的配置项和数据
    option = {
        title: {
            text: '生成行数与时间'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                'image2code行数',
                'imgcook行数',
                'UIED行数',
                'image2code时间',
                'imgcook时间',
                'UIED时间',
                
            ]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: [
            {
                type: 'value',
                name: "行数",
                min: 0,
                max: 500,
            },
            {
                type: 'value',
                name: "时间",
                axisLabel: {
                    formatter: '{value} s'
                },
                min: -20,
                max: 20,
                interval: 4,
            },
        ],
        series: [
            {
                name: 'image2code行数',
                type: 'bar',
                barWidth: '20',
                data: window.IMAGE2CODE_LINE
            },
            {
                name: 'imgcook行数',
                type: 'bar',
                barWidth: '20',
                data: window.IMGCOOK_LINE
            },
            {
                name: 'UIED行数',
                type: 'bar',
                barWidth: '20',
                data: window.UIED_LINE
            },
            {
                name: 'image2code时间',
                type: 'line',
                yAxisIndex: 1,
                data: window.IMAGE2CODE_TIME
            },
            {
                name: 'imgcook时间',
                type: 'line',
                yAxisIndex: 1,
                data: window.IMGCOOK_TIME
            },
            {
                name: 'UIED时间',
                type: 'line',
                yAxisIndex: 1,
                data: window.UIED_TIME
            },
        ],
        // color: window.COLORS
    };
    

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})();
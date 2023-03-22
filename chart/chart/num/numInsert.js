(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('numInsert'));

    // 指定图表的配置项和数据
    option = {
        title: {
            text: '插入阈值准确率'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['带权趋势']
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
            data: ['1/2', '3/5', '7/10', '4/5', '9/10', '1']
        },
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            // {
            //     name: '横向商品',
            //     type: 'bar',
            //     barWidth: '20',
            //     data: window.INSERT_HORIZONTAL_GOODS
            // },
            // {
            //     name: '横向资讯',
            //     type: 'bar',
            //     barWidth: '20',
            //     data: window.INSERT_VERTICAL_INFO
            // },
            // {
            //     name: '纵向商品',
            //     type: 'bar',
            //     barWidth: '20',
            //     data: window.INSERT_VERTICAL_GOODS
            // },
            {
                name: '带权趋势',
                type: 'line',
                data: window.INSERT_WEIGHT_LINE
            }
        ],
        color: window.COLORS
    };
    

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})();
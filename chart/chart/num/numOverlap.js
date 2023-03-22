(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('numOverlap'));

    // 指定图表的配置项和数据
    option = {
        title: {
            text: '重叠阈值准确率'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['横向商品', '纵向资讯', '纵向商品' ]
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
            data: ['1/10', '1/5', '3/10', '2/5', '1/2']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        series: [
            {
                name: '横向商品',
                type: 'bar',
                barWidth: '20',
                data: window.OVERLAP_HORIZONTAL_GOODS
            },
            {
                name: '横向资讯',
                type: 'bar',
                barWidth: '20',
                data: window.OVERLAP_VERTICAL_INFO
            },
            {
                name: '纵向商品',
                type: 'bar',
                barWidth: '20',
                data: window.OVERLAP_VERTICAL_GOODS
            }
        ],
        color: window.COLORS
    };
    

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

})();
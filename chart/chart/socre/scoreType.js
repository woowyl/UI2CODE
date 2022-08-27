(function() {
    // 是否
    var myChart = echarts.init(document.getElementById('scoreType'));

    option = {
        title: {
            text: '不同类型间评分对比'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        angleAxis: {
            type: 'category',
            data: ['0-1', '1.1-2', '2.1-3', '3.1-4', '4.1-5', '5.1-6', '6.1-7', '7.1-8', '8.1-9', '9.1-10']
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: window.COMEDY_INT_NUM,
            coordinateSystem: 'polar',
            name: '喜剧',
            stack: 'a'
        }, {
            type: 'bar',
            data: window.HORROR_INT_NUM,
            coordinateSystem: 'polar',
            name: '惊悚/悬疑',
            stack: 'a'
        }, {
            type: 'bar',
            data: window.LOVE_INT_NUM,
            coordinateSystem: 'polar',
            name: '爱情',
            stack: 'a'
        },{
            type: 'bar',
            data: window.FIGHT_INT_NUM,
            coordinateSystem: 'polar',
            name: '动作/战争',
            stack: 'a'
        },{
            type: 'bar',
            data: window.FICTION_INT_NUM,
            coordinateSystem: 'polar',
            name: '科幻',
            stack: 'a'
        },{
            type: 'bar',
            data: window.CARTOON_INT_NUM,
            coordinateSystem: 'polar',
            name: '动画',
            stack: 'a'
        }],
        legend: {
            show: true,
            data: ['喜剧', '惊悚/悬疑', '爱情','动作/战争', '科幻', '动画'],
            orient: 'vertical',
            align: "right",
            right: 20
        },
        color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
    };
    
   
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
})()


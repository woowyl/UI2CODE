(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('numInsert'));

    // 指定图表的配置项和数据
    option = {
        title: {
            text: '高斯数据变化'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['处理前', '处理后']
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
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '处理前',
                type: 'line',
                stack: '处理前',
                data: window.NUM_YEAR_TOTAL
            },
            {
                name: '处理后',
                type: 'line',
                data: window.NUM_YEAR_TOTAL_AFTER
            }
        ],
        color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
    };
    

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    function gaussianFun(array) {
        let aLen = array.length;
        array[-1] = 0;
        array[-2] = 0;
        array[-3] = 0;
        array[aLen] = 0;
        array[aLen+1] = 0;
        array[aLen+2] = 0;
        let gausWeight = [0.382, 0.242, 0.061, 0.006]
        let gausedArray = [];
        debugger
        
        for (let i = 0; i < aLen; i++) {
            let center = array[i] * gausWeight[0];
            let centerD1 = (array[i-1] + array[i+1])* gausWeight[1];
            let centerD2 = (array[i+2] + array[i-2]) * gausWeight[2];
            let centerD3= (array[i+3]+ array[i-3]) * gausWeight[3];
            let item = center + centerD1+ centerD2 + centerD3;
            gausedArray.push(item)
        }
        return gausedArray;
    }
})();
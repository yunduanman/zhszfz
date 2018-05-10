/****
特殊模块，数据视图渲染
****/ 
		
define(function(require) {
var datas={
	sc_data:{
		tit:"期末考试",
		data:{"已导入班级":[1345,"#71b5dd"],"未导入班级":[155,"#fb9b9b"]}
	},
	tx_data:{
		tit:"体育测试",
		data:{"已导入班级":[1245,"#71b5dd"],"未导入班级":[255,"#fb9b9b"]}
	},
};

xrzb('score-pie',datas.sc_data.data,datas.sc_data.tit);
xrzb('text-pie',datas.tx_data.data,datas.tx_data.tit);

function xrzb(id,datas,tit){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
        		top:0,
				right:15,
				data:labels
			},
			series: [
				{
					name:tit,
					type:'pie',
					radius: ['30%', '60%'],
					avoidLabelOverlap: false,
					startAngle:20,
					center: ['50%', '50%'],
					label:{normal:{formatter:"{b}\n{d}%",textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4,show:true}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
});

var rankChart = echarts.init(document.getElementById('stu-ranking'));

// 指定图表的配置项和数据
var option = {
	tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
	legend: {
        data:['上报量','通过率'],
        align: 'right',
        right: 15,
        top:0,
    },
	xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                
            },
            boundaryGap: ['0%', '0%'],
        "axisLabel": {
            interval: {default: 0},
            rotate:50,
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
         data: ['一年级','二年级','三年级','四年级','五年级','六年级','初一','初二','初三','高一','高二','高三',]
        }
    ],
	yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            
            axisLabel: {
                formatter: '{value} '
            }
        },{
            type: 'value',
            name: '',
            position: 'right',
            
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
	series: [
        {
            name:'上报量',
            color: '#81d0d7',
            type:'bar',
            barWidth:'30%',
            data:[917,689,1264,534,757,435,1154,656,742,1135,1242,742]
        },
        
        {
        name:'通过率',
         color: '#66d282',
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:2,//折线宽度
                    },
                    
                },
                
            },
        data:[75,74,85,79,85,82,84.5,83,73.5,74,84.5,90,84,83.5,]
    }
    ]
};

// 使用刚指定的配置项和数据显示图表。
rankChart.setOption(option);


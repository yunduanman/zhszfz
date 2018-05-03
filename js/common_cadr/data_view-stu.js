/****
特殊模块，数据视图渲染
****/ 
		
define(function(require) {
var datas={
	st_data:{
		tit:"体育测试",
		data:{"学生申报":[39,"#71b5dd"],"未完成项目":[11,"#fb9b9b"],"学校录入":[20,"#73ceaf"]}
	},
};

xrzb('stud-pie',datas.st_data.data,datas.st_data.tit);

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
var radarChart = echarts.init(document.getElementById('cla-radar'));
option = {
    title: {
        text: ''
    },
    backgroundColor: 'rgba(255,255,255,0)',
    
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '生物', max: 100},
           { name: '数学', max: 100},
           { name: '语文', max: 100},
           { name: '英语', max: 100},           
           { name: '生物', max: 100},
           { name: '数学', max: 100},
           { name: '语文', max: 100},
           { name: '英语', max: 100},           
        ],
		center: ['50%', '51%'],
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
                {
                value : [89, 56, 32, 66,50,67,89,90],
                name : '各项得分'
				,itemStyle:{normal: {color:'#f0ad4e'}},
            },
        ]
    }]
};        // 使用刚指定的配置项和数据显示图表。
        radarChart.setOption(option);



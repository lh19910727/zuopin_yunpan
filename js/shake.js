//function shake(obj,attr,speed,callBack){                           //抖动
//	if(obj.timer) return;   // 如果定时器还在运行则不执行函数
//	var n = 0;				// 变量 n 用来控制数组的第 n 项
//	var arr = [];			// 生成空的数组用来储存 设置的抖动范围
//	for( var i = speed; i>0 ; i -= 3){
//		arr.push(-i,i)         
//	}
//	arr.push(0);            //循环生成数组内容 并在数组的最后一个值加入 0 时期在最后回到初始位置
//	var num = parseFloat(getStyle(obj,attr));  //获取 obj[attr] 的值
//	obj.timer = setInterval(function(){        //生成定时器
//		obj.style[attr] = num + arr[n] + 'px'; //把数组的 第n个值 赋给 obj[attr]
//		n++;									// 增加n 值 为下次获取 数组的下一个值
//		if( n > arr.length-1 ){           
//			clearInterval( obj.timer );         //如果循环到数组的最后一个值 则停止定时器 并清空 obj.timer 的值
//			obj.timer = null;
//			if( typeof callBack === 'function' ){
//				callBack();
//			};
//		}
//	},30)
//}
//获取样式简洁版
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}

function shake ( obj, attr, endFn ) {
    var pos = parseInt( getStyle(obj, attr) );
    var arr = [];           // 20, -20, 18, -18 ..... 0
    var num = 0;

    for ( var i=2; i>0; i-=2 ) {
        arr.push( i*10, -i*10 );
    }
    arr.push(0);

    clearInterval( obj.shake );
    obj.shake = setInterval(function (){
        obj.style[attr] = pos + arr[num] + 'px';
        num++;
        if ( num === arr.length ) {
            clearInterval( obj.shake );
            endFn && endFn();
        }
    },300);
    }
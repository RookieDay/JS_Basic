var arrBtn = document.getElementsByTagName("button");
var arrinp = document.getElementsByTagName("input");
fn(0,true);
fn(1,false);
fn2(2);
//2.绑定事件
function fn(val,flag){
    arrBtn[val].onclick = function () {
        //3.书写事件驱动程序
        //(1).让checked属性值为true。
        for(var i=0;i<arrinp.length;i++){
            arrinp[i].checked = flag;
        }
    }
}
function fn2(val){
    arrBtn[val].onclick = function () {
        for(var i=0;i<arrinp.length;i++){
            arrinp[i].checked = !arrinp[i].checked;
        }
    }
}

下面是复杂的写法：
//2.绑定事件
//    arrBtn[2].onclick = function () {
//        //3.书写事件驱动程序
//        //(3).让checked属性值true变false，false变true。
//        for(var i=0;i<arrinp.length;i++){
//
//            //方法1
////            if(arrinp[i].checked){
////                arrinp[i].checked = false;
////            }else{
////                arrinp[i].checked = true;
////            }
//
//
//            //方法2
////            arrinp[i].checked = arrinp[i].checked==true ? false: true;
////            var aaa = arrinp[i].checked;
////            aaa == true ? false: true;
////            arrinp[i].checked = aaa;
//
//            //方法3
//            arrinp[i].checked = !arrinp[i].checked;
//        }
//    }

var check = getClass("check");
var cartTable = document.getElementById("cartTable");
var tr = cartTable.tBodies[0].rows;
var selectedTotal = document.getElementById("selectedTotal");
var priceTotal = document.getElementById("priceTotal");
var foot = document.getElementById("foot");
var selectedViewList = document.getElementById("selectedViewList");
for(var i=0;i<check.length;i++){

    check[i].onclick = function(){

        if(this.className=="check-all check"){

            for(var i=0;i<check.length;i++){
                check[i].checked = this.checked;
            }

        }

        getTotal();

    }
}


foot.onclick = function(){
//单击foot出现已选商品层
    if(selectedTotal.innerHTML!=0){
        this.className="foot show";
    }else{
        this.className="foot";
    }

}


selectedViewList.onclick = function(e){
//用了事件委托的原理
    var e = window.event || e;
    var tar = e.target || e.srcElement;

    if(tar.nodeName=="SPAN"){
        //就把对应的商品前的，复选框的状态为fasle

        tr[tar.getAttribute("index")].getElementsByTagName("input")[0].checked = false;
        tr[tar.getAttribute("index")].getElementsByTagName("input")[0].onclick();
    }

}

for(var i=0;i<tr.length;i++){

    tr[i].onclick = function(e){
        var inputs = this.getElementsByTagName("input")[1];
        var val = parseInt(inputs.value);
        var e = window.event || e;
        var tar = e.target || e.srcElement;

        switch(tar.className){

            case "add":
                inputs.value = val+1;
                subTotal(this);
                break;
            case "reduce":
                if(val<=1){
                    inputs.value = 1;
                }else{
                    inputs.value = val-1;
                }
                subTotal(this);
                break;
            case "delete":

                var con = confirm("确定删除吗");
                if(con){
                    this.parentNode.removeChild(this);
                }
                break;
        }
        getTotal();
    }
}

function subTotal(tr){

    var td2 = tr.cells[2];
    var td4 = tr.cells[4];
    var inputs = tr.getElementsByTagName("input")[1];
    td4.innerHTML= (td2.innerHTML * inputs.value).toFixed(2);
    //单价*数量=小计

    //实现小计功能，实现-显示或者隐藏功能
    var reduce = tr.getElementsByTagName("span")[1];
    if(inputs.value==1){
        reduce.innerHTML = "";
    }else{
        reduce.innerHTML = "-";
    }


}

function getTotal(){
    //结算和添加已选商品   函数功能
    var select = 0;
    var price =0;
    var list = "";
    for(var i=0;i<tr.length;i++){
        //如果是复选框选中的状态，才能把值放入进去
        if(tr[i].getElementsByTagName("input")[0].checked){

           select+= parseInt(tr[i].getElementsByTagName("input")[1].value);
            price+=parseFloat(tr[i].cells[4].innerHTML);
            list += "<div><img src='"+tr[i].getElementsByTagName("img")[0].src+"'><span index='"+i+"'>取消选择</span></div>";

        }
    }

    selectedTotal.innerHTML = select;
    priceTotal.innerHTML = price.toFixed(2);
    selectedViewList.innerHTML =list;

}
//函数==》实现获取class名称的
function getClass(check){

    var arr = [];
    var doms = document.getElementsByTagName("*");
    for(var i=0;i<doms.length;i++){
        if(doms[i].className==check || doms[i].className.indexOf(" "+check)!=-1 || doms[i].className.indexOf(check+" ")!=-1){
            arr.push(doms[i]);
        }
    }
    return arr;
}



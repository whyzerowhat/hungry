window.onload=function(){

    $(".main").css({
        'height':window.innerHeight+"px",
        'overflow':'scroll',
        'boxSizing':'border-box'
    })
    var arr={};//用来存储商品标识，以便在下方购物车中动态删除,格式[{}]
    var obj = {};
    //计数器，记录下方购物车中总的数量
    var count  = 0;
    //购物车的总付款金额
    var mount = 0;
    //点击隐藏
    $(".posFloat").click(function () {
        $("#floatFot").css("visibility",'hidden')
        $('body').css('overflow','');
    })
//请求接口
    var freezer = []//冷柜数据;
    var shelves  = []//货架数据;
    var shelfId = ''
    $.ajax({
        url: window.location.protocol+'//'+window.location.host+'/mhs/mrpay/SmmGoods.shtml',
        dataType: 'json',
        type: 'get',
        data: {'mercOrderNo':localStorage.mercOrderNo||''},
        success: function (data) {
            if (data.returnCode != 'MCA00000'){
                $(".main").html(data.returnMsg).css({
                    'textAlign':'center',
                    'fontSize':'0.7rem'
                });
                return;
            }
            freezer = data.freezer;
            shelves = data.shelves;
            shelfId = data.shelfId;
            var frlg = freezer.length;
            var shlg = shelves.length;
            for(var i=0;i<shlg;i++){
                if(shelves[i].proSubTyp == '-1'){
                    $("#goods").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+shelves[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+shelves[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+shelves[i].proNm+'<input type="hidden" value="'+shelves[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+shelves[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="'+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                } else if (shelves[i].proSubTyp == '1') {
                    $("#onefloor").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+shelves[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+shelves[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+shelves[i].proNm+'<input type="hidden" value="'+shelves[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+shelves[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="a'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (shelves[i].proSubTyp == '2') {
                    $("#twofloor").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+shelves[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+shelves[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+shelves[i].proNm+'<input type="hidden" value="'+shelves[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+shelves[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="b'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (shelves[i].proSubTyp == '3') {
                    $("#threefloor").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+shelves[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+shelves[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+shelves[i].proNm+'<input type="hidden" value="'+shelves[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+shelves[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="c'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (shelves[i].proSubTyp == '4') {
                    $("#fourfloor").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+shelves[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+shelves[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+shelves[i].proNm+'<input type="hidden" value="'+shelves[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+shelves[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="d'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (shelves[i].proSubTyp == '5') {
                    $("#fivefloor").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+shelves[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+shelves[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+shelves[i].proNm+'<input type="hidden" value="'+shelves[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+shelves[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="e'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }

            }
            for(var i=0;i<frlg;i++){
                if(freezer[i].proSubTyp == '-1'){
                    $("#goods1").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+freezer[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+freezer[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+freezer[i].proNm+'<input type="hidden" value="'+freezer[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+freezer[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="'+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                } else if (freezer[i].proSubTyp == '1') {
                    $("#onefloor1").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+freezer[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+freezer[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+freezer[i].proNm+'<input type="hidden" value="'+freezer[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+freezer[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="f'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (freezer[i].proSubTyp == '2') {
                    $("#twofloor1").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+freezer[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+freezer[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+freezer[i].proNm+'<input type="hidden" value="'+freezer[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+freezer[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="g'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (freezer[i].proSubTyp == '3') {
                    $("#threefloor1").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+freezer[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+freezer[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+freezer[i].proNm+'<input type="hidden" value="'+freezer[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+freezer[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="h'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (freezer[i].proSubTyp == '4') {
                    $("#fourfloor1").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+freezer[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+freezer[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+freezer[i].proNm+'<input type="hidden" value="\'+freezer[i].proId+\'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+freezer[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="g'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }else if (freezer[i].proSubTyp == '5') {
                    $("#fivefloor1").append(
                        '<li class="goodsList">' +
                        '<input type="hidden" value="'+i+'" class="usenum"/>'+
                        '<span class="numPos">0</span>' +
                        '<div style="text-align:center;">' +
                        '<input type="hidden" value="'+freezer[i].proSubTyp+'" />'+
                        '<img class="lazy" src="images/'+freezer[i].imgUrl+'" alt="goods" />' +
                        '</div>' +
                        '<p class="dirGd dirDe">'+freezer[i].proNm+'<input type="hidden" value="'+freezer[i].proId+'"/></p>' +
                        '<p class="dirGd clearfix">' +
                        '<span class="payFt fl">￥'+freezer[i].sellAmt+'</span>' +
                        '<span class="oldFt fr">' +
                        '<input type="hidden" value="l'+i+i+'"/>' +
                        '</span>' +
                        '</li>'
                    )
                }

            }
            if(data.ordSts == 'S'){
                arr = {};mount=0;count=0;$("#balanceNum").text(0);
                $(".numPos").text(0)
                $("#floatFot").css('visibility','hidden')
                $("#listFt").html('');
                $("#theMoney").text('￥0.00');
                $("#floatSure").css('visibility','hidden');
                localStorage.clear();
            $("#goPay").css({
                    "background": "#ccc",
                    "color":"black"
                })
            } else {
                if(localStorage.pay){
                    $("#theMoney").text('￥'+Number(localStorage.pay).toFixed(2));
                    $("#balanceNum").text(localStorage.count);
                    var store = JSON.parse(localStorage.detail);
                    arr = store;
                    count = parseInt(localStorage.count);
                    mount = Number(localStorage.pay);
                    console.log(arr);
                    for(var item in store){
                        $(".oldFt").each(function(){
                            if($(this).children("input").val() ==item ){
                                $(this).parent().parent().children(".numPos").text(store[item].count).css("display","block")
                            }
                        })
                        // $(".numPos").eq(store[item].index).text(store[item].countNum);
                    }

                } else {
                    arr = {};mount=0;count=0;$("#balanceNum").text(0);
                    $(".numPos").text(0)
                    $("#goPay").css({
                        "background": "#ccc",
                        "color":"black"
                    })
                    $("#floatFot").css('visibility','hidden')
                    $("#listFt").html('');
                    $("#theMoney").text('￥0.00');
                    $("#floatSure").css('visibility','hidden');
                    localStorage.clear();
                }
            }

            if (!$("#goods1").text().replace(/\s+/g,'')){
                $("#goods1").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#goods").text().replace(/\s+/g,'')){
                $("#goods").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#onefloor").text().replace(/\s+/g,'')){
                $("#onefloor").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#onefloor1").text().replace(/\s+/g,'')){
                $("#onefloor1").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#twofloor").text().replace(/\s+/g,'')){
                $("#twofloor").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#twofloor1").text().replace(/\s+/g,'')){
                $("#twofloor1").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#threefloor").text().replace(/\s+/g,'')){
                $("#threefloor").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#threefloor1").text().replace(/\s+/g,'')){
                $("#threefloor1").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#fourfloor").text().replace(/\s+/g,'')){
                $("#fourfloor").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#fourfloor1").text().replace(/\s+/g,'')){
                $("#fourfloor1").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#fivefloor").text().replace(/\s+/g,'')){
                $("#fivefloor").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }
            if (!$("#fivefloor1").text().replace(/\s+/g,'')){
                $("#fivefloor1").text("暂无数据").css({
                    "fontSize": "0.6rem",
                    "textAlign":"center"
                })
            }

        },
        error: function (err) {
            alert(err)
        }
    })
	
//	图片懒加载
// $("img.lazy").lazyload({
// 	effect: "fadeIn"
// })
//click change background and color
$("#headFloor li").click(function(){
	$(this).parent('#headFloor').children('li').removeClass('on').children('a').css('color','#333')
	$(this).addClass('on').children('a').css('color','#f30');
})
//点击显示选择层数
var beOk = false;
$("#cliSh").click(function(){
	beOk = !beOk;
	if (beOk) {
		$("#headFloor").css('visibility','visible')
	} else {
		$("#headFloor").css('visibility','hidden')
	}
	
});

//事件委托函数，点击弹出浮层
$("#goods,#onefloor,#twofloor,#threefloor,#fourfloor,#fivefloor,#onefloor1,#twofloor1,#threefloor1,#fourfloor1,#fivefloor1").delegate('div','click',function(){
	$('body').css('overflow','hidden');
	var text = '';
	if ($(this).children("input").val() == '-1'){
	    text = '挂层'
    } else if ($(this).children("input").val() == '1') {
        text = '一层'
    }else if ($(this).children("input").val() == '2') {
        text = '二层'
    }else if ($(this).children("input").val() == '3') {
        text = '三层'
    }else if ($(this).children("input").val() == '4') {
        text = '四层'
    }else {
        text = '五层'
    }
    $("#floatAdd").children(".floatTarg").val($(this).parent().children(".dirGd:last-child").children(".oldFt").children("input").val());
    $("#floatAdd").children(".floatPay").val($(this).parent().children(".dirGd:last-child").children(".payFt").text().substring(1));
    $("#floatAdd").children(".floatNum").val($(this).parent().children(".numPos").text());
    $("#floatAdd").children(".floatDis").val($(this).parent().children(".dirDe").text());
    $("#floatAdd").children(".floatId").val($(this).parent().children(".dirGd:last-child").children(".oldFt").children("input").val());
	$("#floatPar").children(".floatCont").children("ul").children(".detaHd").children(".detaImg").attr("src",$(this).children(".lazy").attr("src"))
	$("#floatPar").children(".floatCont").children("ul").children(".detaInt").children(".footDeta").children("p:last-child").children(".context").text(text);
	$("#floatPar").children(".floatCont").children("ul").children(".postPay").children("span").text($(this).parent().children(".dirGd:last-child").children(".payFt").text());
	$("#floatPar").css('visibility','visible');
    $(".main").css({
        'overflow':'hidden'
    })

})
    // if ($("#floatPar").css('visibility') === 'visible') {
        $("#floatAdd").click(function (ev) {
            count ++;
            var num1 = parseInt($("#floatAdd").children(".floatNum").val())+1;
            $(".oldFt").each(function(){
                if($(this).children("input").val() ==$("#floatAdd").children("input").val()){
                    $(this).parent().parent().children(".numPos").text(num1);
                    obj['count'] = num1;
                    obj['countNum'] = count;
                    obj[$(this).children('input').val()] = $(this).children('input').val();
                    obj['detail'] = $(this).parent().parent().children(".dirDe").text();
                    obj['img'] = $(this).parent().parent().children(".div").text();
                    obj['proId'] = $(this).parent().parent().children(".dirDe").children("input").val();
                    obj['index'] = $(this).parent().parent().children(".usenum").val();
                    obj['pay'] = $(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1)
                    arr[$(this).children('input').val()]=(obj);
                    obj = {};
                    mount+= Number($(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1));
                    $("#theMoney").text('￥'+mount.toFixed(2))
                    $("#balanceNum").text(count);
                }
            })
            $("#goPay").css({
                "background": "#17d36c",
                "color":"white"
            })
        })
    // }
//点浮层处消失
$("#floatPar").click(function(){
	$("#floatPar").css('visibility','hidden');
	$('body').css('overflow','');
    $(".main").css({
        'overflow':'scroll'
    })
})
//点击列表里面的购物车，进行添加操作，显示下方购物车，同时对应列表处右上方显示数量
$(".delegate").delegate(".oldFt","click",function (ev) {
    // $(this).click(function(ev){
        ev.stopPropagation();
        count ++;
        mount+= Number($(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1));
        $("#theMoney").text('￥'+mount.toFixed(2))
        $("#balanceNum").text(count);
        let num =  parseInt($(this).parent().parent().children(".numPos").text())+1;
        $(this).parent().parent().children(".numPos").text(num) ;
        if(parseInt($(this).parent().parent().children(".numPos").text()) > 0){
            $(this).parent().parent().children(".numPos").css('display','block')
        }
        obj[$(this).children('input').val()] = $(this).children('input').val();
        obj['detail'] = $(this).parent().parent().children(".dirDe").text();
        obj['count'] = num;
        obj['countNum'] = count;
        obj['proId'] = $(this).parent().parent().children(".dirDe").children("input").val()
        obj['index'] = $(this).parent().parent().children(".usenum").val();
        obj['pay'] = $(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1)
        arr[$(this).children('input').val()]=(obj);
        obj = {};
        $("#goPay").css({
            "background": "#17d36c",
            "color":"white"
        })
    // })
})
$("#freeze .delegate1").delegate(".oldFt","click",function (ev) {
    // $(this).click(function(ev){
        ev.stopPropagation();
        count ++;
        mount+= Number($(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1));
        $("#theMoney").text('￥'+mount.toFixed(2))
        $("#balanceNum").text(count);
        let num =  parseInt($(this).parent().parent().children(".numPos").text())+1;
        $(this).parent().parent().children(".numPos").text(num) ;
    if(parseInt($(this).parent().parent().children(".numPos").text()) > 0){
        $(this).parent().parent().children(".numPos").css('display','block')
    }
        obj[$(this).children('input').val()] = $(this).children('input').val();
        obj['detail'] = $(this).parent().parent().children(".dirDe").text();
        obj['count'] = num;
        obj['countNum'] = count;
        obj['proId'] = $(this).parent().parent().children(".dirDe").children("input").val()
        obj['index'] = $(this).parent().parent().children(".usenum").val();
        obj['pay'] = $(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1)
        arr[$(this).children('input').val()]=(obj);
        obj = {};
        $("#goPay").css({
            "background": "#17d36c",
            "color":"white"
        })
    // })
})
// $(".oldFt").each(function(index,item){
// 	$(this).click(function(){
// 		count ++;
// 		mount+= Number($(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1));
// 		$("#theMoney").text('￥'+mount.toFixed(2))
// 		$("#balanceNum").text(count);
// 		let num =  parseInt($(this).parent().parent().children(".numPos").text()) + 1
// 		$(this).parent().parent().children(".numPos").text(num) ;
// 		obj[$(this).children('input').val()] = $(this).children('input').val();
// 		obj['detail'] = $(this).parent().parent().children(".dirDe").text();
// 		obj['countNum'] = num;
// 		obj['index'] = index;
// 		obj['pay'] = $(this).parent().children(".payFt").text().substring($(this).parent().children(".payFt").text().indexOf('￥')+1)
// 		arr[$(this).children('input').val()]=(obj);
// 		obj = {};
// 	})
// })


//下方购物车点击弹出详情
var isOk = false
$("#balance").click(function(){
	isOk = !isOk
	if (isOk) {
        $('body').css('overflow','hidden');
		$("#floatFot").css('visibility','visible')
		$("#listFt").html('');
		console.log(arr)
		for(var item in arr){
			$("#listFt").append(
				'<li class="clearfix detaInt1">'+
					'<div class="fl">'+arr[item]['detail']+'</div>'+
					'<div class="fr">'+
						'<span class="pyCl">￥'+arr[item]['pay']+'</span>'+
						'<i class="reduce"><input type="hidden" value="'+arr[item]["index"]+'"/><input type="hidden" value="'+item+'"/></i>'+
						'<span class="theNumber">'+arr[item]['count']+'</span>'+
						'<i class="add"><input type="hidden" value="'+arr[item]["index"]+'"/><input type="hidden" value="'+item+'"/></i>'+
					'</div>'+
				'</li>')
		}
	} else {
        $('body').css('overflow','auto');
		$("#floatFot").css('visibility','hidden')
	}
});
//点击购物车显示详情里面的增加和减少和购物车和localstorage和显示列表联动
//减减处
$("#listFt").on('click','.reduce',function(){
	var num1 = parseInt($(this).parent().children('.theNumber').text())-1;
	var cot = parseInt($("#balanceNum").text());
	var theIndex = $(this).children('input:last-child').val();
	var item = $(this).children('input:last-child').val();
	
	var money = Number($("#theMoney").text().substring($("#theMoney").text().indexOf('￥')+1)) - Number($(this).parent().children('.pyCl').text().substring($(this).parent().children('.pyCl').text().indexOf('￥')+1));
	count--;	
	if(num1 == 0){
		$(this).parent().parent().remove();
		$(this).parent().children('.theNumber').text(0);
		delete arr[item];
	} else{
		$(this).parent().children('.theNumber').text(num1);

		arr[item]['count'] = arr[item]['count']-1;
		$("#balanceNum").text(count);
		console.log(count)
	}
    $(".oldFt").each(function(){
        if($(this).children("input").val() ==theIndex ){
            $(this).parent().parent().children(".numPos").text(num1);
            if (num1 <1){
                $(this).parent().parent().children(".numPos").css("display","none")
            }
        }

    })
	if (cot-1 <= 0){
		$("#floatFot").css('visibility','hidden');
		$("#listFt").html('');
		arr = {};mount=0;count=0;$("#balanceNum").text(0);
		$("#theMoney").text('￥0.00');
        $("#goPay").css({
            "background": "#ccc",
            "color":"black"
        })
	} else {
		$("#balanceNum").text(cot-1);
        mount=money
		$("#theMoney").text('￥'+money.toFixed(2));
        localStorage.detail = JSON.stringify(arr);
        localStorage.setItem('pay',mount);
        localStorage.setItem('count',count);
	}

})
//加加处
$("#listFt").on('click','.add',function(){
	var num2 = parseInt($(this).parent().children('.theNumber').text())+1;
	var cot1 = parseInt($("#balanceNum").text());
	var theIndex1 = $(this).children('input:last-child').val();
	var item1 = $(this).children('input:last-child').val();
	
	var money1 = Number($("#theMoney").text().substring($("#theMoney").text().indexOf('￥')+1)) + Number($(this).parent().children('.pyCl').text().substring($(this).parent().children('.pyCl').text().indexOf('￥')+1));
	count++;	
	$(this).parent().children('.theNumber').text(num2);
	$(".oldFt").each(function(){
	    if($(this).children("input").val() ==theIndex1 ){
	        $(this).parent().parent().children(".numPos").text(num2)
        }
    })
	arr[item1]['count'] = arr[item1]['count']+1;
	$("#balanceNum").text(count);
	console.log(count)
	$("#balanceNum").text(cot1+1);
	$("#theMoney").text('￥'+money1.toFixed(2));
	mount=money1	
	localStorage.detail = JSON.stringify(arr);
	localStorage.setItem('pay',mount);
    localStorage.setItem('count',count);
})
//清空购物车
$("#youSure .btnIf:first-child").click(function(){
	arr = {};mount=0;count=0;$("#balanceNum").text(0);
	$(".numPos").text(0);
    $(".numPos").css("display","none")
	$("#floatFot").css('visibility','hidden')
	$("#listFt").html('');
	$("#theMoney").text('￥0.00');
	$("#floatSure").css('visibility','hidden');
	localStorage.clear();
    $("#goPay").css({
        "background": "#ccc",
        "color":"black"
    })
})
$("#youSure .btnIf:last-child").click(function(){
	$("#floatSure").css('visibility','hidden');
})
$("#empty").click(function(){
	$("#floatSure").css('visibility','visible');
})

$("#goPay").click(function(){
    if (parseInt($("#balanceNum").text()) <=0){
        $(this).css({
            "background": "#ccc",
            "color":"black"
        })
        return;
    }
    //去结算
    var pro_list = '';
    for(var item in arr) {
        pro_list += 'count='+arr[item].count+'&proId='+arr[item].proId+'|'
        // pro_list.push(
        //     {
        //         'count':arr[item].count,
        //         'proId': arr[item].proId
        //     }
        // )
    }
    console.log((pro_list))
    var params ={
        'totPayAmt': (Number($("#theMoney").text().substring($("#theMoney").text().indexOf('￥')+1))*100).toFixed(0),
        'totOrdAmt': (Number($("#theMoney").text().substring($("#theMoney").text().indexOf('￥')+1))*100).toFixed(0),
        'proList': pro_list,
        'shelfId':shelfId,
        'proNum': $("#balanceNum").text()
    }
    $.ajax({
        url: window.location.protocol+'//'+window.location.host+"/mhs/mrpay/PreOrders.shtml",
        type: 'post',
        dataType: 'json',
        data: params,
        success: function(data){
            localStorage.setItem('mercOrderNo',data.mercOrderNo);
            console.log(data.gateWay);
            window.location.href =window.location.protocol+'//'+window.location.host+"/mhs/wap/hungry0/forPay.html"
            localStorage.setItem('url',data.gateWay)
        }
    })
	var count1 = $("#balanceNum").text()
	localStorage.detail = JSON.stringify(arr);
	localStorage.setItem('pay',mount);
	localStorage.setItem('count',count1);


})
};

//货架冷柜切换
$(".goodDis").each(function(){
    $(this).click(function () {
        $(".goodDis").removeClass("active");
        $(this).addClass('active');
        if($(this).index()){
            $("#shelves").css("display","none");
            $("#freeze").css("display","block");
            $("#headFloor .act").css("display","none");
            $("#headFloor .act1").css("display","block");
        } else {
            $("#shelves").css("display","block");
            $("#freeze").css("display","none");
            $("#headFloor .act1").css("display","none");
            $("#headFloor .act").css("display","block");
        }
    })
})

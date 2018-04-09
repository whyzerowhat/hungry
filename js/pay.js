window.onload = function(){
	var storage = JSON.parse(localStorage.detail);
	$("#allPay").text('￥'+Number(localStorage.pay).toFixed(2))
	console.log(storage)
	for(var item in storage){
			$("#listTit").append(
				'<li class="payList">'+
					'<div class="inline">'+
						'<img src="images/'+storage[item].proId+'.png" alt="" />'+
					'</div>'+
					'<div class="inline1">'+
						'<p>'+storage[item]['detail']+'</p>'+
						'<p>×'+storage[item]['count']+'</p>'+
					'</div>'+
					'<div class="fr inline2">￥'+Number(storage[item]['pay']).toFixed(2)+'</div>'+
				'</li>')
		}
		$("#turnUrl").click(function () {
			window.location.href = localStorage.url
        })
}

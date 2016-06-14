﻿// JavaScript Document<script>

	
$(function(){
//搜店切换
(function(){
	var ali=$('#menu li');
		var oText=$('.search').find('.form .text');
		var arrText=[
		'例如：荷棠鱼坊烤鱼或樱花日本料理',
		'例如：昌平区育新站龙旗广场2号楼',
		'例如：万达银冠树啊',
		'例如：东莞出事了，大老虎是谁？',
		'例如:北京初春降雪，天气变幻莫测'];
		var now=0;
	    oText.val(arrText[now]);
	ali.each(function(index) {
		$(this).click(function(){
			ali.attr('class','gradient');
			$(this).attr('class','active');
			var now=index;
			oText.val(arrText[now]);
		});
	
     });
	//输入框焦点事件
	  
	  oText.focus(function(){
	     if($(this).val()==arrText[now]){
			$(this).val("");
		}
});
  oText.blur(function(){
	  if($(this).val()==''){
		 oText.val(arrText[now]);
	 }
})
})();
//文字滚动交互
(function(){
	var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间'},
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯'},
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦'},
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间'},
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间'},
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯'},
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦'},
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间'}
		];
		var oDiv=$('.updata');
		var oUl=oDiv.find('ul');
		var iH=0;
		var str='';
		var inow=0;
		for(var i=0;i<arrData.length;i++){
			str += '<li><a href="#"><strong>'+ arrData[i].name +'</strong> <span>'+ arrData[i].time +'分钟前</span> 写了一篇新文章：'+ arrData[i].title +'…</a></li>';
		}
		oUl.html(str);
		var li=oUl.find('li');
		var iH=li.height();
	    var btn_up=$('#btn_up');
		var btn_down=$('#btn_down');
		var timer;
		btn_up.click(function(){
		    move(-1);
			})
		btn_down.click(function(){
			move(1)
		});
		oDiv.hover(function(){
			clearInterval(timer);
		},autoPlay);
		
		function move(num){
			inow+=num;
			
			if(Math.abs(inow)>arrData.length-1){
				inow=0;
			};
			if(inow>0){
				inow=-(arrData.length-1);
			};
		 oUl.stop().animate({'top':iH*inow},2000);
		}
		function autoPlay(){
			-1
			timer=setInterval(function(){
				move(1);
				},3500);
			}
		autoPlay();
	
		
	})();
	//选项卡切换
(function(){
	//
	fnTab($('.tabNav1'),$('.hot_tab1'),'click');
	fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
	fnTab($('.tabNav4'),$('.tabCon4'),'click');
	fnTab($('.tabNav2'),$('.tabCon5'),'click');
	
	
	//tab函数

	function fnTab( oNav, aCon, sEvent ) {
			var aElem = oNav.children();
			aCon.hide().eq(0).show();
			
			aElem.each(function (index){
				
				$(this).on(sEvent, function (){
					aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aElem.find('a').attr('class', 'triangle_down_gray');
					$(this).find('a').attr('class', 'triangle_down_red');
					
					aCon.hide().eq( index ).show();
				});
				
			});
		}
	
})();
(function (){
		var oDiv = $('#pic');
		var aUlLi = oDiv.find('ul li');
		var aOlLi = oDiv.find('ol li');
		var oP = oDiv.find('p');
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var Now = 0;
		var timer = null;
		
		fnFade();
		
		aOlLi.click(function (){
			Now = $(this).index();
			fnFade();
		});
		oDiv.hover(function (){ clearInterval(timer); }, autoPlay);
		
		function autoPlay() {
			timer = setInterval(function () {
				Now++;
				Now%=arr.length;
				fnFade();
			}, 2000);
		}
		autoPlay();
		
		function fnFade() {
			aUlLi.each(function (i){
				if ( i != Now ) {
					aUlLi.eq(i).fadeOut().css('zIndex', 1);
					aOlLi.eq(i).removeClass('active');

				} else {
					aUlLi.eq(i).fadeIn().css('zIndex', 2);
					aOlLi.eq(i).addClass('active');
				}
			});
			oP.text(arr[Now]);
		}
	})();

//日历提示说明
	(function (){
		var aSpan = $('.calendar h3 span');
		var aImg = $('.calendar .img');
		var oPrompt = $('.today_info');
		var oImg = oPrompt.find('img');
		var oStrong = oPrompt.find('strong');
		var oP = oPrompt.find('p');
		
		aImg.hover(function (){
			var iTop = $(this).parent().position().top - 30;
			var iLeft = $(this).parent().position().left + 55;
			var index = $(this).parent().index()%aSpan.size();
			
			// console.log( $(this).parent().index()%aSpan.size() );
			
			oPrompt.show().css({ 'left': iLeft, 'top': iTop });
			oP.text($(this).attr('info'));
			oImg.attr('src', $(this).attr('src'));
			oStrong.text( aSpan.eq(index).text() );
			
			
		}, function (){
			oPrompt.hide();
		});
	})();
	// BBS高亮显示
	(function (){
		$('.bbs ol li').mouseover(function (){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		});
	})();
	// HOT鼠标提示效果
	(function (){
		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		$('.hot_area li').mouseover(function (){
			
			if ( $(this).index() == 0 ) return;
			
			$('.hot_area li p').remove();
			
			$(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
		});
	})();






})	
	



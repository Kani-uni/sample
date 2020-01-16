$(function(){

	//スクロールに応じてTOPボタンの表示を切り替える（https://www.webopixel.net/javascript/538.html）
	var topBtn = $('#page-top');    
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	//テキストのアニメーション（https://designsupply-web.com/knowledgeside/4141/）
	const obj = $(".scroll-animation-obj");
	const hopIn = $(".scroll-animation-hop");
	const leftIn = $(".scroll-animation-left");
	const rightIn = $(".scroll-animation-right");
	$(window).on('scroll',function(){
		obj.each(function(){
			const objPos = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowH = $(window).height();
			if(scroll > objPos - windowH){
				$(this).css({
					'opacity': '1'
				});
			} else {
				$(this).css({
					'opacity': '0'
				});
			}
		});
		hopIn.each(function(){
			const objPos = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowH = $(window).height();
			if(scroll > objPos - windowH){
				$(this).css({
					'transform': 'translate(0,0)'
				});
			} else {
				$(this).css({
					'transform': 'translate(0,60px)'
				});
			}
		});
		leftIn.each(function(){
			const objPos = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowH = $(window).height();
			if(scroll > objPos - windowH){
				$(this).css({
					'transform': 'translate(0,0)'
				});
			} else {
				$(this).css({
					'transform': 'translate(-120px,0)'
				});
			}
		});
		rightIn.each(function(){
			const objPos = $(this).offset().top;
			const scroll = $(window).scrollTop();
			const windowH = $(window).height();
			if(scroll > objPos - windowH){
				$(this).css({
					'transform': 'translate(0,0)'
				});
			} else {
				$(this).css({
					'transform': 'translate(120px,0)'
				});
			}
		});
	});

	//ゆっくりスクロール(http://kyasper.com/jquery-tips/)//
	$(function(){
	// #で始まるアンカーをクリックした場合に処理
		$('a[href^=#]').click(function() {
		var speed = 400; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
		});
	});

	// 新規登録モーダル
	$('.signup-show').click(function() {
		$('#signup-modal').fadeIn();
	});
	$('#close-modal').click(function() {
		$('#signup-modal').fadeOut();
	});

	// ログインモーダル
	$('.login-show').click(function() {
		$('#login-modal').fadeIn();
	});
	$('#login-modal').click(function() {
		$('#login-modal').fadeOut();
	});
	
});

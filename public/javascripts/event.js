$(function(){
function matomeEvent(){
	//ランダム機能
	// function randomDisp(){
	// 	var bool = [1, -1];
	// 	$('.slide__elem').html(
	// 		$('.slide__list').sort(function(a, b){
	// 			return bool[Math.floor(Math.random() * bool.length)];
	// 		})
	// 	);
	// }
	// randomDisp();
	//ランダム機能
	
	//スライド
	function slideGirlList(){
			
		$(window).on('load',function(){
			var $ulList = $('.slide__elem');
			var slideList = $ulList.find('li');
			var slideListNum = slideList.length;
				
			var leftIconClick = $('.jnr_left_icon');
			var rightIconClick = $('.jnr_right_icon');
			var imageElem = $ulList.find('img');
			var slideWrap = $('.slide_wrap');
				
			var imageHeight = imageElem.innerHeight();
			var imageWidth = imageElem.innerWidth();
			var slideListPadding = slideList.css('padding-left').replace('px','');
			
			slideList.height(imageHeight).width(imageWidth-(slideListPadding*2));
			slideWrap.height(imageHeight).width(imageWidth);
				
			var slideListWidth = slideWrap.innerWidth();
			var ulListWidth = slideListWidth * slideListNum;
				
			$ulList.clone().prependTo(slideWrap);
			$ulList.clone().appendTo(slideWrap);
			
			var ulLisChild = slideWrap.find($ulList);
			
			ulLisChild.each(function(){
				$('.slide__elem').wrapAll('<div class="slider_cover" />');
				var ulListNum = $('.slide__elem').length;
				$('.slider_cover').width(ulListWidth * ulListNum);
			});
				
				
			var sliderCover = $('.slider_cover');
			
			sliderCover.css('left',-(ulListWidth));
				
			var slidePositionBefore = slideListWidth * slideListNum;
			
			var slideReturnLine = -(ulListWidth + slidePositionBefore);
				
			
			//ページネーション
			var pagination = $('.jnr_pagination');
			var pageNationNum = 0;
				
			slideList.each(function(i){
				var pageElem = '<a href="javascript:void(0);" class="pn'+(i+1)+'"></a>';
				pagination.append(pageElem);
			});
				
			var pageAlink = pagination.find('a');
			var pageNationElem = pageAlink.eq(pageNationNum);
			pageNationElem.addClass('active_pgn');

			function paginationAdd(){
				var pnActive = pagination.children('a.active_pgn');
				var pnLinkLength = pageAlink.length;
				pageAlink.each(function(){
					var listCount = pnActive.index()+1;
					if(pnLinkLength == listCount){
						pnActive.removeClass('active_pgn');
						pagination.children('a:first').addClass('active_pgn');
					}else{
						pnActive.removeClass('active_pgn').next().addClass('active_pgn');
					}
				});
			}
				
			
			function paginationPrev(){
				var pnActive = pagination.children('a.active_pgn');
				var pnFirst = pagination.children('a:first').index()+1;
				pageAlink.each(function(){
					var listCount = pnActive.index()+1;
					if(pnFirst == listCount){
						pnActive.removeClass('active_pgn');
						pagination.children('a:last').addClass('active_pgn');
					}else{
						pnActive.removeClass('active_pgn').prev().addClass('active_pgn');
					}
				});
			}
			//ページネーション
				
			var bgAll = $('#bg_all');
				
			function bgChange(bgnum){
				bgAll.animate({
					opacity : 0.5
				},100,function(){
					var slideImage = $(slideList[bgnum]).find('img').attr('src');
					$(this).css("background-image","url('"+slideImage+"')");
				});
				
				setTimeout(function(){
					bgAll.animate({
						opacity : 0.7
					},100);
				},100);
			}
		
			function pageNumMove(){
				pageAlink.each(function(){
					if($(this).hasClass('active_pgn')){
						var bgnum = $(this).index();
						bgChange(bgnum);
					}
				});
			}
			pageNumMove();
				
			
			function slideMoveRtoL(){
				sliderCover.not(':animated').animate({
					left: '-=' + slideListWidth
				},600,function(){
					var slidePosition = sliderCover.position().left;
					if(slidePosition <= slideReturnLine){
						sliderCover.css({left:-(ulListWidth)});
					}
					paginationAdd();
					pageNumMove();
				});
			}
			setInterval(slideMoveRtoL,5000);
			
			var slidePositionReverse = slideListWidth * (slideListNum);
			var slideReverseLine = -(ulListWidth - slidePositionReverse);
			
			function slideMoveLtoR(){
				sliderCover.not(':animated').animate({
					left: '+=' + slideListWidth
				},600,function(){
					var slidePosition = sliderCover.position().left;
					if(slidePosition >= slideReverseLine){
						sliderCover.css({left:-(ulListWidth)});
					}
					paginationPrev();
					pageNumMove();
				});
			}
				
			leftIconClick.on('click',function(){
				slideMoveLtoR();
			});
			
			rightIconClick.on('click',function(){
				slideMoveRtoL();
			});
			
			//フリックイベント
			var slideContents = $('.slide_contents');
			
			slideContents.on('touchstart',onTouchStart);
			slideContents.on('touchmove',onTouchMove);
			slideContents.on('touchend',onTouchEnd);
			var direction;
			var position;
			
			function onTouchStart(event){
				position = getPosition(event);
				direction = '';
			}
			
			function onTouchMove(event){
				if(position - getPosition(event) > 70){
					direction = 'left';
				}else if(position - getPosition(event) < -70){
					direction = 'right';
				}
			}
			
			function onTouchEnd(event){
				if(direction == 'right'){
					slideMoveLtoR();
				}else if(direction == 'left'){
					slideMoveRtoL();
				}
			}
			
			function getPosition(event){
				return event.originalEvent.touches[0].pageX;
			}
			//フリックイベント
		});
	}
	slideGirlList();
	//スライド
}
	matomeEvent();
});
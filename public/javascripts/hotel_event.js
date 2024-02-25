$(function(){
	
	function couponEvent(){
		
		var windowWidth = $(window).innerWidth();
		
		//カウントダウンタイマー
		function countDown(){
			var startDate = $('.starting_date').attr('data-start-date');
			var startDateTime = new Date(startDate);
			var endDate = $('.ending_date').attr('data-end-date');
			var endDateTime = new Date(endDate);
			var nowDate = new Date();
			
			//console.log(startDate);
			//console.log(endDate);
				//1日＝1000ミリ秒×60秒×60分×24時間
			
			//var dayWeekDisp = $('.day_week_disp');
			var weekStr = ['日','月','火','水','木','金','土'];
			var weekNum = endDateTime.getDay();
			var endMon = endDateTime.getMonth()+1;
			var endDay = endDateTime.getDate();
			var endHour = ('0'+endDateTime.getHours()).slice(-2);
			var endMin = ('0'+endDateTime.getMinutes()).slice(-2);
			
			/*var startNum = startDateTime.getDay();
			var startMon = startDateTime.getMonth()+1;
			var startDay = startDateTime.getDate();
			var startHour = ('0'+startDateTime.getHours()).slice(-2);
			var startMin = ('0'+startDateTime.getMinutes()).slice(-2);*/
			
			/*$('.starting_date').html('<span class="start_month">' + startMon + '</span>/<span class="start_day">' + startDay + '</span><span class="start_week">（' + weekStr[startNum] + '）</span><span class="start_hour">' + startHour + '</span>:<span class="start_min">' + startMin + '</span>');*/
			
			$('.ending_date').html('<span class="end_month">' + endMon + '</span>/<span class="end_day">' + endDay + '</span><span class="end_week">（' + weekStr[weekNum] + '）</span><span class="end_hour">' + endHour + '</span>:<span class="end_min">' + endMin + '</span>'+'<span class="limit_txt">まで</span>');
			
			/*dayWeekDisp.html('<span class="ending_month">' + endMon + '</span>/<span class="ending_day">' + endDay + '</span><span class="ending_week">（' + weekStr[weekNum] + '）</span><span class="ending_hour">' + endHour + '</span>:<span class="ending_min">' + endMin + '</span><span class="range_text">まで</span>');*/
			
							
			if(nowDate > startDateTime){
				startDateTime = new Date();
				
			}else if(nowDate < startDateTime){
				startDateTime = new Date(startDate);
			}
			
			var countDisp = $('.count_down_disp');
			var dfTime = endDateTime - startDateTime;
			var second = ('0'+Math.floor(dfTime / 1000) % 60 % 60).slice(-2); //秒
			var minute = ('0'+Math.floor(dfTime / 1000 / 60) % 60).slice(-2); //分
			var hour = ('0'+Math.floor(dfTime / 1000 / 60 / 60) % 24).slice(-2); //時間
			var days = (Math.floor(dfTime / 1000 / 60 / 60 / 24)); //日
			
			if(dfTime <= 0){
				countDisp.html('<span class="remaining_time">あと</span><span class="hour_memory">' + '00' + '</span>時間<span class="minites_memory">' + '00' + '</span>分<span class="second_memory">' + '00' +'</span>秒');
			}else{
				countDisp.html('<span class="remaining_time">あと</span><span class="days_memory">' + days + '</span><span class="days_text">日</span><span class="hour_memory">' + hour + '</span>時間<span class="minites_memory">' + minute + '</span>分<span class="second_memory">' + second +'</span>秒');
			}
		}
		countDown();
		setInterval(countDown,1000);
		//カウントダウンタイマー
	}
	couponEvent();
});
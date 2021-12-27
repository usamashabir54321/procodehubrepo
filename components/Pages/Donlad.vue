<template>
	<div class="container pl-5 pr-5">
		<!-- PAGE HEADER -->
		<div class="row justify-content-center pt-5 mb-4">
			<div class="col">
				<h2 class="fs-2 fs-sm-3"><span class="text-success">DOWNLOAD</span> PAGE</h2><hr class="hr-ornate" /><br>
				<a class="btn btn-primary rounded mt-1 shadow-sm" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">GO PLAYLIST</a>
			</div>
		</div>
		<div class="row justify-content-center mt-5">
				<!-- ITEM CARDS -->
			<div class="col-sm-12 col-md-12 col-lg-3 mt-lg-5">
				<iframe :src="now_dnld.src" class="c_m_item video" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;fullscreen;clipboard-write;encrypted-media;gyroscope;picture-in-picture"></iframe>
			</div>
			<div class="col-sm-12 col-md-12 col-lg-3 mt-lg-5">
				<h3 class="text-success mt-5">{{ now_dnld.title }}</h3>
			</div>
			<div id="dnld_item_div" class="col-sm-12 col-md-12 col-lg-3 mt-lg-5">
				<button class="btn btn-dark mt-5">Download After <span id="btn_timer">2 min</span></button>
			</div>
		</div>
			<!-- PAGE FOOTER -->
		<div class="row justify-content-center mt-5 pt-5 mb-4">
			<div class="col">
				<h2 class="fs-2 fs-sm-3"><span class="text-success">DOWNLOAD</span> PAGE</h2><hr class="hr-ornate" /><br>
				<a class="btn btn-primary rounded mt-2 shadow-sm" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">GO PLAYLIST</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['now_dnld'],
		data () {
			return {
				this_intrvl: null,
			}
		},
		mounted () {
			var vid_time = parseInt(this.now_dnld.time);
			var fiveMinutes = 60 * vid_time,
			display = document.querySelector('#btn_timer');
			this.startTimer(fiveMinutes, display);
		},
		methods: {
			startTimer (duration, display) {
				var timer = duration, minutes, seconds;
				var donldPath = this.now_dnld.zip;
				const intervals = this.this_intrvl = setInterval(function () {
					minutes = parseInt(timer / 60, 10);
					seconds = parseInt(timer % 60, 10);
					minutes = minutes < 10 ? "0" + minutes : minutes;
					seconds = seconds < 10 ? "0" + seconds : seconds;
					display.textContent = minutes + ":" + seconds;
					console.log('i am in setInterval');
					if (--timer < 0) {
						clearInterval(intervals);
						var dnld_item_div = document.querySelector('#dnld_item_div');
						dnld_item_div.innerHTML = '<a href="/web'+donldPath+'" download><button class="btn btn-success mt-5">Download</button></a>';
					}
				}, 1000);
			},
		},
		destroyed () {
			clearInterval(this.this_intrvl);
		},
	}
</script>

<style scoped>
	iframe {width: 100%;}
</style>
<template>
	<div>
		<div id="home_overlay">
				<!-- HOME PAGE HTML -->
			<section class="p-0" id="home">
				<div class="container-fluid p-0 minh-100vh">
					<div class="position-relative px-3 w-lg-50 position-lg-absolute" id="baseContent" :style="page ? {left:'-100%'} : {left:'0px'}">
						<a href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">
							<div class="row align-items-center minh-50vh justify-content-center py-5 minh-lg-100vh">
								<div class="col-sm-9 col-lg-10 text-center">
									<a href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank"><img class="w-75 w-sm-50" src="web/assets/img/pro_code_nobg.png" alt=""></a>
									<h1 class="font-weight-medium fs-3 fs-sm-4"><span class="text-success">PRO</span>CODE HUB</h1>
									<p class="lead mt-3 text-900 fs-0"><b>Please Subscribe Our Youtube Channel</b></p>
									<a class="btn btn-danger btn-lg mt-2" target="_blank" style="color:white;"><b>Subscribe Us</b></a>
								</div>
							</div>
						</a>
					</div>
					<div class="position-relative w-lg-50 position-lg-fixed undefined" id="gridNav" :style="page ? {right:'-100%'} : {right:'0px'}">
						<div class="row h-lg-100vh">
								<!-- PLUGINS -->
							<div @click="page = 'plugins'" class="col-12 col-sm-12 minh-100vh h-md-100vh sidebar-item-wrapper py-5" style="background-color: #16a085">
								<div class="sidebar-item"><h1 class="font-weight-bold text-white fs-0 fs-xl-1">PLUGINS [ 1 ]</h1></div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div class="page position-absolute t-0 w-100">
				<div class="row no-gutters minh-100vh">
					<div class="col-lg-9 order-1 order-lg-0 page-content pt-6 pt-lg-0">
						<section class="pt-0 text-center">

							<!-- PLUGINS PAGE CONTENT -->
							<transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp" mode="out-in">
								<LazyPagesPlugins v-if="page == 'plugins'" @goDonld="goDonld"/>
								<LazyPagesDonlad v-if="page == 'download'" :now_dnld="now_dnld"/>
							</transition>

						</section>
						<footer class="page-footer">
							<div class="bg-holder" style="background-image:url(web/assets/img/sidebars/about.jpg);background-position: 0 27%; transform: scale(1.1);"></div>
							<div class="row justify-content-center">
								<div class="col-lg-10">
									<div class="row align-items-center">
										<div class="col-lg-4 text-lg-left"><a class="btn btn-primary btn-lg rounded-capsule mt-4" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">GO TO CHANNEL</a></div>
										<div class="col-lg-4 text-lg-center"><a class="btn btn-danger btn-lg mt-4" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank" style="color:white;"><b>Subscribe Us</b></a></div>
										<div class="col-lg-4 text-lg-right mt-2 mt-lg-0 pt-4">
											<p class="fs--1 text-uppercase ls font-weight-bold mb-0">
												Provided by <span class="fas fa-heart mx-1"><a href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank" class="text-success">Pro</a></span> code hub channel
											</p>
										</div>
									</div>
								</div>
							</div>
						</footer>
					</div>
					<div class="col-lg-3 col-12 t-0 order-0 order-lg-1 position-absolute position-lg-relative">
						<div class="h-lg-100vh sticky-top py-4 sticky-area">
							<span @click="page = ''" class="btn-close"><img class="d-none d-lg-block times" src="web/assets/img/times.svg" width="25" alt=""/><img class="d-lg-none" src="web/assets/img/times-black.svg" width="18" alt=""/></span>
							<div class="bg-holder" style="background-image:url(web/assets/img/sidebars/about.jpg);"></div>
								<!-- PAGE SIDE - BAR TITLE -->
							<transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
								<h1 v-if="page == 'plugins'" class="page-title">PLUGINS PAGE</h1>
								<h1 v-if="page == 'download'" class="page-title">DOWNLOAD PAGE</h1>
							</transition>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				page: '',
				now_dnld: {},
			}
		},
		// mounted () {
		// 	this.$axios.get('http://localhost:8000/api/codehubGet/enter_u_counter').then(res => { console.log('total number of people has visited my website yet => ',res.data) });
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/five_min_u').then(res => { console.log('user 5 min visited => ',res.data) }); },60000*5);
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/ten_min_u').then(res => { console.log('user 10 min visited => ',res.data) }); },60000*10);
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/twenty_min_u').then(res => { console.log('user 20 min visited => ',res.data) }); },60000*20);
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/thirty_min_u').then(res => { console.log('user 30 min visited => ',res.data) }); },60000*30);
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/forty_min_u').then(res => { console.log('user 40 min visited => ',res.data) }); },60000*40);
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/fifty_min_u').then(res => { console.log('user 50 min visited => ',res.data) }); },60000*50);
		// 	setTimeout(() => { this.$axios.get('http://localhost:8000/api/codehubGet/onehour_min_u').then(res => { console.log('user 1h min visited => ',res.data) }); },60000*60);
		// },
		methods: {
			goDonld (obj) { this.now_dnld = obj;this.page = 'download'; },
		},
	}
</script>
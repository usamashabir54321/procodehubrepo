<template>
	<div class="page position-absolute t-0 w-100">
		<div class="row no-gutters minh-100vh">
			<div class="col-lg-9 order-1 order-lg-0 page-content pt-6 pt-lg-0">
				<section class="pt-5 pb-0 text-center">
					<div class="container">
						<div class="row justify-content-center mt-5" id="boots4-story">
							<div class="col-lg-10">
								<div class="text-center mb-5 mb-lg-6">
									<h2 class="fs-2 fs-sm-3"><span class="text-success">WEB</span> PLUGINS</h2><hr class="hr-ornate" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="pt-0 text-center">
					<div class="container pl-5 pr-5">

							<!-- CALLING GAMING CARDS COMPONENTS -->
						<LazyPagesCardsCard :cards="cards" page="plugins"/>

						<div class="row justify-content-center pt-5 mb-4">
							<div class="col">
								<h2 class="fs-2 fs-sm-3"><span class="text-success">WEB</span> PLUGINS</h2><hr class="hr-ornate" /><br>
								<a class="btn btn-primary rounded mt-2 shadow-sm" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">GO PLAYLIST</a>
							</div>
						</div>

					</div>
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
					<span @click="$emit('goPage')" class="btn-close"><img class="d-none d-lg-block times" src="web/assets/img/times.svg" width="25" alt=""/><img class="d-lg-none" src="web/assets/img/times-black.svg" width="18" alt=""/></span>
					<div class="bg-holder" style="background-image:url(web/assets/img/sidebars/about.jpg);"></div>
					<h1 class="page-title">PLUGINS PAGE</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				cards: [
						/*PLUGINS INVENTORY RECORD*/
					{src: 'https://www.youtube.com/embed/4z51NvdLI3Y/?autoplay=1&mute=1&loop=1&playlist=4z51NvdLI3Y' ,title: 'Snow Effect Plugin', link: 'snow-effect'},

				],
			}
		},
	}
</script>
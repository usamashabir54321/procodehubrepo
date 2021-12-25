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
									<h1 class="font-weight-medium fs-3 fs-sm-4"><span class="text-success">PRO</span> CODE HUB</h1>
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
				<!-- PLUGINS PAGE -->
			<transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
				<LazyPagesPlugins v-if="page == 'plugins'" @goPage="page = ''"/>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				page: '',
			}
		},
	}
</script>
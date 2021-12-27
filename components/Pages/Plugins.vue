<template>
	<div class="container pl-5 pr-5">
		<!-- PAGE HEADER -->
		<div class="row justify-content-center pt-5 mb-4">
			<div class="col">
				<h2 class="fs-2 fs-sm-3"><span class="text-success">WEB</span> PLUGINS</h2><hr class="hr-ornate" /><br>
				<a class="btn btn-primary rounded mt-1 shadow-sm" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">GO PLAYLIST</a>
			</div>
		</div>
		<div class="row justify-content-center">
				<!-- ITEM CARDS -->
			<div v-for="(obj , index) in cards" :key="index" class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
				<div class="c_cards text-center">
					<div class="img-container">
						<iframe :src="obj.src" class="c_m_item video" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;fullscreen;clipboard-write;encrypted-media;gyroscope;picture-in-picture"></iframe>
					</div>
					<div class="text-container">
						<h3 class="text-success mt-2 mb-3">{{ obj.title }}</h3>
						<div class="mt-3">
							<a :href="`/plugins/${obj.link}`" target="_blank"><button class="btn btn-danger mr-2">Preview</button></a>
							<button v-if="!is_donld" onclick="alert('Downloading button will be enabled after completing videos.')" class="btn btn-dark">Download</button>
							<button v-else @click="$emit('goDonld',obj)" class="btn btn-success">Download</button>
						</div>
					</div>
				</div>
			</div>
		</div>
			<!-- PAGE FOOTER -->
		<div class="row justify-content-center pt-5 mb-4">
			<div class="col">
				<h2 class="fs-2 fs-sm-3"><span class="text-success">WEB</span> PLUGINS</h2><hr class="hr-ornate" /><br>
				<a class="btn btn-primary rounded mt-2 shadow-sm" href="https://www.youtube.com/channel/UCOZXtDKHb2e12KLHtUbJNGQ" target="_blank">GO PLAYLIST</a>
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
					{src: 'https://www.youtube.com/embed/z_O01q7wtkg/?autoplay=1&mute=1&loop=1&playlist=z_O01q7wtkg' ,title: 'Snow Effect Plugin', link: 'snow-effect', zip: '/plugins/snow_effect_plugin.zip', time:'2'},
				],
				is_donld: false,
			}
		},
		mounted () {
			setTimeout(() => { this.is_donld = true; },60000*1.8);
		},
	}
</script>
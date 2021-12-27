<template>
	<div id="common_vids">
		<div v-if="is_videos" class="row justify-content-center">
			<div v-for="(obj , index) in cards" :key="index" class="col-sm-12 col-md-6 col-lg-3">
				<iframe :src="obj.src" class="c_m_item video" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;fullscreen;clipboard-write;encrypted-media;gyroscope;picture-in-picture"></iframe>
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
				is_videos: false,
			}
		},
		mounted () {
			setTimeout(() => { this.is_videos = true; },5000);
		},
	}
</script>

<style scoped>
	div#common_vids {position: absolute;}
</style>
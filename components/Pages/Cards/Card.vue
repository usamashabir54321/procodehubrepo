<template>
	<div class="row justify-content-center">

		<div v-for="(obj , index) in cards" :key="index" class="col-sm-12 col-md-6 col-lg-3">
			<div class="c_cards text-center">
				<div class="img-container">
					<!-- autoplay loop muted -->
					<iframe :src="obj.src" class="c_m_item video" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;fullscreen;clipboard-write;encrypted-media;gyroscope;picture-in-picture"></iframe>
				</div>
				<div class="text-container">
					<h3 class="text-success mt-2 mb-3">{{ obj.title }}</h3>
					<div class="mt-3">
						<a :href="`/${page}/${obj.link}`" target="_blank"><button class="btn btn-danger mr-2">Preview</button></a>
						<button class="btn btn-success">Download</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['cards','page'],
	}
</script>
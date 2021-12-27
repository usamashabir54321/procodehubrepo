<template>
	<div id="my_web_id">
		<LazyCommonVideos />
		<main><Nuxt keep-alive /></main>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				title: 'PRO CODE HUB WEB',
				link: [
					{ rel: 'stylesheet' , type: 'text/css' , href: 'web/assets/css/theme.css' },
					{ rel: 'stylesheet' , type: 'text/css' , href: 'web/assets/css/animate.min.css' },
				],
			}
		},
	}
</script>

<style>
	.c_cards .img-container {
		height: 90%;
		width: 90%;
		margin-top: 20px;
		overflow: hidden;
		border-radius: 20px;
		display: inline-block;
	}
	.c_cards .img-container .c_m_item {
		border-radius: 20px;
		overflow: hidden;
		padding: 0px;
	}
	.c_cards .img-container img {width: 80%;}
	.c_cards .img-container .video {width: 100%;}
	.c_cards .text-container {
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
		padding: 120px 20px 20px 20px;
		border-radius: 20px;
		background: #fff;
		margin: -120px 0px 0px 0px;
		line-height: 19px;
		font-size: 14px;
	}
	.c_cards .text-container button {padding: 12px 14px;}
	#home_vid_iframe {position: absolute;z-index: 1;}
	#home_overlay {
		z-index: 3;
	    background-color: white;
	    position: relative;
	}
	@media screen and (max-width: 400px) {
		.c_cards .text-container button {
			padding: 12px 7px;
			font-size: 8px;
			font-weight: 900;
		}
		.c_cards .text-container h3 {
			font-size: 22px;
			font-weight: 700;
		}
		.c_cards .text-container {margin: -110px 0px 0px 0px;}
	}
</style>
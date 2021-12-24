<template>
	<main>
        <section class="block_wrapper" style="padding-top: 2rem;">
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col-sm-12">
                        <div class="row justify-content-center">
                            <div id="konfigurator" class="col-md-10 col-lg-7">
                                <label>Snow Amount</label>
                                <div id="slider_amount"></div>
                                <label>Whirl</label>
                                <div id="slider_turbulence"></div>
                                <label>Falling Speed</label>
                                <div id="slider_rateOfFall"></div>
                                <div class="form-group row">
                                    <label class="col-3" for="setMist">Background Fog</label>
                                    <div class="col-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="setMist" checked>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-3 col-form-label" for="setBgrClouds">Clouds</label>
                                    <div class="col-9">
                                        <select class="form-control" id="setBgrClouds">
                                            <option value="">none</option>
                                            <option value="./wolken1.png" selected>normal</option>
                                            <option value="./wolken3.png">strong</option>
                                            <option value="./wolken4.png">smooth</option>
                                            <option value="./wolken5.png">white</option>
                                            <option value="./wolken2.png">blue</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-3" for="setFlash">Thunderstorm</label>
                                    <div class="col-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="setFlash">
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <p class="text-muted">With our Configurator for the JavaScript “SnowEffect” you can configure the snow according to your preferences. Whether you want a
                                whirling blizzard or calm, meditative falling snow, we offer snow flakes of every variety for your homepage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
	export default {
		layout: 'plugins/default',
		head() {
			return {
				title: 'SNOW EFFECT PLUGIN',
				link: [
					{ rel: 'stylesheet', href: '/web/plugins/snow_effect/css/bootstrap.min.css', },
					{ rel: 'stylesheet', href: '/web/plugins/snow_effect/css/jquery-ui.min.css', },
				],
				script: [
					{ src: '/web/plugins/snow_effect/js/jquery/3.3.1/jquery.min.js' },
					{ src: '/web/plugins/snow_effect/js/popper.js/1.14.7/umd/popper.min.js' },
					{ src: '/web/plugins/snow_effect/js/bootstrap.min.js' },
					{ src: '/web/plugins/snow_effect/js/jquery.ui.touch-punch.min.js' },
					{ src: '/web/plugins/snow_effect/js/jquery-ui.min.js' },
					{ src: '/web/plugins/snow_effect/js/snow-effect.js' , defer: 'defer' },
				],
			}
		},
	}
</script>

<style scoped>
	main {
		background: url("/web/plugins/snow_effect/images/christmas-cute-macro-40541.jpg") no-repeat;
		background-size: cover;
		font-size: 15px;
		height: 100vh;
	}
	#konfigurator {
		border: 2px solid #6a9cc0;
		background-color: rgba(203, 218, 232, 0.7);
		padding: 15px;
		margin-bottom: 3rem;
		margin-top: 30px;
		z-index: 10;
		max-width: 500px;
	}
	.ui-slider {
		margin-bottom: 0.7rem;
	}
	.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {
		border: 1px solid #5e8bab !important;
		background: #6a9cc0 !important;
	}
</style>
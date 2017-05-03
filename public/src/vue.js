
import Vue from 'vue/dist/vue';
import $ from 'jquery';
// import Tone from 'tone';
import song from './wavesurfer';

// console.log(song.on('region-click'));
song.on('ready', function () {
	vue.loading=false;
});
song.on("loading", function (data) {
    console.log(data);
    vue.percentage = data	;
})


document.body.onkeydown =function(e){
	if (e.keyCode == 32) {
		vue.play()
	}
};


// var form = Vue('vue', {
// 	template = ``
// });

var vue = new Vue({
	el:'#root',
	data:{
		token : "0unwI4CsQTXdXFlAu8Vj3IaCkZHEgC3H0OA4oCVl",
		json: null,
		instrument: "",
		percentage: null,
		url : "./audio/song.mp3",
		song : song,
		loading: true,
		playing: false,
		stopped: false,
		waitMsg: "play ?",
		loadMsg: "please fill a path and press enter... ",
		playMsg: "stop ?",
		// api: "//www.youtubeinmp3.com/fetch/?video="
	},
	methods:{
		ajax:function() {
			var json = this.json;
			$.getJSON("//freesound.org/apiv2/search/text/?token="+this.token+"&query="+this.instrument)
			.done(function(data){
				if(data.count==0){
					this.json="no data, poor boy";
				}else{
					this.json="waiting for load";
					var io = data.results[0].id;
					console.log(io);
					$.get("//freesound.org/apiv2/sounds/"+io+'/?token='+this.token,function(data){
						console.log(typeof data);
						console.log(data);
						console.log(data.previews['preview-hq-mp3']);
						this.song.load(data.previews['preview-hq-mp3'])
					}.bind(this));
				}
			}.bind(this))
			.fail(function(){
				json="sum'fing went wrong boy";
			}.bind(this))
		},
		fetch:function(ev){
			this.loading = true;

			this.song.load(this.url);
		},
		play:function(){
			if(!this.loading){
				if(this.playing){
					this.song.pause();
					this.playing=false;
				}
				else {
					this.song.play();
					this.playing=true;
				}
			};
		}		
	},
	computed:{
		message : function(){
			return 	this.loading ? this.loadMsg : 
				this.playing ? this.playMsg : 
				this.waitMsg;
		},
		jsonView: function(){
			if(!this.json){
				return "pas de retour";
			}else{
				return	this.json;
			}
		}
	}
});

module.exports = vue;
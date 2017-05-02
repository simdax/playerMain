
import Vue from 'vue/dist/vue';
import $ from 'jquery';
// import Tone from 'tone';
import song from './wavesurfer';

// console.log(song.on('region-click'));
song.on('ready', function () {
	console.log("HEUUUU");
	vue.loading=false;
});

document.body.onkeydown =function(e){
	if (e.keyCode == 32) {
		vue.play()
	}
};


var vue = new Vue({
	el:'#root',
	data:{
		url : "./audio/song.mp3",
		song : song,
		loading: true,
		playing: false,
		stopped: false,
		waitMsg: "play ?",
		loadMsg: "loading... ",
		playMsg: "stop ?",
		// api: "//www.youtubeinmp3.com/fetch/?video="
	},
	methods:{
		fetch:function(ev){
			this.loading = true;
			console.log(this.url);
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
		}
	}
});

module.exports = vue;
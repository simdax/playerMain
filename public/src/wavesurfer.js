// import WaveSurfer from "wavesurfer";
// import "wavesurfer/plugin/wavesurfer.regions";

import Pairs from "./pairs";

var wavesurfer = WaveSurfer.create({
    container: '#wave',
    waveColor: 'violet',
    progressColor: 'purple'
});

wavesurfer.enableDragSelection({});
wavesurfer.on('play',function(){
	
	var regions = wavesurfer.regions.list;
	var list = [];
	var keys = Object.keys(regions);
	console.log(keys);
	for (var i = 0; i < keys.length; i++) {
		var el = regions[keys[i]];
		list.push(new Pairs(el.start,el.end));
	}
		
})


module.exports = wavesurfer;
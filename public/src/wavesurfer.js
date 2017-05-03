// // import WaveSurfer from "wavesurfer";
// // import "wavesurfer/plugin/wavesurfer.regions";

// import Pairs from "./pairs";

// var wavesurfer = WaveSurfer.create({
//     container: '#wave',
//     waveColor: 'violet',
//     progressColor: 'purple'
// });

// wavesurfer.on('play',function(){
	
// 	var regions = wavesurfer.regions.list;
// 	var list = [];
// 	var keys = Object.keys(regions);
// 	console.log(keys);
// 	for (var i = 0; i < keys.length; i++) {
// 		var el = regions[keys[i]];
// 		list.push(new Pairs(el.start,el.end));
// 	}
		
// })




import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
// import MinimapPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js';
// import SpectrogramPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.spectrogram.min.js';
// import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.min.js';
// import ElanPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.elan.min.js';


// ... initialising waveform with plugins
var wavesurfer = WaveSurfer.create({
    container: '#wave',
    waveColor: 'violet',
    plugins: [
        // SpectrogramPlugin.create({
        //     container:"#iu"
        // }),
        RegionPlugin.create(
        {    dragSelection: true}
        ),
        TimelinePlugin.create({
            container:"#timeline"
        }),
        // MinimapPlugin.create()
    ]
});

// wavesurfer.enableDragSelection({});
module.exports = wavesurfer;


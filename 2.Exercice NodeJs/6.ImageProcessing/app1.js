var images = require("images");
const spawn = require( 'child_process' ).spawn;

var rand = Math.floor(Math.random() * 100000) + 1;

var file = 'movie_avec_logo' + rand + '.mp4';

images("img/logo.png").size(200).save("img/logo_small.png", {});

var ffmpeg = spawn( 'ffmpeg', ['-i', 'movie/resultx264.mp4', '-i',
'img/logo_small.png', '-filter_complex' ,'overlay=W-w-5:H-h-5', '-b:v' ,'3000k' ,
  '-s' ,'720x480'  , '-codec:v', 'h264' ,  '-fs','20M',file ] );
/*
ffmpeg.stdout.on( 'data', function(data) {
    console.log( `stdout: ${data}` );
});

ffmpeg.stderr.on( 'data', function(data) {
    console.log( `stderr: ${data}` );
});

ffmpeg.on( 'close', function(code) {
    console.log( `child process exited with code ${code}` );
});
*/
//ffmpeg -i movie/resultx264.mp4 -i output.png -filter_complex "overlay=W-w-5:H-h-5" -b:v 3000k -s 720x480 -codec:v h264 -fs 20M movie_avec_logo.mp4

var fs = require('fs');
 
var taille = 0;

function printMP3(path,extension){
	var files = fs.readdirSync(path);
	//console.log(files);
	    for (var i=0; i<files.length; i++) {
	 	var file = path + '/' + files[i];
		var stat = fs.lstatSync(file);
		if (stat.isDirectory()){
			printMP3(file,extension);
			//console.log('repertoire');
			//console.log("Start: " + file); 

		}
		else{
			if (file.toLowerCase().endsWith(extension)){
				//console.log(file + " : "+ stat["size"]);
				taille = taille + stat["size"];
			}

		}
	    }
}

 
if (process.argv.length <= 3) {
    console.log("Usage: " + __filename + " path/to/directory" + " ext");
    process.exit(-1);
}
 
var path1 = process.argv[2];
var ext = process.argv[3];
 
printMP3(path1,ext);

function formatSizeUnits(bytes){
        if      (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
        else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
        else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
        else if (bytes>1)           {bytes=bytes+' bytes';}
        else if (bytes==1)          {bytes=bytes+' byte';}
        else                        {bytes='0 byte';}
        return bytes;
}

console.log("taille totale = " + formatSizeUnits(taille));




'use strict'

var watcher = new require('./file_size_watcher.js');

watcher.on('error', function(err){
	console.log('Error watching file: ' + err);
});

watcher.on('grew', function(gain){
	console.log('File grew by', gain, 'bytes');
});

watcher.on('shrank',function(loss){
	console.log('File shrank by', loss, 'bytes');
});

watcher.stop();

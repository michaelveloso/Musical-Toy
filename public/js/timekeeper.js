var setTimeInterval;

tempo = 150
// beats_per_measure = 4
time_interval = 1000
ms_per_whole = (60/tempo) * 4 * 1000.0
ms_per_half = ms_per_whole / 2.0
ms_per_quarter = ms_per_whole / 4.0
ms_per_eighth = ms_per_whole / 8.0
ms_per_sixteenth = ms_per_whole / 16.0
// var queue_index = 0;

var setTimeInterval = function(interval){
  time_interval = interval
}

setTimeInterval(ms_per_eighth);

setInterval(function(){
  play_from_queue()
}, time_interval);

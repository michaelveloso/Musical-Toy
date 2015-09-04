tempo = 150
// beats_per_measure = 4
time_interval = 1000
ms_per_whole = (60/tempo) * 4 * 1000.0
ms_per_half = ms_per_whole / 2.0
ms_per_quarter = ms_per_whole / 4.0
ms_per_eighth = ms_per_whole / 8.0
ms_per_sixteenth = ms_per_whole / 16.0
// var queue_index = 0;

// var setTimeInterval = function(interval){
//   setInterval(function(){
//     play_from_queue()
//   }, interval);
// }

var timer = {
    running: false,
    iv: 5000,
    timeout: false,
    cb : function(){},
    start : function(cb,iv){
        var elm = this;
        clearInterval(this.timeout);
        this.running = true;
        if(cb) this.cb = cb;
        if(iv) this.iv = iv;
        this.timeout = setTimeout(function(){elm.execute(elm)}, this.iv);
    },
    execute : function(e){
        if(!e.running) return false;
        e.cb();
        e.start();
    },
    stop : function(){
        this.running = false;
    },
    set_interval : function(iv){
        clearInterval(this.timeout);
        this.start(false, iv);
    }
};

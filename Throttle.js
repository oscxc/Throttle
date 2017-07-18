function Throttle(interval,callback) {
    var time;
    this.filter = function (args) {
        if(time&&new Date()-time<interval)
            return;
        time = new Date();
        args?callback(args):callback();
    };
}

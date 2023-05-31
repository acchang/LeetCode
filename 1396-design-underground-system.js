// Inspired by, understood:
// https://www.youtube.com/watch?v=OQc3OpHOWBY


var UndergroundSystem = function() {
    this.checkInObj = {}
    this.checkOutObj = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkInObj[id] = {
        'stationName':stationName,
        't': t 
    }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if (!this.checkInObj[id]) return;
    let startStation = this.checkInObj[id]['stationName'];
    let checkInTime = this.checkInObj[id]['t'];
    let path = startStation + '-' + stationName;
    if (!this.checkOutObj[path]) {
        this.checkOutObj[path] = {
            'totalTime' : t - checkInTime,
            'freq': 1
        }
    } else {
        this.checkOutObj[path]['totalTime'] += t - checkInTime;
        this.checkOutObj[path]['freq'] ++;
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let path = startStation + "-" + endStation;
    let totalTime = this.checkOutObj[path]['totalTime'];
    let freq = this.checkOutObj[path]['freq'];
    console.log(path, totalTime, freq)
    return totalTime/freq;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
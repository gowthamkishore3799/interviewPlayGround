var insert = function(intervals, newInterval) {
    let [newStart, newEnd] = newInterval, left=[], right =[]

    for(let [start, end] of intervals){
        if(end< newStart) {
            left.push([start,end])
        } else if(start>newEnd){
            right.push([start,end])
        } else {
            newStart = Math.min(start, newStart);
            newEnd = Math.max(end, newEnd)
        }
    }
    return [...left,[newStart, newEnd], ...right]
};
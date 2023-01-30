/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {    
    let index = 0;
    let pAndI = [];
    for(let eachPoint of points){
        let distance = Math.sqrt(Math.pow((eachPoint[0] - 0), 2) + Math.pow((eachPoint[1] - 0), 2))
        pAndI.push({
            "index": index,
            "distance": distance
        });
        index++;
    }
    pAndI.sort((a, b) => a.distance - b.distance);
    let result = [];
    for (let i = 0; i < k; i++){
        result.push(points[pAndI[i]["index"]]);
    }
    return result;
};
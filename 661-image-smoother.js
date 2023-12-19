/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let smoothImgInner = new Array(img[0].length).fill(0)
    let smoothImg = new Array(img.length).fill(smoothImgInner)

    for (let m=0; m<img.length;m++){
        for (let n=0; n<img[0].length;n++){
// this puts each space in the matrix at the center
            let count = 0
            let total = 0
// then we iterate through the surrounding spaces

            if (img[m-1][n-1]){total += img[m-1][n-1]; count++}
            if (img[m-1][n]){total += img[m-1][n]; count++}
            if (img[m-1][n+1]){total += img[m-1][n+1]; count++}
            if (img[m][n-1]){total += img[m][n-1]; count++}
            if (img[m][n+1]){total += img[m][n+1]; count++}
            if (img[m+1][n-1]){total += [m+1][n-1]; count++}
            if (img[m+1][n]){total += [m+1][n]; count++}
            if (img[m+1][n+1]){total += [m+1][n+1]; count++}
            smoothImg[m][n]=Math.floor(total/count)
            // console.log(smoothImg)
        }
    }
    return smoothImg
};

////

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        // Initialize the sum and count 
        let sum = 0;
        let count = 0;

        // Iterate over all plausible nine indices.
        for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
                // If the indices form valid neighbor
                if (0 <= x && x < m && 0 <= y && y < n) {
                    sum += img[x][y];
                    count += 1;
                }
            }
        }


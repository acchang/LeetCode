/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let smoothImgInner = new Array(img[0]).fill(0)
    let smoothImg = new Array(img.length).fill(smoothImgInner)

    for (let m=0; m<m.length;m++){
        for (let n=0; n<n.length;n++){
            let count = 1
            let total = 0
            if (img[m-1][n-1]){total += img[m-1][n-1]; count++}
            if (img[m-1][n]){total += img[m-1][n]; count++}
            if (img[m-1][n+1]){total += img[m-1][n+1]; count++}
            if (img[m][n-1]){total += img[m][n-1]; count++}
            if (img[m][n+1]){total += img[m][n+1]; count++}
            if (img[m+1][n-1]){total += [m+1][n-1]; count++}
            if (img[m+1][n]){total += [m+1][n]; count++}
            if (img[m+1][n+1]){total += [m+1][n+1]; count++}
            smoothImg[m][n]=total/count
        }
    }
    return smoothImg
};
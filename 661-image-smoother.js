var imageSmoother = function(img) {

// the wrong part is here:
    let smoothImgInner = new Array(img[0].length).fill(0)
    let smoothImg = new Array(img.length).fill(smoothImgInner)

    for (let i=0; i<img.length ; i++){
        for (let j=0; j <img[0].length; j++){
// this puts each space in the matrix at the center, target=img[m][n]
            let total = 0
            let count = 0
// then we iterate through the surrounding spaces
        // for (let x = n-1; x<n+1; x++){
        //         for (let y = m-1; y<m+1; y++){
        //             if (x>-1 && x<img[0].length && y>-1 && y<m.length){
        //                 console.log(img[x][y])
        //                 // total+=img[x][y]; count++
        //             }
        //         }
        //     }

  for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
            // If the indices form valid neighbor
            if (0 <= x && x < img.length && 0 <= y && y < img[0].length) {
                total += img[x][y];
                count +=1;
                    }
                }
            }

            smoothImg[i][]=Math.floor(total/count)
        }
    }
    return smoothImg
};


///

var imageSmoother = function(img) {
    const smoothImg = new Array(img.length).fill(0).map(() => new Array(img[0].length).fill(0));
    for (let i=0; i<img.length ; i++){
        for (let j=0; j <img[0].length; j++){
            let total = 0
            let count = 0

  for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
            // If the indices form valid neighbor
            if (0 <= x && x < img.length && 0 <= y && y < img[0].length) {
                total += img[x][y];
                count +=1;
                    }
                }
            }
    smoothImg[i][j]=Math.floor(total/count)
        }
    }
    return smoothImg
}
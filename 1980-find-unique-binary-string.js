/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length
    let template = new Array(n).fill(0)
        let testValue = template.join("");
        console.log("FTV", testValue)
        if (!nums.includes(testValue)){return testValue}
    for (let i=0; i<template.length;i++){
        if (template[i] == 0){template[i]=1}
        testValue = template.join("");
        console.log("FTV", testValue)
        if (!nums.includes(testValue)){return testValue}
    }
};

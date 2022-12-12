/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // Split on slash ... remove all slashes for the middle
    let s = path.split('/');

    // Filter out empty strings, ie "/home/" is "", "home", ""
    s = s.filter((el)=>el!=='');
    
    const answer = [];
    
    
    for(const el of s){        
        if(el === '.'){
        
            // do nothing
        }else if(el === '..'){
            answer.pop(); // In JavaScript no need to check whether the array is empty or not before popping
            // for path = "/a/./b/../../c/"
            // pop takes out the last element put in answer
            // s is  ['a', '.', 'b', '..', '..', 'c']
            // without popping it would be a/b/c
        }else        
        {
            answer.push(el);
        }
    }
    
    return '/' + answer.join('/');
};

/*
path =
"/a/./b/../../c/"
88 / 257 testcases passed
Output
"/a/b/c"
Expected
"/c"
Stdout
[ 'a', '.', 'b', '..', '..', 'c' ]


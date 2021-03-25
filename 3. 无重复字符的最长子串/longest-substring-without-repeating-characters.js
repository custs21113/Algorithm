/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let index =0;
    let n = s.length;
    for(let start = 0, end = 0; end < n; end ++){
        let ch = s[end]
        if(map.has(ch)){
            start = Math.max(map.get(ch),start)
        }
        index = Math.max(index, end - start +1)
        map.set(ch, end + 1)
    }
    return index
};
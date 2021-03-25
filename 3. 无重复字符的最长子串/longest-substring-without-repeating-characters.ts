/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s:string):number {
    let map: Map<string, number> = new Map();
    let index: number =0;
    let n: number = s.length;
    for(let start: number = 0, end: number = 0; end < n; end ++){
        let ch: string = s[end]
        if(map.has(ch)){
            start = Math.max(map.get(ch),start)
        }
        index = Math.max(index, end - start +1)
        map.set(ch, end + 1)
    }
    return index
};
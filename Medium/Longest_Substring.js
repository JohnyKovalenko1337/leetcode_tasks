//Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s)=> {
    const map = new Map();
  
    let longest = 0, j = 0, i = 0, n = s.length;
    
    while(i < n){
      if(map.get(s[i]) >= j){
        j = map.get(s[i])+1
      }
      map.set(s[i], i);
      longest = Math.max(longest, i-j+1);
      i++;
    }
    return longest;

};
lengthOfLongestSubstring("dfkmdfk");
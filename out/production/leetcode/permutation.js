function buildPrimaryStringOccurence(str) {
    let occurence = new Map();
    for (let i = 0; i < str.length; i++) {
      occurence.set(str[i], (occurence.get(str[i]) || 0) + 1);
    }
    return occurence;
  }
  
  function checkInclusion(s1, s2) {
    if (s2.length < s1.length) return false;
  
    const need = buildPrimaryStringOccurence(s1);
    const window = new Map();
    let valid = 0;
    let left = 0, right = 0;
  
    while (right < s2.length) {
      const c = s2[right];
      right++;
  
      if (need.has(c)) {
        window.set(c, (window.get(c) || 0) + 1);
        if (window.get(c) === need.get(c)) valid++;
      }
  
      while (right - left >= s1.length) {
        if (valid === need.size) return true;
  
        const d = s2[left];
        left++;
  
        if (need.has(d)) {
          if (window.get(d) === need.get(d)) valid--;
          window.set(d, window.get(d) - 1);
        }
      }
    }
  
    return false;
  }
  
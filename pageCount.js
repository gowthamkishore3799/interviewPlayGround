function pageCount(n, p) {
    // Write your code here
    
    let pageCountFromfirst = Math.floor(p/2);
    let pageCountFromLast = n%2 != 0? Math.floor((n-p)/2) : Math.ceil((n-p)/2);
    

    
    
    
    
    return pageCountFromLast < pageCountFromfirst ? pageCountFromLast : pageCountFromfirst;
}
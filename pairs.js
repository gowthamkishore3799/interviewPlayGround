// B. Pairs, CF #562 (Div. 2)
// https://codeforces.com/contest/1169/problem/B



function isEqual (x, y , pairs){



    for(let pair of pairs){
        let [a,b] = pair;

        if(x==a || x==b || y==a || y==b){
            return true
        }
    }
    return false
}


  function canFindPairs (n, m, pairs){


    for(let x of [pairs[0][0], pairs[0][1]]){



        for(let pair of pairs){
            let [a, b] = pair;


            if(isEqual(x, a, pairs) || isEqual(x, b)){
                return "YES"
            }
        }

    }

    return "NO"
  }
  
  const n = 5;
  const m = 4;
  const pairs = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ];
  
  console.log(canFindPairs(n, m, pairs));  // Output: YES
var subsets = function (nums) {
    let results = [[]]; // Start with an empty subset

    for (let num of nums) {
        let newSubsets = [];
        for (let subset of results) {
            newSubsets.push([...subset, num]);
        }
        results.push(...newSubsets); // Add the new subsets to the results
    }

    return results;
};
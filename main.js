const {parseWithComments} = require('jest');
console.log("///////1///////");

    function dividedBy(x){
        let s = "";
        for (var i = 1; i <= x; i++){
        
            switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                s += "fishbash";
                break;
            default:
                s += (i % 3 === 0) ? "fish" : (i % 5 === 0) ? "bash" : i.toString();
            }
        }
        return s;
    }
console.log("\n///////2///////");

    const numbers = [5, 2, 8, 1, 9,7,5,3,8,1,2,5,3];
    
    console.log("Original:", numbers);
    
    sort(numbers, true);
    console.log("Ascending:", numbers);
    
    sort(numbers, false);
    console.log("Descending:", numbers);
    
    function sort(numbers, ascent) {
        // Menghitung panjang array tanpa menggunakan fungsi javascript
        let n = 0;
        for (let element of numbers) {
            n++;
        }
        const resArray = [...numbers];
    
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if ((ascent && resArray[j] > resArray[j + 1]) || (!ascent && resArray[j] < resArray[j + 1])) {
                    const temp = resArray[j];
                    resArray[j] = resArray[j + 1];
                    resArray[j + 1] = temp;
                }
            }
        }
        console.log(typeof resArray)
        return resArray;
    }

console.log("\n///////3///////");
    console.log("kasur rusak: " + isPalindrome("kasur rusak"));
    console.log("A man, a plan, a canal, Panama: " + isPalindrome("A man, a plan, a canal, Panama"));
    console.log("hoho hihe: " + isPalindrome("hoho hihe"));
    
    function isPalindrome(str) {
        let lowAlpha = "";

        for (const c of str) {
            if (c.toUpperCase() != c.toLowerCase()) {
                lowAlpha += c.toLowerCase(); // Convert characters to lowercase
            }
        }
        
        let left = 0;
        let right = lowAlpha.length - 1;
    
        while (left < right) {
            if (lowAlpha[left] !== lowAlpha[right]) {
                return false;
            }
    
            left++;
            right--;
        }
    
        return true;
    }

    module.exports = {
        dividedBy: dividedBy,
        sort: sort,
        isPalindrome: isPalindrome,
    };
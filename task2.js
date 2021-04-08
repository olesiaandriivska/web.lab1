//2. Написати функцію, яка поверне усі перестановки слова
let word='abcd';

function perest(s){
    let p = [s];
    if(s.length === 2) { return [s[0] + s[1], s[1] + s[0]]; }
    for(let x = 0; x < s.length; x++) {
        let ss = Array.from(s);
        ss.splice(x, 1);
        let a = perest(ss.join(""));
        for(let y = 0; y < a.length; y++) {
            p.push(s[x] + a[y]);
        }
    }
    return p;
}

function stringPermutations(s) {
    let p = perest(s);
    return Array.from(new Set(p)).sort();
}

console.log(stringPermutations(word));








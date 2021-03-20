function test (s) {
    if (s.length % 2 === 1) {
        return false
    }
    if (s.length === 0) {
        return true
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
        } else {
            let top = stack[stack.length - 1]
            if (
                (c === ')' && top === '(') || 
                (c === '}' && top === '{') || 
                (c === ']' && top === '[')
            ) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}

let str = '()'
let result = test(str)
console.log(result)
'''
    Parens Valid
	Create a function that, given an input string str , returns a boolean whether parentheses in str are valid. Valid sets of parentheses always open before they close.
	Examples:
	Input: "Y(3(p)p(3)r)s"
	Output: true 
	Input: "N(0(p)3"
	Output: false - not every parenthesis is closed. 
	Input: "N(0)t ) 0(k"
	Output: false - because the underlined ")" is premature: there is nothing open for it to close.
	Input: "a(b))(c"
	Output: false
    - same number of opens and closes but the 2nd closing closes nothing

'''


def parens_valid(str):
    opening = 0
    closing = 0
    for char in str:
        if char == "(":
            opening += 1
        elif char == ")":
            closing += 1
            if closing > opening:
                return False
    return opening == closing


print("-----Parens Valid-----")
print(parens_valid("Y(3(p)p(3)r)s"))
print(parens_valid("N(0(p)3"))
print(parens_valid("N(0)t ) 0(k"))
print(parens_valid("a(b))(c"))

# By Alex & Nick


def parens_valid_two(str):
    valid = 0
    for char in str:
        if valid < 0:
            return False
        elif char == "(":
            valid += 1
        elif char == ")":
            valid -= 1
    return valid == 0


'''
Braces Valid
Given a sequence of parentheses, braces and brackets, determine whether it is valid.
Examples:
    Input: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"
    Output: true
    Input: "D(i{a}l[ t]o)n{e"
    Output: false
    Input: "A(1)s[O (n]0{t) 0}k"
    Output: false
'''


def braces_valid(str):
    temp = []
    dict = {')': '(', '}': '{', ']': '['}
    for char in str:
        if char in dict.values():
            temp.append(char)
        elif char in dict.keys():
            if dict[char] != temp[len(temp)-1]:
                return False
            else:
                temp.pop()
    return len(temp) == 0


print("-----Braces Valid-----")
print(braces_valid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
print(braces_valid("D(i{a}l[ t]o)n{e"))
print(braces_valid("A(1)s[O (n]0{t) 0}k"))

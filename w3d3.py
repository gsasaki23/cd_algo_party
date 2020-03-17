''' 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  Input: "a x a" or "racecar"
  Output: return true
  Input: "Dud" or "oho!"
  Output: return false .
  Do not ignore spaces, punctuation and capitalization
'''
import math

def isPalindrome(str):
    if len(str) < 0:
        return False
    for i in range(math.floor(len(str)/2)):
        if str[i] != str[len(str)-1-i]:
            return False
    return True
    
print(isPalindrome("racecar"))
print(isPalindrome("a x a"))
print(isPalindrome("Dud"))
print(isPalindrome("oho!"))

'''
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Input: "what up, daddy-o?"
  Output: "dad"
  Input: "uh... not much"
  Output: "u"
  Input: "Yikes! my favorite racecar erupted!"
  Output: "e racecar e"
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
'''

def longest_palindrome(str):
    longest = str[0]
    for idx in range(len(str)):
        for pointer in range(idx+1,len(str)):
            sub = str[idx:pointer]
            if len(sub) > len(longest) and isPalindrome(sub):
                longest = sub
    return longest

print(longest_palindrome("what up, daddy-o?"))
print(longest_palindrome("uh... not much"))
print(longest_palindrome("Yikes! my favorite racecar erupted!"))
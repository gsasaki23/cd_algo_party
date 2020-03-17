'''
  Invert Hash
  Associative arrays are also called hashes (we'll learn why later).
  Just think of a hash as an object / dictionary for now.
  Build invertHash(hashTable) to swap hash keys to values, and values to keys.
  Given: {"name": "Zaphod", "charm": "high", "morals": "dicey"}
  return: object {"Zaphod": "name", "high": "charm", "dicey": "morals"}.
'''

def invert_hash(dict):
    answer = {}
    for key, values in dict.items():
        answer[values] = key
    return answer


print(invert_hash({"name": "Zaphod", "charm": "high", "morals": "dicey"}))
print(invert_hash({}))


'''
  Zip Arrays into Map
  Associative arrays are sometimes called maps because a key (string) maps to a value.
  Given two arrays, create an associative array (map) containing keys from first array, and values from the second.
  Given: ["abc", 3, "yo"], [42, "wassup", true]
  return {"abc": 42, 3: "wassup", "yo": true}
 '''

# Assuming 2 arrays are same length and non-zero
def array_to_map(arrA, arrB):
    answer = {}
    for idx in range(len(arrA)):
        answer[arrA[idx]] = arrB[idx]
    return answer

print(array_to_map(["abc", 3, "yo"], [42, "wassup", True]))

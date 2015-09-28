import string

example_one = '11251'

ALPHA_MAX = len(string.lowercase)

def calculate_perms(input_str):

  if len(input_str) == 0:
    return []

  if len(input_str) == 1:
    return [[input_str[0]]]

  if len(input_str) == 2:
    first_digit = int(input_str[0])
    second_digit = int(input_str[1])
    whole = int(input_str)

    combo1 = []
    if whole < ALPHA_MAX:
      combo1 = [input_str]

    combo2 = [input_str[0], input_str[1]]
    ret = [combo2]
    if len(combo1) > 0:
      ret.append(combo1)

    return ret

  else:
    prefix1 = input_str[0]
    results = calculate_perms(input_str[1:])
    for res in results:
      res.insert(0, prefix1)

    prefix2 = input_str[0] + input_str[1]
    results2 = calculate_perms(input_str[2:])
    for res in results2:
      res.insert(0, prefix2)

    return results + results2


results = calculate_perms(example_one)
print 'results: ' + str(results)
alphas = []
for res in results:
  alpha = []
  alphas.append(alpha)
  for char in res:
    alpha.append(string.lowercase[int(char)])

print 'Results in alpha: ' + str(alphas)

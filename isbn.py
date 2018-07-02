#  File: ISBN.py
#  Description: This program takes as input a file of ISBNs and will output a file with valid/invalid for each ISBN.

def checkISBN(line):
	import itertools
	line = line.replace('-','') # remove dashes
	line = line.rstrip('\n') # remove newline
	lst1 = []
	for ch in line:
		lst1.append(ch.upper()) # make a list of each ch in ISBN
	print (line)

	for ch in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']:
		if ch in lst1:
			return False

	if 'X' in lst1:
		if lst1[-1] != 'X':
			return False # roman numeral is not at the end, isbn invalid
		lst1[lst1.index('X')] = '10'
	lst1 = [int(ch) for ch in lst1] # change all str to int
	s1 = list(itertools.accumulate(lst1)) # accumulate sum of ISBN
	s2 = list(itertools.accumulate(s1)) # accumulate sum of s1
	if s2[-1] % 11 == 0: # if the total sum is divisible by 11
		return True # valid, divisible by 11
	else:
		return False # invalid, not divisible by 11

def main():
	infile = open ("isbn.txt", "r")
	outfile = open ("isbnOut.txt", "w")
	lines1 = infile.readlines()
	print (lines1)
	for line in lines1:
		if checkISBN(line): # check if ISBN is valid using helper function
			outfile.write(line.rstrip('\n') + '  valid\n')
		else:		
			outfile.write(line.rstrip('\n') + '  invalid\n')
	infile.close()
	outfile.close()
main()

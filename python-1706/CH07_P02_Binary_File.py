file = open("binaryfile.bin", "wb")

file = open("binaryfile.bin", "ab")
file.write(b"\nNew binary data added.")


readfile = open("binaryfile.bin", "rb")

data = b"Python Binary File Example"

file.write(data)


content = readfile.read()

print(content)

file.close()


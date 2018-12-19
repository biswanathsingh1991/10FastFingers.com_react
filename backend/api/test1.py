import os


file_list = []

for root, dirs, files in os.walk("..txt"):
    for file in files:
        file_list.append(file)

print(os.listdir("../txt"))

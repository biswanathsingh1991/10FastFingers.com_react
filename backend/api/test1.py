import os


file_list = os.listdir("../txt")
txt = open("../txt/" + file_list[1], "r").readlines()
print(txt)

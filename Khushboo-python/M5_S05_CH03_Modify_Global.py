count = 9


def increase():
    global count
    count = count + 1
    print("COunt Value in function"  , count)


increase()


print("Count Value out function"  , count)

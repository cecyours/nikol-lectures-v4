attempt  = 0
org_psw = 5321

while attempt <= 3:
    psw = int(input("Enter The password :"))
    if(psw == org_psw):
        print("You can procceed further.")
    else:
        attempt+=1
        print(f"now you have only {(3 -attempt+1)} attempt")

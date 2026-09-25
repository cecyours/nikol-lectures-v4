import requests

url = "https://jsonplaceholder.typicode.com/users"

response = requests.get(url)

users = response.json()

for user in users:
    print("ID:", user["id"])
    print("Name:", user["name"])
    print("Username:", user["username"])
    print("Email:", user["email"])
    print("------------------------")
#include <iostream>
#include <string>
using namespace std;
int main()
{
    string fullName;
    cout << "Enter full name: ";
    getline(cin, fullName);
    cout << "Full Name: " << fullName << endl;
    return 0;
}
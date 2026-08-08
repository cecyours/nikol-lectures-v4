#include <iostream>
using namespace std;

class Student
{
public:
    int roll;
    string name;

    Student()
    {
        roll = 0;
        name = "Unknown";
    }
    void display()
    {
        cout << roll << " " << name << endl;
    }
};

int main()
{
    Student s1;
    s1.display();

    return 0;
}
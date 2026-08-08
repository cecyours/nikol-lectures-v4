#include <iostream>
using namespace std;

class Student
{
public:
    int roll;
    string name;

    Student(int r, string n)
    {
        roll = r;
        name = n;
    }

    // Copy Constructor
    Student(const Student &s)
    {
        roll = s.roll;
        name = s.name;
    }

    ~Student()
    {
        roll = 0;
        name = "Unknown";
        cout << "Destructor called" << endl;
    }

    void display()
    {
        cout << roll << " " << name << endl;
    }
};

int main()
{
    Student s1(1, "Tirth");

    s1.display();

    return 0;
}
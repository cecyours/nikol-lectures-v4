#include <iostream>
using namespace std;
// create class
class Student
{
private:
    int marks;

public:
    void setMarks(int m)
    {
        marks = m;
    }
    int getMarks()
    {
        return marks;
    }
};

int main()
{

    // create object for calculator class
    Student s1;


    s1.setMarks(85);


    cout << "Students Marks is : " <<s1.getMarks();

    return 0;
}
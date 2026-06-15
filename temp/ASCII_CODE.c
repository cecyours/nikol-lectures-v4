#include<stdio.h>
int main()
{
	int i,j,counter;
	
	for(i=1;i<=200;i++)
	{
		for(j=0;j<3;j++)
		{
			counter++;
			printf("%d : %c\t\t",counter,counter);
		}
		printf("\n");
			
	}
	
}

#include<sys/types.h>
#include<unistd.h>
#include<stdio.h>
#include<sys/wait.h>

int main(int argc, char *argv[]){
    pid_t pid;
    int variable=6;
    pid=fork();
    if(pid ==0)
    {
        //fill
        variable = variable - 5;
        printf("Soc el fill. Valor de la variable és %d\n", variable);
    }
    else
    {
        variable = variable + 5;
        printf("Soc el pare. Valor de la variable és %d\n", variable);
    }
    return 0;
}
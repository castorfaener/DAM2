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
        //Si el pid = 0, es el proces fill. Restem 5 a la variable i ho mostrem per pantalla.
        variable = variable - 5;
        printf("Soc el fill. Valor de la variable és %d\n", variable);
    }
    else
    {
        //Si el pid != 0 es el proces pare. Incrementem 5 a la variable i ho mostrem per pantalla
        variable = variable + 5;
        printf("Soc el pare. Valor de la variable és %d\n", variable);
    }
    return 0;
}
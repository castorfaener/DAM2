#include<sys/types.h>
#include<unistd.h>
#include<stdio.h>
#include<sys/wait.h>

int main(int argc, char *argv[]){
    pid_t p1, p2;

    int valor;

    printf("Introduix el proces que acabe primer");
    scanf("%d", &valor);

    p1=fork();
    p2=fork();

    



    if(valor==1){
        
        printf("Soc proces 1 i acabe\n");
        kill(p1,0);
        printf("Soc proces 2 i acabe\n");
        kill(p2,0);
        
    }else if(valor==2){
        
        printf("Soc proces 2 i acabe\n");
        kill(p2,0);
        printf("Soc proces 1 i acabe\n");
        kill(p1,0);
        
    }else{
        printf("El valor introduit no es correcte");
    }

    

}
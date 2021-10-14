#include<unistd.h>
#include<stdio.h>
#include<stdlib.h>
#include<sys/wait.h>

int main(void){

    int fd[2];
    char buffer[10];
    pid_t pid;

    
    pipe(fd); //Creem el pipe 

    pid=fork(); //creem el proces fill

    switch(pid){
        case 1: //Error
            printf("Error en la creacio del proces fill\n");
            exit(1);

        case 0: //Proces fill envia
            printf("El fill escriu al PIPE...\n");
            write(fd[1],"Hola papi\0",10);   //Escribim el missatje de 10 bytes en el fd[1]
            break;

        default: //Proces pare rep
            wait(NULL); //Pare espera a que acabe el fill
            printf("El pare llig del PIPE...\n");
            read(fd[0],buffer,10); //Guardem en el buffer 10 bytes rebuts del PIPE
            printf("Missatge llegit: %s\n", buffer);
            break;
    
    }





}




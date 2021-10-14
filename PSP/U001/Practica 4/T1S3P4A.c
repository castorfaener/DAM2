#include<sys/types.h>
#include<unistd.h>
#include<stdio.h>
#include<sys/wait.h>

int main(int argc, char *argv[]){
    pid_t pid;

    pid=fork();

    if(pid==0){     //Soc el fill
        for(int i=0;i<10;i++){
            printf("Soc el fill\n");
        }
    }else{
        for(int i=0;i<10;i++){
            printf("Soc el pare\n");
        }
        wait(NULL);
        printf("El meu proces fill ja ha acabat");
    }

}
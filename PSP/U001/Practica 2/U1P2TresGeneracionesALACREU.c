#include<sys/types.h>
#include<unistd.h>
#include<stdio.h>
#include<sys/wait.h>

int main(int argc, char *argv[]){
    pid_t pid1, pid2;
    int status1, status2;
    pid1=fork();
    if(pid1 !=0)
    {   
        //avi
        printf("Soc el avi (%d, fill de %d)\n", getpid(), getppid());
    
    }
    else
    {  
        //pare
        printf("Soc el pare (%d, fill de %d)\n", getpid(), getppid());

        pid2=fork();
        if(pid2 ==0)
        {   //net
            printf("Soc el net (%d, fill de %d)\n", getpid(), getppid());
        }

    }
    return 0;
}
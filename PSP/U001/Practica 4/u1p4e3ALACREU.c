#include<sys/types.h>
#include<unistd.h>
#include<stdio.h>
#include<sys/wait.h>

int main(int argc, char *argv[]){
    pid_t pid, pid2, pid3;
    

    pid=fork();
    

    if(pid==0){     //Soc el fill 1
        
        printf("Soc el fill 1, el meu pare es PID=%d, jo soc PID=%d\n",getppid(), getpid());
        
    }else{  //Soc el pare

        pid2=fork();        //Generem el segon fill

        if(pid2==0){        //Soc el fill 2
                
                wait(NULL);
                printf("Soc el fill 2, el meu pare es PID=%d, jo soc PID=%d\n",getppid(), getpid());

                pid3=fork();    //Generem el net
                if(pid3==0){
                    wait(NULL);
                   
                    
                    printf("Soc el net, el meu pare es PID=%d, jo soc PID=%d\n",getppid(), getpid());
                    
                 }
        }
    }
}
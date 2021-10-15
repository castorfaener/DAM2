#include<sys/types.h>
#include<unistd.h>
#include<stdio.h>
#include<sys/wait.h>

int main(int argc, char *argv[]){
    pid_t pid, pid2, pid3;
    int status1, status2;

    pid=fork();
    

    if(pid==0){     //Soc el fill 1
        
        printf("Soc el fill 1, el meu pare es PID=%d, jo soc PID=%d\n",getppid(), getpid());
        
    }else{  //Soc el pare

        pid2=fork();        //Generem el segon fill

        if(pid2==0){        //Soc el fill 2
                  waitpid(pid, &status1, 0);
                 printf("Soc el fill 2, el meu pare es PID=%d, jo soc PID=%d\n",getppid(), getpid());
        }else{      //Soc el pare
            pid3=fork();
            if(pid3==0){
                waitpid(pid, &status1, 0);
                waitpid(pid2, &status2, 0);
                printf("Soc el fill 3, el meu pare es PID=%d, jo soc PID=%d\n",getppid(), getpid());
            }
        }
    }

}
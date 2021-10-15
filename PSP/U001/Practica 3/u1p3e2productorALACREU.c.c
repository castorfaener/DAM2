#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>

int main(void)
{

    int fp;
    char salutacio[80];

    fp = open("FIFO1", 1);
    if (fp == -1)
    {
        printf("ERROR AL ABRIR ARCHIVO\n");
        exit(1);
    }
    
    printf("Introduix la cadena per al FIFO\n");

    do{
        scanf("%s", salutacio);
        write(fp, salutacio, strlen(salutacio));
    }while(strcmp(salutacio,"."));
        

        
   


        

            

            

            close(fp);
            return 0;
        
    
    
}
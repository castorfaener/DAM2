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
    printf("Introduix la cadena per al FIFO\n");

    char salutacio[80];
    char caracter;
    int contador=0;


    for(int i=0;i<80;i++){
        salutacio[i]=getchar();
        if(salutacio[i]=='.'){
            fp = open("FIFO1", 1);
        if (fp == -1)
        {
            printf("ERROR AL ABRIR ARCHIVO\n");
            exit(1);
        }

            printf("Manant informació al FIFO...\n");

            write(fp, salutacio, strlen(salutacio));

            close(fp);
            return 0;
        }
    }
    
}
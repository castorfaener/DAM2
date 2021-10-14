/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package u3_p5_statement;
//package net.sqlitetutorial;

import java.sql.*;


/**
 *
 * @author Sammy Guergachi <sguergachi at gmail.com>
 */
public class U3_P5_Statement {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try{
            //empezamos por cargar el driver
            Class.forName("org.sqlite.JDBC");
            //Ahora podemos establecer la conexion mediante el driver manager
            Connection micon = DriverManager.getConnection("jdbc:sqlite:/home/pakels/DAM/2/AD/bases/sqlite/ejemplo.db");
            
            //una vez se ha establecido la conexion, podemos ejecutar las instrucciones que queramos contra la base de datos a traves de la conexion
            Statement miStatement = micon.createStatement();
            
            //Insertamos un nuevo departamento llamado dibujo, con numero de dept 50 y localizado DESPA3
            //ResultSet miResultSet = miStatement.executeQuery("UPDATE PROFESORES SET SALARIO=45000 WHERE DEPT_NO=10;");
            
            ResultSet miResultSet = miStatement.executeQuery("SELECT DNOMBRE, LOC, COUNT(PROFESORES.NRP) AS NUMERO_PROFESORES, AVG(PROFESORES.SALARIO) AS SUELDO_MEDIO FROM DEPARTAMENTOS INNER JOIN PROFESORES ON DEPARTAMENTOS.DEPT_NO=PROFESORES.DEPT_NO group by departamentos.dnombre; ");
          
            while(miResultSet.next()){
                        System.out.println("Nombre: "+miResultSet.getString(1)+". Localizacion: "+miResultSet.getString(2)+". Numero de profesores: "+miResultSet.getInt(3)+". Sueldo medio: "+miResultSet.getInt(4));
                    }
            
            
            
            //Cuando ya no necesitamos acceder a la base de datos cerramos la conexion
            
            micon.close();
            
        }
        catch(ClassNotFoundException cn){
            cn.printStackTrace();
        }
        catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}

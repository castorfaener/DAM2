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
            ResultSet miResultSet = miStatement.executeQuery("INSERT INTO DEPARTAMENTOS ('DEPT_NO','DNOMBRE','LOC') VALUES (50,'DIBUJO','DESPA3')");
          
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

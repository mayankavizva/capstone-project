package org.example;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.*;

public class App
{
    public static void main( String[] args )
    {
        System.out.println( "Program started" );

        final String JdbcURl="jdbc:mysql://localhost:3306/mayank";
       final String user="root";
       final String pass="Mayank@123";

       Connection conn=null;
       Statement stmt=null;

       try{
           conn=DriverManager.getConnection(JdbcURl , user , pass);
           System.out.println("Connection established sucessfully");

           stmt=conn.createStatement();
           String sql="Insert into car values(1 , 5 , 2,'Good' , 'tata')";
          int result=stmt.executeUpdate(sql);

           sql="Insert into car values(2 , 10 , 4,'Good' , 'ford')";
           result = stmt.executeUpdate(sql);
           sql="Insert into car values(3 , 15 , 6,'Good' , 'maruti')";
           result = stmt.executeUpdate(sql);
           sql="Insert into car values(4 , 20 , 8,'Good' , 'hyundai')";
           result = stmt.executeUpdate(sql);
           sql="Insert into car values(5 , 25 , 10,'Good' , 'ford')";
           result = stmt.executeUpdate(sql);

           String sql1="Select avg(mileage), manufacturer from car group by(manufacturer)";
           ResultSet result1=stmt.executeQuery(sql1);

           while(result1.next()) {
               System.out.println(result1.getFloat(1)+" "+result1.getString("manufacturer"));
           }

//           String sql="create table car(horsepower int not null , mileage int not null , passenger_capacity int not null , make varchar(10) not null , manufacturer varchar(20) not null)";
//           stmt.executeUpdate(sql);
//           System.out.println("Record add in the table:"+result);
       }
       catch (SQLException throwables) {
           throwables.printStackTrace();
       }

    }
}

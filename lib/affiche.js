/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
            
            tprojet = new Array();
            tprojet[0]= ["BBPhylia","votre nom","&copy; 2009 votre entreprise"];


      

            var tabHTML="<table><tr><th>Projet</th><th>Auteur</th><th>Copy</th></tr>";
            couleur ="lime" ;
            for(i=0; i<tprojet.length; i++)
            {
                   
             tabHTML += '<tr bgcolor="'+couleur+'"><td>'+tprojet[i][0]+'</td>'; 
             tabHTML += "<td>"+tprojet[i][1]+"</td>";
             tabHTML += "<td>"+tprojet[i][2]+"</td></tr>";
  
             
             gestcoul ();
             
            };
            tabHTML += "</table>";
            
           
            
            
            function gestcoul ()
            {
             if(couleur =="lime")
             {
               couleur ="yellow";
             } 
             else 
             {
               couleur ="lime";  
             };
            };
           
           
            function bandeau (titreBandeau)
            {
               document.write('<div id="bandeau" class="ClassDiv1">'+titreBandeau+'</div>'); 
            };
            function tableau ()
            {
               document.write(tabHTML);
            };
    



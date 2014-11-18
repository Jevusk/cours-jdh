/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
            
 pagesDisponibles = new Array();
           

 pagesDisponibles[0]=["Accueil","index.htm","Bienvenue sur "+tprojet[0][0]];
 pagesDisponibles[1]=["Recherche","recherche.htm","Votre recherche de BD"];
 pagesDisponibles[2]=["Commande","commande.htm","Votre panier"];

function affichePageMenu()
{
    var liste="<ul>";
    for(i=0; i<pagesDisponibles.length; i++)
    {
        //document.write('<a href="'+ pagesDisponibles[i][1]+'"'+'>'+pagesDisponibles[i][2]+'</a><br/>');
        liste += '<li><a href="'+ pagesDisponibles[i][1]+'"'+'>'+pagesDisponibles[i][2]+'</a></li>';
    };
    
    liste += '</ul>';
    document.write(liste);
};

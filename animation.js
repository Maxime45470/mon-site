function machineEcrire() { 
    document.getElementById('citation').innerHTML = message.substr(0, cour) + "<span class='ecrire'>" + message.charAt(cour) + "</span>";
    if (cour == message.length)
        clearInterval(animation);
    else
        cour++;
}
message = "Maximuss Dev";
cour = 0;
animation = setInterval("machineEcrire()", 100);

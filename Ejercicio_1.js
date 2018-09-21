var palin = (nombre) => {
    let newnombre ="";
   
    for (let i = 0; i<nombre.length; i++)
    {
   
   newnombre = nombre[i] + newnombre; 
    }

    if (newnombre==nombre)
    {
        return true;
    }
else
{
    return false
}
    console.log(newnombre);

}

   ;

   
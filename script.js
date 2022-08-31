/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
var texto;
var letras = "abcdefghijklmnopqrstuvwxyz";
function validarTexto(texto)
{
    var minusculas = true;
    for(var i = 0; i < texto.length; i++)
    {
        if(letras.indexOf(texto.charAt(i)) == -1)
        {
            //valor no encontrado
            //document.write("El texto no contiene solo minusculas");
            minusculas = false;
            break;
        }
    }
    return minusculas;
}

//<CIFRADO>
function cifrado(texto)
{
    var textoCifrado = "";
    for(var i = 0; i < texto.length; i++)
    {
        if(texto.charAt(i) != "a" && texto.charAt(i) != "e" && texto.charAt(i) != "i" && texto.charAt(i) != "o" && texto.charAt(i) != "u")
        {
            textoCifrado = textoCifrado + texto.charAt(i);
        }
        else
        {
            if(texto.charAt(i) == "a")
            {
                textoCifrado = textoCifrado + "ai";
                continue;
            }
            if(texto.charAt(i) == "e")
            {
                textoCifrado = textoCifrado + "enter";
                continue;
            }
            if(texto.charAt(i) == "i")
            {
                textoCifrado = textoCifrado + "imes";
                continue;
            }
            if(texto.charAt(i) == "o")
            {
                textoCifrado = textoCifrado + "ober";
                continue;
            }
            if(texto.charAt(i) == "u")
            {
                textoCifrado = textoCifrado + "ufat";
                continue;
            }
        }
    }
    return textoCifrado;
}
/*
texto = prompt("Ingrese un texto para ser cifrado");
if(validarTexto(texto))
{
    document.write(cifrado(texto));
}
*/
//</CIFRADO>


//<DECIFRAR>
function decifrar(texto)
{
    a = "ai";
    e = "enter";
    i = "imes";
    o = "ober";
    u = "ufat";
    textoDecifrado = "";
    for(var i = 0; i < texto.length; i++)
    {
        if(texto.charAt(i) != "a" && texto.charAt(i) != "e" && texto.charAt(i) != "i" && texto.charAt(i) != "o" && texto.charAt(i) != "u")
        {
            textoDecifrado = textoDecifrado + texto.charAt(i);
        }
        else
        {
            if(texto.charAt(i) == "a")
            {
                textoDecifrado = textoDecifrado + "a";
                i = i + 1;
                continue;
            }
            if(texto.charAt(i) == "e")
            {
                textoDecifrado = textoDecifrado + "e";
                i = i + 4;
                continue;
            }
            if(texto.charAt(i) == "i")
            {
                textoDecifrado = textoDecifrado + "i";
                i = i + 3;
                continue;
            }
            if(texto.charAt(i) == "o")
            {
                textoDecifrado = textoDecifrado + "o";
                i = i + 3;
                continue;
            }
            if(texto.charAt(i) == "u")
            {
                textoDecifrado = textoDecifrado + "u";
                i = i + 3;
                continue;
            }
        }
    }
    return textoDecifrado;
}
/*
textoCifrado = prompt("Ingrese un texto para ser decifrado");
document.write("decifrando texto</br>");
document.write(decifrar(textoCifrado));
*/
//</DECIFRAR>
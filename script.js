function f1()
{
    var a1=document.getElementById("a").value;
    var x=/^[0-9]+$/;
    var isValid = x.test(a1);

    if (isValid && document.getElementById("b").value != "k")
    {
      if (document.getElementById("b").value == "cel") 
      {
        var a2;
        a2 = (a1*9/5)+32;
        a2 = a2.toFixed(2);
        a2 += " Fahrenheit";
        document.getElementById("c").value = a2;
        
      } 
      else 
      {
        var a2;
        a2 = (a1 - 32) * (5 / 9);
        a2=a2.toFixed(2);
        a2 += " Celsius";
        document.getElementById("c").value = a2;
      }
    }
if(!isValid)
{
    alert("Please enter a valid number");
}
if(document.getElementById("b").value=="k")
{
    alert("Please Enter The Unit");
}
}

//-- Validate for Sign up page--
function SignUpForm(event) {

event.preventDefault()
    var elements = event.currentTarget;
    var x = elements[0].value;
    var y = elements[1].value;
    var b = elements[2].value;
    var i = elements[3].value;
    var z = elements[4].value;
    var c = elements[5].value;
    
    
    var rt = true;
    var str_user_inputs = "";
    var warn = "Check the Following fields: \n";

    //-- validate email --
    if (x == null || x == "")
    {
        warn += "Email is empty!\n";
        rt = false;

    }
    else if (x.length > 60) {
        warn += "Maximum length  of email is 60 characters!\n";
        rt = false;
    }

    else { // if everything is okay, then collect email 

        str_user_inputs += "Email: " + x + "\n";

    }
    //-- validate Username --
    

    if (y == null || y == "") {
        warn += "Username is empty! \n";
        rt = false;
    }
    else if (y.length > 40) {
        warn += "Maximum length  of username is 40 characters!\n";
        rt = false;
    }

    else { // if everything is okay, then collect username 
        str_user_inputs += "Username: " + y + "\n";
    }

           //-- add code
       //-- validate Birthday --
       if (b==null||b=="") {
        warn += "Birthday is empty! \n";
        rt = false;
    }
    
    else 
    {
        str_user_inputs += "Birthday: " + b + "\n";
    }

    //-- add code
    //-- validate Profile picture --
       if (i==null||i=="") {
        warn += "Profile Picture is empty! \n";
        rt = false;
    }
    
    else 
    {
        str_user_inputs += "Profile Picture: " + b + "\n";
    }
    
    
    //--validate password--
    //-- add code
    if (z==null||z=="") {
        warn += "Password is empty! \n";
        rt = false;
    }
    else if (z.length != 8)
    {
        warn += "Password must be of 8 characters long!\n";
        rt = false;
    }
    else 
    {
        str_user_inputs += "Password: " + z + "\n";
    }

    
    //-- Confirm password --
    //-- add code
    if (c == null || c == "")
    {
        warn += "Confirm Password is empty! \n";
        rt = false;
    }
    else if (z != c)
    {
        warn += "Pssword Doens't Match\n";
        rt = false;
    }
    else { // if everything is okay, then collect password 

        str_user_inputs += "Confirm Password: " + c + "\n";
    }



	    //prevent form to be submitted if one of above field is invalid		

    if (rt == false)
		{    
            alert(warn);
            return false;
		}
	    else{
		alert("Signup successful!");
        return true;
        }
}

function ResetForm(event) //use event object
{

    var x = document.getElementById("Eid").value;
    x = "";
    var y = document.getElementById("usr").value;
    y = "";
    var b = document.getElementById("bday").value;
    b = "";
    var i = document.getElementById("avtar").value;
    i = "";
    var z = document.getElementById("pwd").value;
    z = "";
    var c = document.getElementById("cpwd").value;
    c = "";
   //code to remove the contents of the textboxes
}   


//----------Validate for Login Page--------------

function LoginForm(){

    var warn="";
    var rt=true;
    var str_user_inputs = "";
    
    //-- validate email --
    
    var x=document.forms.Login.email.value;
    
    if (x==null || x==""){
        
        warn +="Email is empty. \n";
        rt=false;
      
    }
    else if(x.length > 60){
       warn += "Max length for email is 60 characters.\n"
       rt =false;
    }
    
    else{ // if everything is okay, then collect email 
       
        str_user_inputs +="Email: "+x+"\n";
    
    }
    
    
    
    //-- validate password --
    var z=document.forms.Login.password.value;
    //-- add code
    if (z==null || z==""){
        
        warn +="Passoword is empty. \n";
        rt=false;
      
    }
    if (z.length <= 8){
       warn += "length for Passoword is 8 characters or more !.\n"
       rt =false;
    }
    
    else{ // if everything is okay, then collect email 
       
        str_user_inputs +="Passoword: "+z+"\n";
    
    }

    //warning
    if(rt==false)
    {
  
        alert(warn);
        return false;

    }
    else
    {
  
    // display the user inputs:
    alert(str_user_inputs);


    }

}

// --Validation of Post recipe page--

function postForm()
{


    var rt = true;
    var str_user_inputs = "";
    var warn = "Check the Following fields: \n";

    //-- validate Recipe Title --

    var x=document.forms.postform.title.value;

    if (x == null || x == "") {
        warn += "Title is empty! \n";
        rt = false;
    }
    else if (x.length > 50) {
        warn += "Maximum length  of username is 50 characters!\n";
        rt = false;
    }

    else { // if everything is okay, then collect username 
        str_user_inputs += "Title: " + x + "\n";
    }


    //-- validate ingredients --
    
    var y=document.forms.postform.ing.value;
    if (y == null || y == "") {
        warn += "Ingredients is empty! \n";
        rt = false;
    }

    else { // if everything is okay, then collect username 
        str_user_inputs += "Ingredients: " + y + "\n";
    }



    //-- validate Recipe Details --
    
    var z=document.forms.postform.details.value;
    if (z == null || z == "") {
        warn += "Details of recipe is empty! \n";
        rt = false;
    }
    

    else { // if everything is okay, then collect username 
        str_user_inputs += "Details: " + z + "\n";
    }


    
	    
    //warning
    if(rt==false)
    {

     alert(warn);
     return false;

    }
    else
    {

    // display the user inputs:
    alert(str_user_inputs);


    }


}
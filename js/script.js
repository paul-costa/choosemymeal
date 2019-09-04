var arrayWithOptions = [];
var inputFieldString;

var arrayWithColors=['darkblue', 'lightblue', 'darkcyan', 'lightcyan', 'darkgreen', 'lightgreen', 'darkmagenta', 'magenta', 'darkorange', 'orange', 'darkred', 'pink'];

$(function()
{
    $('#submitInputField').keypress(function(event) 
    {
        if (event.which == 13) 
            insertStringIntoArray();
    });
});



function insertStringIntoArray()
{
    if(document.getElementById('submitInputField').value!='')
    {
        var stringWithOptions = '';
        arrayWithOptions.push(document.getElementById('submitInputField').value);

        for(var i=0; i<arrayWithOptions.length; i++)
            stringWithOptions+=arrayWithOptions[i]+'<br>';
        
        document.getElementById('listWithFoods').innerHTML=(stringWithOptions);
        
        inputFieldString = document.getElementById('submitInputField').value='added!';
        
        setTimeout(function()
        {
            inputFieldString = document.getElementById('submitInputField').value='';
        },500);
    }
}

function chooseMyFood()
{
    var randomFood = parseInt(Math.random() * arrayWithOptions.length); 
    var randomColor = parseInt(Math.random() * arrayWithColors.length); 
    
    if(arrayWithOptions[0]!=undefined)
        document.getElementById('foodResult').innerHTML = "<h5>Today we are eating:</h5><h4 id='choosenFoodField'>" + arrayWithOptions[randomFood]+"</h4>";

    else
        document.getElementById('foodResult').innerHTML = "<h5>Today we are eating:</h5><h4 id='choosenFoodField'>" + 'apparently nothing.' + "</h4>";

    
    $('#choosenFoodField').css('background-color', arrayWithColors[randomColor]);
    randomColor%2==0 ? $('#choosenFoodField').css('color', 'white') : $('#choosenFoodField').css('color', 'black');
}
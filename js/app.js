//Initial number of cells, for a 16x16 grid.
var totalCells = 256;

//Creates divs for a max number of cells, either initially 16x16 or provided by the user.
function createGrid(maxCells, mode)
{
	for (var i = 0; i < maxCells; i++)
	{
		$("#container").append("<div class='cell'></div>");
	}

	$(".cell").hover( function() {
    
		//Mode selection. 1 = monochrome, 2 = random color, 3 = fading gradient
		switch(mode) {
			case 1:
				$(this).css("background-color", "#666");
				break;
			case 2:
        var hue = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")";
				$(this).css("background-color", hue);
				break;
			case 3:
				var currentOpacity = $(this).css("opacity");
				if (currentOpacity > 0) { $(this).css("opacity", currentOpacity - 0.1); }
				break;
		}
	});
}

$(document).ready(function() {
	createGrid(totalCells, 1);
});

function clearGrid()
{
	$(".cell").css( {"opacity": 1, "background-color": "#f0f0f0"} );
}

function resetGrid(mode)
{
	clearGrid();

	var cellNumber = window.prompt("Please enter a new grid size, e.g. 16 for a 16x16 grid.", 16); //Asks user for width/height of grid, in 'pixels'
	totalCells = Math.pow(cellNumber, 2); //Gets total cells required for that, by squaring the input number
	var cellSize =  800 / cellNumber; //Gets the necessary width/height of the individual cells

	$("#container").empty();

	createGrid(totalCells,mode); //Depending on what button was pressed, this changes how hovering works

	$("#container > div").css({ "width": cellSize, "height": cellSize }); //Sets the cell sizes all at once, to help with speed.
}

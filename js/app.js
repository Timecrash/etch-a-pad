//Also add another button,  switching between 'press to highlight' and 'highlight on hover. Might be cool as a shitty pixel editor.

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
		//Mode selection. 1 = monochrome, 2 = random color, 3 = fading
		switch(mode) {
			case 1:
				$(this).css("background-color", "#666");
				//if ( $(this).css("background-color") === "#f0f0f0" ) { $(this).css("background-color", "#666"); }
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
	var cellNumber = window.prompt("Please enter a new grid size, e.g. 16 for a 16x16 grid.", 16);
	totalCells = Math.pow(cellNumber, 2);
	var cellSize =  800 / cellNumber;

	$("#container").empty();

	createGrid(totalCells,mode);

	$("#container > div").css({ "width": cellSize, "height": cellSize });
}

//This creates a super neat hover effect, but only while currently being hovered over. Still visually interesting though.
//*Remove before pushing to GitHub*
//$(".cell").hover( function() { $(this).toggleClass("highlighted") });

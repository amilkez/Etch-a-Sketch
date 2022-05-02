const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid");

newGridBtn.addEventListener("click", () => {
	const gridSize = prompt("Choose a new grid size");
	console.log(gridSize);
	if (gridSize > 99) {
		alert("Choose a grid size between 1 and 99");
	}
	removeGrid();
	createGrid(gridSize);
});

function createGrid(gridSize = 16) {
	for (let i = 0; i < gridSize; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		container.appendChild(row);
		for (let j = 0; j < gridSize; j++) {
			const block = document.createElement("div");
			block.classList.add("block");
			row.appendChild(block);
			block.addEventListener("mouseenter", hoverRow);
		}
	}
}

function removeGrid() {
	const rows = document.querySelectorAll(".row");
	rows.forEach((row) => {
		const blocks = document.querySelectorAll(".block");
		blocks.forEach((block) => {
			block.remove();
		});
		row.remove();
	});
}

function hoverRow() {
	this.classList.add("hover-ele");
}

createGrid();

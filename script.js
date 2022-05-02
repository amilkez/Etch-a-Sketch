const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid");

newGridBtn.addEventListener("click", () => {
	const gridSize = prompt("Choose a new grid size");
	if (gridSize > 99) {
		alert("Choose a grid size between 1 and 99");
	}
	removeGrid();
	createGrid(gridSize);
});

function createGrid(gridSize = 16) {
	const gridArea = gridSize * gridSize;
	for (let i = 0; i < gridArea; i++) {
		const block = document.createElement("div");
		block.classList.add("block");
		container.appendChild(block);
		container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
		changeBlockColor(block);
	}
}

function removeGrid() {
	const blocks = document.querySelectorAll(".block");
	blocks.forEach((block) => {
		block.remove();
	});
}

function changeBlockColor(block) {
	block.addEventListener("mouseenter", hoverRow);
}

function hoverRow() {
	this.classList.add("hover-ele");
}

createGrid();

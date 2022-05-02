const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".new-grid");

function createGrid(gridSize = 16) {
	for (let i = 0; i < gridSize; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		container.appendChild(row);
		for (let j = 0; j < gridSize; j++) {
			const block = document.createElement("div");
			block.classList.add("block");
			row.appendChild(block);
			block.addEventListener("mouseenter", () => {
				block.classList.add("hover");
			});
		}
	}
}

newGridBtn.addEventListener("click", () => {
	const gridSize = prompt("Choose a new grid size");
	console.log(gridSize);
	if (gridSize > 99) {
		alert("Choose a grid size between 1 and 99");
	}
	createGrid(gridSize);
});

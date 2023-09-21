// Get all elements with the "column" class
const columns = document.querySelector(".column");

// Variable to store the currently dragged item
let draggingItem = null;

// Add a "dragstart" event listener to each element with the "column" class
columns.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        draggingItem = e.target;
        draggingItem.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        draggingItem.classList.remove("dragging");
        draggingItem = null;
    });
});

// Add a "dragover" event listener to each element with the "column" class
columns.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault(); // Prevent the default dragover behavior

        // Check if there's a dragging item
        if (!draggingItem) return;

        const applyAfter = getNewPosition(item, e.clientY);

        if (applyAfter) {
            applyAfter.insertAdjacentElement("afterend", draggingItem);
        } else {
            item.prepend(draggingItem);
        }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll(".item:not(.dragging)");
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }
    return result;
}

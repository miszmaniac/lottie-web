const borderId = 'border';
const strokeColor = "#2962ff";

function createCorner(transform, x, y) {
    let corner = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    corner.setAttribute("transform", transform);
    corner.setAttribute("width", 10);
    corner.setAttribute("height", 10);
    corner.setAttribute("x", x - 5);
    corner.setAttribute("y", y - 5);
    corner.style.fillOpacity = "1";
    corner.style.fill = strokeColor;
    return corner;
}

function createBorder(parentGroup) {
    let svgRect = parentGroup.getBBox();
    let transform = window.getComputedStyle(parentGroup).transform;

    let newElementGroup = document.createElementNS("http://www.w3.org/2000/svg", 'g');
    newElementGroup.setAttribute("id", borderId);

    let border = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    border.setAttribute("transform", transform);
    border.setAttribute("width", svgRect.width);
    border.setAttribute("height", svgRect.height);
    border.setAttribute("x", svgRect.x);
    border.setAttribute("y", svgRect.y);
    border.style.stroke = strokeColor;
    border.style.strokeWidth = "2px";
    border.style.fillOpacity = "0";
    border.style.strokeOpacity = "1";

    const leftTopCorner = {x: svgRect.x, y: svgRect.y};
    const leftBottomCorner = {x: svgRect.x, y: svgRect.y + svgRect.height};
    const rightTopCorner = {x: svgRect.x + svgRect.width, y: svgRect.y};
    const rightBottomCorner = {x: svgRect.x + svgRect.width, y: svgRect.y + svgRect.height};

    newElementGroup.appendChild(border);
    newElementGroup.appendChild(createCorner(transform, leftTopCorner.x, leftTopCorner.y));
    newElementGroup.appendChild(createCorner(transform, leftBottomCorner.x, leftBottomCorner.y));
    newElementGroup.appendChild(createCorner(transform, rightTopCorner.x, rightTopCorner.y));
    newElementGroup.appendChild(createCorner(transform, rightBottomCorner.x, rightBottomCorner.y));
    svg.appendChild(newElementGroup);
}

function removeBorder() {
    const borderElement = document.getElementById(borderId);
    if (borderElement != null) {
        borderElement.remove();
    }
}
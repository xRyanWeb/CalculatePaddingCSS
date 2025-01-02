var PaddingPOS = {
    xPosition: 0,
    yPosition: 0,
    height: 0,
};
PaddingPOS.height = 10;
PaddingPOS.xPosition = 20;
PaddingPOS.yPosition += PaddingPOS.height + PaddingPOS.xPosition;
console.log("Padding: ".concat(PaddingPOS.yPosition, " px"));

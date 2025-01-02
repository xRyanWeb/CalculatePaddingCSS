type PaddingX = {
    xPosition: number;
    yPosition: number
    height: number,
}

const PaddingPOS:PaddingX = {
    xPosition:  0,
    yPosition:  0,
    height: 0,
}

PaddingPOS.height = 10;
PaddingPOS.xPosition = 20;

PaddingPOS.yPosition += PaddingPOS.height +
    PaddingPOS.xPosition;

console.log(`Padding: ${PaddingPOS.yPosition} px`);

export function checkValueForTable(value : number, maxValue : number, minValue : number){
    if(value >= minValue && value <= maxValue){
        return "Good"
    }else if(value < minValue){
        return "To low"
    }else if(value > maxValue){
        return "To high"
    }
    return "Invalid"
}


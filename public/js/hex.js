function hexPoint(center, size, i){
    var angle_deg = 60 * i + 90;
    var angle_rad = Math.PI / 180 * angle_deg;
    return {x:center.x + size * Math.cos(angle_rad), y: center.y + size * Math.sin(angle_rad)};
}

function hexCorners(center, size){
    return [0,1,2,3,4,5].map(
        function(side){
            return hexPoint(center, size, side);
        }
    );
}
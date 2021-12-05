/* Robot efficiency
Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
If you observe that robot’s behavior, what obviously stupid things does it
do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots
function to verify whether you improved the robot. */


function nearestParcelRobot({place, parcels}, route) {
    if (route.length == 0) {
      let parcel = parcels[getNearestParcelIndex(place, parcels)];
      if(parcel.place != place) {
        route = findRoute(roadGraph, place, parcel.place);
      } else {
        route = findRoute(roadGraph, place, parcel.address);
      }
    }
    return {direction: route[0], memory: route.slice(1)}
}


function getNearestParcelIndex(currentLocation, parcels) {
    let nearestParcelLocation = '';
    let shortestRouteSoFar = 99;
    let index = -1;
    for (let parcel of parcels) {
      index++;
      route = findRoute(roadGraph, currentLocation, parcel.place);
      if (route.length < shortestRouteSoFar) {
        shortestRouteSoFar = route.length;
        console.log(shortestRouteSoFar);
        indexForShortestRoute = index;
      }
    }
    return indexForShortestRoute;
}


compareRobots(goalOrientedRobot, nearestParcelRobot);
// > Robot 1: 17.44
// > Robot 2: 16.35
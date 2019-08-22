var map


 function initMap(){
   // Map options
   var options = {
     center: {lat: 14.5647, lng: 120.9932},
     zoom: 16,
     styles: [
       {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
       {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
       {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
       {
         featureType: 'administrative.locality',
         elementType: 'labels.text.fill',
         stylers: [{color: '#d59563'}]
       },
       {
         featureType: 'poi',
         elementType: 'labels.text.fill',
         stylers: [{color: '#d59563'}]
       },
       {
         featureType: 'poi.park',
         elementType: 'geometry',
         stylers: [{color: '#263c3f'}]
       },
       {
         featureType: 'poi.park',
         elementType: 'labels.text.fill',
         stylers: [{color: '#6b9a76'}]
       },
       {
         featureType: 'road',
         elementType: 'geometry',
         stylers: [{color: '#38414e'}]
       },
       {
         featureType: 'road',
         elementType: 'geometry.stroke',
         stylers: [{color: '#212a37'}]
       },
       {
         featureType: 'road',
         elementType: 'labels.text.fill',
         stylers: [{color: '#9ca5b3'}]
       },
       {
         featureType: 'road.highway',
         elementType: 'geometry',
         stylers: [{color: '#746855'}]
       },
       {
         featureType: 'road.highway',
         elementType: 'geometry.stroke',
         stylers: [{color: '#1f2835'}]
       },
       {
         featureType: 'road.highway',
         elementType: 'labels.text.fill',
         stylers: [{color: '#f3d19c'}]
       },
       {
         featureType: 'transit',
         elementType: 'geometry',
         stylers: [{color: '#2f3948'}]
       },
       {
         featureType: 'transit.station',
         elementType: 'labels.text.fill',
         stylers: [{color: '#d59563'}]
       },
       {
         featureType: 'water',
         elementType: 'geometry',
         stylers: [{color: '#17263c'}]
       },
       {
         featureType: 'water',
         elementType: 'labels.text.fill',
         stylers: [{color: '#515c6d'}]
       },
       {
         featureType: 'water',
         elementType: 'labels.text.stroke',
         stylers: [{color: '#17263c'}]
       }
     ]

   }

   // New map
   map = new google.maps.Map(document.getElementById('map'), options);
   var areaNum = 0;


   // Create the DIV to hold the control and call the CenterControl()
    // constructor passing in this DIV.
    var centerControlDiv = document.createElement('div');
    var centerControl = new AddControl(centerControlDiv, map);
    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(centerControlDiv);


   // Listen for click on map
   google.maps.event.addListener(map, 'click', function(event){
     // Add marker
    //  areaNum++;
    //  addMarker({coords:event.latLng,
    //             content:"<h1>Area " +areaNum + ": </h1>" +"</br>" + event.latLng.toString()});


   });

   // Add Marker Function
   function addMarker(props){
     var marker = new google.maps.Marker({
       position:props.coords,
       map:map,
       id:areaNum
       //icon:props.iconImage
     });
   //  marker.addListener('click', function(event){

   //  });
     // Check content
     if(props.content){
       var infoWindow = new google.maps.InfoWindow({
         content:props.content
       });

       marker.addListener('click', function(event){
         if(addFlag==1)
         {
           //load add page
         }
         else{
         infoWindow.open(map, marker);
         console.log(event.latLng.toString())
         console.log(infoWindow.content)
         console.log(marker.id)
         }
       });


     // Check for customicon
     if(props.iconImage){
       // Set icon image
       marker.setIcon(props.iconImage);
     }
     }
   }
 }
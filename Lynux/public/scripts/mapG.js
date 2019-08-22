var map

console.log(posts)

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

   for(var i=0;i<posts.length;i++){
     //addMarker(posts[i]);
    // console.log("added "+posts[i].location)

    var locationString = posts[i].location
    var input = locationString.substring(1, locationString.length-1);
    var latlngStr = input.split(",",2);
    var lat = parseFloat(latlngStr[0]);
    var lng = parseFloat(latlngStr[1]);
    var latlng = new google.maps.LatLng(lat, lng);

    let post = {
      coords:latlng,
      id: posts[i]._id,
      content:posts[i].title
    }
    addMarker(post)
   }

   // Add Marker Function
   function addMarker(props){
     var marker = new google.maps.Marker({
       position:props.coords,
       map:map,
       id:props.id,
       content:props.content
       //icon:props.iconImage
     });
   //  marker.addListener('click', function(event){

   //  });
     // Check content
     if(props.content){
       var infoWindow = new google.maps.InfoWindow({
         content:props.content
       });

       marker.addListener('mouseover', function(event){
         infoWindow.open(map, marker);
       });
       marker.addListener('mouseout', function(event){
         infoWindow.close(map, marker);
       });
       marker.addListener('click', function(event){
         console.log(props.id)
          $("#post_id").val(props.id)
          $("#viewPost").submit()
       });

     // Check for customicon
     if(props.iconImage){
       // Set icon image
       marker.setIcon(props.iconImage);
     }
     }
   }
 }

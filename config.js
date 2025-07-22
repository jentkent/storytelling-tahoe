var config = {
    style: 'mapbox://styles/jentkent/cmd7irte7035601rfdm9uf7e3',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiamVudGtlbnQiLCJhIjoiY21jOTY2dzh6MWdhdDJrcHM1MDBneWFtbyJ9.yd5bVAMamppaeG-agBG-pw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tracking the Tahoe Basin',
    subtitle: 'How a new collaborative research project is looking beyond the lake to better protect it.',
    byline: 'By Jennifer Kent',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'chapter-1-tahoe',
            alignment: 'left',
            hidden: false,
            title: 'What is the Tahoe Environmental Observatory Network?',
            image: './assets/san-fran.jpeg',
            description: 'Lake Tahoe is known for its crystal clear waters and stunning vistas. For decades, conservation efforts have focused on the lake itself, monitoring and protecting its fragile clarity.',
            location: {
                center: [-120.0324, 39.0968],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'caldor-fire',
                opacity: 0,
                duration: 0
                },
                    {
                layer: 'tahoe-basin',
                opacity: 0,
                duration: 0
                },
                    {
                layer: 'water-monitoring',
                opacity: 0,
                duration: 0
                },
                    {
                layer: 'terrestrial-monitoring',
                opacity: 0,
                duration: 0
                },
                    {
                layer: 'stream-monitoring-sites',
                opacity: 0,
                duration: 0
                }
            ],
          
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'enter-tahoe-basin',
            alignment: 'right',
            hidden: false,
            image: './assets/washington-dc.jpg',
            description: 'But a group of scientists is now looking beyond the lake to protect it. Growing threats like climate change, invasive species, wildfires, forest shifts, and altered stream flows are placing new pressures on the Tahoe Basin. <br>  <br> Preserving this fragile ecosystem requires urgent, science-driven action.',
            location: {
               center: [-119.967296, 39.035172],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                curve: 1
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'tahoe-basin',
                opacity: .4,
                duration: 3000
}
],
            onChapterExit: []
        },
        {
            id: 'enter-water-monitoring',
            alignment: 'right',
            hidden: false,
            image: './assets/geneva.jpg',
            description: 'The Tahoe Environmental Observatory Network is monitoring water quality in the nearshore,',
            location: {
                center: [-119.940589, 39.080105],
                zoom: 10.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'water-monitoring',
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [{
                layer: 'water-monitoring',
                opacity: 0,
                duration: 500
                }]
        },
        {
            id: 'enter-terrestrial-monitoring',
            alignment: 'right',
            hidden: false,
            image: './assets/buenos-aires.jpg',
            description: 'while also tracking changes across the Tahoe Basin, like forest and soil health, changes in climate, and wildlife activity,',
            location: {
                center: [-119.940589, 39.080105],
                zoom: 10.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [   
                {
                layer: 'terrestrial-monitoring',
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [
                {
                layer: 'terrestrial-monitoring',
                opacity: 0,
                duration: 500
                }
            ]
        },
        {
            id: 'enter-stream-monitoring',
            alignment: 'left',
            hidden: false,
            title: 'Stream Monitoring',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-120.154247, 39.077802],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'stream-monitoring',
                opacity: 1,
                duration: 1000
                }
            ],
            onChapterExit: [  
                {
                layer: 'stream-monitoring',
                opacity: 0,
                duration: 500
                }
            ]
        },
                {
            id: 'enter-wildfire',
            alignment: 'left',
            hidden: false,
            title: 'Threats - Wildfire',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-120.310040, 39.077802],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'caldor-fire',
                opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [  
                {
                layer: 'caldor-fire',
                opacity: 0,
                duration: 500
                }
            ]
        }
    ]
};

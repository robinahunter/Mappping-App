import React, { useState, useEffect } from 'react';
import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Basemap from '@arcgis/core/Basemap';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import SceneView from '@arcgis/core/views/SceneView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Skeleton from 'react-loading-skeleton';

const HomePage = () => {

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
      const initializeArcGIS = async () => {
        esriConfig.apiKey = process.env.REACT_APP_ESRI_KEY; // Set your API key from environment variables
                 
        // Create a VectorTileLayer from a style URL
        const mapBaseLayer = new VectorTileLayer({
          url: 'https://arcgis.com/sharing/rest/content/items/b5676525747f499687f12746441101ef/resources/styles/root.json',
        });
  
        // Create a Basemap with the VectorTileLayer
        const customBasemap = new Basemap({
            baseLayers: [mapBaseLayer],
            title: 'Street',
            id: 'streets',
            thumbnailUrl:
            'https://arcgis.com/sharing/rest/content/items/b5676525747f499687f12746441101ef/info/thumbnail/ago_downloaded.png',
        });
        
        const map = new Map({
            basemap: 'streets', //streets-navigation-vector, arcgis/topographic, customBasemap, 'streets'
            ground: 'world-elevation',
        });

        const initCamera = {
            heading: 1,
            tilt: 1,
            position: {
                latitude: 20.753,
                longitude: -156.449,
                z: 200000,
            },
        };
        
        const view = new SceneView({
            container: 'viewDiv',
            map: map,
            camera: initCamera,
        });
        
        view.when(() => {
            // Add a BasemapToggle widget to toggle between basemaps
            const toggle = new BasemapToggle({
                visibleElements: {
                    title: true,
                },
                view: view,
                nextBasemap: 'satellite',
            });
            
            // Add widget to the top right corner of the view
            view.ui.add(toggle, 'top-right');
        });

        // Create a new FeatureLayer instance with the specified URL
        const featureLayer = new FeatureLayer({
            url: 'https://services8.arcgis.com/T51xV83kzxEuohfL/arcgis/rest/services/maui_fresh_water_fountain_locations/FeatureServer/0'
        });

        // Add the FeatureLayer to the map 
        map.add(featureLayer);

        // Optionally, set a renderer for the feature layer
        const renderer = {
            type: 'simple',
            symbol: {
                type: 'simple-marker',
                url: "../../assets/water-drop-maui-01.svg",
                color: '#06b6d4',
                size: 12,
                outline: {
                    color: [4, 144, 169, 1], // Specify transparent outline
                    width: 1 // Set outline width to 0 to make it invisible
                }
            }
        };
        featureLayer.renderer = renderer;

        // Optionally, set a popup template for the feature layer
        const popupTemplate = {
            title: '{Location}',
            content: [
                {
                    type: 'text',
                    text: 'Drinking Fountain'
                },
                {
                    type: 'text',
                    text: '<a href="https://www.google.com/maps/search/?api=1&query={Latitude},{Longitude}" target="_blank">Get Directions</a>'
                },
                {
                    type: 'text',
                    text: `<a href="https://www.mauinuiahupuaaproject.com/ahupuaa" target="_blank">Learn More About Maui's Water</a>`
                },
                // {
                //     type: 'media',
                //     mediaInfos: [
                //         {
                //             type: 'image',
                //             value: {
                //                 sourceURL: '{image}',
                //                 width: '25vw', // Adjust the width of the image to fit the popup
                //                 height: 'auto' // Maintain aspect ratio
                //             }
                //         }
                //     ]
                // },

                {
                    type: 'text',
                    text: '{Address}'
                },
                {
                    type: 'text',
                    text: '{City}, {State}'
                },
                {
                    type: 'text',
                    text: '{Latitude}, {Longitude}'
                },

            ]
        };
        featureLayer.popupTemplate = popupTemplate;
    
        // Simulate a loading delay for demonstration purposes
        setTimeout(() => {
        setLoading(false); // Set loading to false when initialization is complete
        }, 5000);
      };
    
      initializeArcGIS();
    }, []);

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            {/* Skeleton loading indicator */}
            {loading && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <Skeleton width={400} height={40} />
                        <Skeleton width={400} height={40} color="red" />
                        <Skeleton width={400} height={40} color="#ccc" />
                    </div>
                </div>
            )}

            {/* Map container */}
            <div id="viewDiv" style={{ height: '100%', width: '100%', padding: 0, margin: 0 }}></div>
        </div>
    );
};

//     //return the map view
//     return <div id="viewDiv" style={{ height: '100vh', width: '100vw', padding: 0, margin: 0 }}></div>;
//   };
  
  export default HomePage;
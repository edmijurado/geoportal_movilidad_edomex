var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_resultado_isocronas_15min_chalco_disuelto_1 = new ol.format.GeoJSON();
var features_resultado_isocronas_15min_chalco_disuelto_1 = format_resultado_isocronas_15min_chalco_disuelto_1.readFeatures(json_resultado_isocronas_15min_chalco_disuelto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_resultado_isocronas_15min_chalco_disuelto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_resultado_isocronas_15min_chalco_disuelto_1.addFeatures(features_resultado_isocronas_15min_chalco_disuelto_1);
var lyr_resultado_isocronas_15min_chalco_disuelto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_resultado_isocronas_15min_chalco_disuelto_1, 
                style: style_resultado_isocronas_15min_chalco_disuelto_1,
                popuplayertitle: "resultado_isocronas_15min_chalco_disuelto",
                interactive: true,
                title: '<img src="styles/legend/resultado_isocronas_15min_chalco_disuelto_1.png" /> resultado_isocronas_15min_chalco_disuelto'
            });

lyr_OSMStandard_0.setVisible(true);lyr_resultado_isocronas_15min_chalco_disuelto_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_resultado_isocronas_15min_chalco_disuelto_1];
lyr_resultado_isocronas_15min_chalco_disuelto_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_resultado_isocronas_15min_chalco_disuelto_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_resultado_isocronas_15min_chalco_disuelto_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_resultado_isocronas_15min_chalco_disuelto_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
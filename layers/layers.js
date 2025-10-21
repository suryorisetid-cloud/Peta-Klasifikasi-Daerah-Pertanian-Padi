var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Klasifikasi_Jawa_1 = new ol.format.GeoJSON();
var features_Klasifikasi_Jawa_1 = format_Klasifikasi_Jawa_1.readFeatures(json_Klasifikasi_Jawa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klasifikasi_Jawa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klasifikasi_Jawa_1.addFeatures(features_Klasifikasi_Jawa_1);
var lyr_Klasifikasi_Jawa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klasifikasi_Jawa_1, 
                style: style_Klasifikasi_Jawa_1,
                popuplayertitle: 'Klasifikasi_Jawa',
                interactive: true,
    title: 'Klasifikasi_Jawa<br />\
    <img src="styles/legend/Klasifikasi_Jawa_1_0.png" /> Inisiasi - Stagnan<br />\
    <img src="styles/legend/Klasifikasi_Jawa_1_1.png" /> Sub Centra<br />\
    <img src="styles/legend/Klasifikasi_Jawa_1_2.png" /> Centra<br />\
    <img src="styles/legend/Klasifikasi_Jawa_1_3.png" /> Terintegrasi<br />\
    <img src="styles/legend/Klasifikasi_Jawa_1_4.png" /> Waduk<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Klasifikasi_Jawa_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Klasifikasi_Jawa_1];
lyr_Klasifikasi_Jawa_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'Kabupaten/ Kota', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Data QGIS': 'Data QGIS', 'Data QGI_1': 'Data QGI_1', 'Data QGI_2': 'Data QGI_2', 'Data QGI_3': 'Jumlah Petani', 'Data QGI_4': 'Infrastruktur', 'Data QGI_5': 'Harga Gabah (Rp)', 'Data QGI_6': 'Data QGI_6', 'Data QGI_7': 'Data QGI_7', 'Data QGI_8': 'CH Tahunan', 'Data QGI_9': 'Klasifikasi', 'ton/ha': 'Produktivitas (ton/ha)', 'produksi': 'Produksi (ton)', 'luas sawah': 'Luas Sawah (ha)', 'suhu': 'Suhu (°C)', 'kelembaban': 'Kelembaban (%)', });
lyr_Klasifikasi_Jawa_1.set('fieldImages', {'GID_2': 'Hidden', 'GID_0': 'Hidden', 'COUNTRY': 'Hidden', 'GID_1': 'Hidden', 'NAME_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'NAME_2': 'TextEdit', 'VARNAME_2': 'Hidden', 'NL_NAME_2': 'Hidden', 'TYPE_2': 'Hidden', 'ENGTYPE_2': 'Hidden', 'CC_2': 'Hidden', 'HASC_2': 'Hidden', 'Data QGIS': 'Hidden', 'Data QGI_1': 'Hidden', 'Data QGI_2': 'Hidden', 'Data QGI_3': 'TextEdit', 'Data QGI_4': 'TextEdit', 'Data QGI_5': 'TextEdit', 'Data QGI_6': 'Hidden', 'Data QGI_7': 'Hidden', 'Data QGI_8': 'TextEdit', 'Data QGI_9': 'TextEdit', 'ton/ha': 'TextEdit', 'produksi': 'TextEdit', 'luas sawah': 'TextEdit', 'suhu': 'TextEdit', 'kelembaban': 'TextEdit', });
lyr_Klasifikasi_Jawa_1.set('fieldLabels', {'NAME_2': 'inline label - always visible', 'Data QGI_3': 'inline label - always visible', 'Data QGI_4': 'inline label - always visible', 'Data QGI_5': 'inline label - always visible', 'Data QGI_8': 'inline label - always visible', 'Data QGI_9': 'inline label - always visible', 'ton/ha': 'inline label - always visible', 'produksi': 'inline label - always visible', 'luas sawah': 'inline label - always visible', 'suhu': 'inline label - always visible', 'kelembaban': 'inline label - always visible', });
lyr_Klasifikasi_Jawa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
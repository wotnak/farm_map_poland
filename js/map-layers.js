(function () {
  farmOS.map.behaviors.poland = {
    attach: function (instance) {
      
      instance.addLayer('wms', {
        title: 'PL Ortofotomapa',
        type: 'wms',
        url: 'https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution',
        params: {
          LAYERS: 'Raster',
        },
        visible: false,
        base: true,
        group: 'Base layers',
      })

      instance.addLayer('wms', {
        title: 'PL Działki katastralne',
        url: 'https://mapy.geoportal.gov.pl/wss/service/INSPIRE_CP/guest',
        params: {
          LAYERS: 'CP.CadastralParcel',
        },
        visible: false,
        base: false,
      })

    },
  };
}());

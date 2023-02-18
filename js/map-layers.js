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
        title: 'PL Działki i budynki',
        url: 'https://integracja.gugik.gov.pl/cgi-bin/KrajowaIntegracjaEwidencjiGruntow',
        params: {
          LAYERS: 'dzialki,numery_dzialek,budynki',
        },
        visible: false,
        base: false,
      })

    },
  };
}());

Page({
  data: {
    array: [{
      mode: 'scaleToFill',
      text: 'scaleToFill: scale without aspect ratio and fit image completely'
    }, {
      mode: 'aspectFit',
      text: 'aspectFit: scale with aspect ratio and show fully long side'
    }, {
      mode: 'aspectFill',
      text: 'aspectFill: scale with aspect ratio and ensure short side to be displayed fully.'
    }, {
      mode: 'top',
      text: 'top: Not scaling image, showing only top area'
    }, {
      mode: 'bottom',
      text: 'bottom: Not scaling image, showing only bottom area'
    }, {
      mode: 'center',
      text: 'center: Not scaling image, showing only central area'
    }, {
      mode: 'left',
      text: 'left: Not scaling image, showing only left area'
    }, {
      mode: 'right',
      text: 'right: Not scaling image, showing only right area'
    }, {
      mode: 'top left',
      text: 'top left: Not scaling image, showing only top left area'
    }, {
      mode: 'top right',
      text: 'top right: Not scaling image, showing only top right area'
    }, {
      mode: 'bottom left',
      text: 'bottom left: Not scaling image, showing only bottom left area'
    }, {
      mode: 'bottom right',
      text: 'bottom right: Not scaling image, showing only bottom right area'
    }],
    src: 'https://halberdbastion.com/sites/default/files/2017-11/Vodacom-Group-SA-logo.jpg'
  },
  onLoad() { },
});

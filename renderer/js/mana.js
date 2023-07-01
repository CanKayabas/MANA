var editor = grapesjs.init({
    container: '#gjs2',
    height: '100%',
    fromElement: true,
    storageManager: { type: 0 },
    plugins: ['gjs-blocks-basic'],
    layerManager: {
        appendTo: '#layers-container'
    },
    blockManager: {
        appendTo: '#blocks'
    },
    styleManager: {
        appendTo: '#style-manager-container',
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
        }, {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding']
        }, {
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']
        }, {
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
        }, {
            name: 'Extra',
            open: false,
            buildProps: ['opacity', 'transition', 'perspective', 'transform'],
            properties: [{
                type: 'slider',
                property: 'opacity',
                defaults: 1,
                step: 0.01,
                max: 1,
                min: 0,
            }]
        }],
    },
    selectorManager: {
        appendTo: '#selectors-container',
    },
    traitManager: {
        appendTo: '#traits-container',
    },
    panels: {
        defaults: [{
            id: 'layers',
            el: '#layers',
            resizable: {
                tc: 0,
                cr: 1,
                bc: 0,
                keyWidth: 'flex-basis',
            },
        }, {
            id: 'styles',
            el: '#style-manager',
            resizable: {
                tc: 0,
                cr: 0,
                cl: 1,
                bc: 0,
                keyWidth: 'flex-basis',
            },
        }]
    }
});

const bm = editor.BlockManager;
editor.on('load', () => {
    editor.BlockManager.render([
        bm.get('column1').set('category', ''),
        bm.get('column2').set('category', ''),
        bm.get('column3').set('category', ''),
        bm.get('text').set('category', ''),
        bm.get('image').set('category', '')
    ])
});

editor.runCommand('sw-visibility');
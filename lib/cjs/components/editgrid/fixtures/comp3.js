"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    'label': 'Edit Grid',
    'tableView': false,
    'key': 'editGrid',
    'type': 'editgrid',
    'input': true,
    'components': [{
            'label': 'Container',
            'tableView': false,
            'key': 'container',
            'type': 'container',
            'input': true,
            'components': [{
                    'label': 'Number',
                    'mask': false,
                    'spellcheck': true,
                    'tableView': true,
                    'delimiter': false,
                    'requireDecimal': false,
                    'inputFormat': 'plain',
                    'key': 'number',
                    'type': 'number',
                    'input': true
                }]
        }]
};

declare const _default: ({
    key: string;
    data: {
        values: {
            label: string;
            value: string;
        }[];
        url?: undefined;
    };
    type?: undefined;
    weight?: undefined;
    input?: undefined;
    label?: undefined;
    tooltip?: undefined;
    conditional?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    weight: number;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    as: string;
    editor: string;
    weight: number;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    defaultValue: {};
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    as: string;
    editor: string;
    weight: number;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    description: string;
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    defaultValue?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    tooltip: string;
    weight: number;
    conditional: {
        json: {
            and: ({
                in: (string[] | {
                    var: string;
                })[];
                '!=='?: undefined;
            } | {
                '!==': (string | {
                    var: string;
                })[];
                in?: undefined;
            })[];
            '==='?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    tooltip: string;
    weight: number;
    reorder: boolean;
    defaultValue: {
        label: string;
        value: string;
    }[];
    components: ({
        label: string;
        key: string;
        input: boolean;
        type: string;
        allowCalculateOverride?: undefined;
    } | {
        label: string;
        key: string;
        input: boolean;
        type: string;
        allowCalculateOverride: boolean;
        calculateValue: string;
    })[];
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    description?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    dataSrc: string;
    data: {
        url: string;
        values?: undefined;
    };
    authenticate: boolean;
    template: string;
    valueProperty: string;
    clearOnHide: boolean;
    label: string;
    key: string;
    lazyLoad: boolean;
    weight: number;
    tooltip: string;
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    weight: number;
    description: string;
    tooltip: string;
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    skipMerge: boolean;
    clearOnHide: boolean;
    tooltip: string;
    weight: number;
    refreshOn: string;
    template: string;
    valueProperty: string;
    dataSrc: string;
    lazyLoad: boolean;
    onSetItems(component: any, form: any): {
        label: string;
        key: string;
    }[];
    onChange(context: any): void;
    data: {
        url: string;
        values?: undefined;
    };
    conditional: {
        json: {
            and: ({
                '===': (string | {
                    var: string;
                })[];
                '!=='?: undefined;
                var?: undefined;
            } | {
                '!==': (boolean | {
                    var: string;
                })[];
                '==='?: undefined;
                var?: undefined;
            } | {
                var: string;
                '==='?: undefined;
                '!=='?: undefined;
            })[];
            '==='?: undefined;
            in?: undefined;
        };
    };
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    authenticate?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    label: string;
    key: string;
    clearOnHide: boolean;
    tooltip: string;
    weight: number;
    template: string;
    dataSrc: string;
    data: {
        values: {
            label: string;
            value: string;
        }[];
        url?: undefined;
    };
    conditional?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    authenticate?: undefined;
    valueProperty?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    weight: number;
    label: string;
    placeholder: string;
    tooltip: string;
    data?: undefined;
    conditional?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    description: string;
    tooltip: string;
    conditional: {
        json: {
            in: (string[] | {
                var: string;
            })[];
            '==='?: undefined;
            and?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    description: string;
    tooltip: string;
    validate: {
        min: number;
        customMessage: string;
        json: string;
        max: number;
    };
    delimiter: boolean;
    requireDecimal: boolean;
    encrypted: boolean;
    defaultValue: number;
    conditional: {
        json: {
            in: (string[] | {
                var: string;
            })[];
            '==='?: undefined;
            and?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    weight: number;
    label: string;
    tooltip: string;
    defaultValue: number;
    conditional: {
        json: {
            and: ({
                '===': (string | {
                    var: string;
                })[];
                '!='?: undefined;
            } | {
                '!=': (string | {
                    var: string;
                })[];
                '==='?: undefined;
            })[];
            '==='?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    description: string;
    tooltip: string;
    clearOnHide: boolean;
    conditional: {
        json: {
            and: ({
                in: (string[] | {
                    var: string;
                })[];
                '!=='?: undefined;
            } | {
                '!==': (boolean | {
                    var: string;
                })[];
                in?: undefined;
            })[];
            '==='?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    editor: string;
    rows: number;
    weight: number;
    placeholder: string;
    tooltip: string;
    conditional: {
        json: {
            '===': (string | {
                var: string;
            })[];
            and?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    key: string;
    label: string;
    weight: number;
    tooltip: string;
    dataSrc: string;
    valueProperty: string;
    data: {
        custom(context: any): {
            label: string;
            value: string;
        }[];
        values?: undefined;
        url?: undefined;
    };
    conditional: {
        json: {
            in: (string[] | {
                var: string;
            })[];
            '==='?: undefined;
            and?: undefined;
        };
    };
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    authenticate?: undefined;
    template?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    weight: number;
    key: string;
    label: string;
    defaultValue: boolean;
    tooltip: string;
    conditional: {
        json: {
            in: (string[] | {
                var: string;
            })[];
            '==='?: undefined;
            and?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    weight: number;
    key: string;
    label: string;
    defaultValue: boolean;
    tooltip: string;
    data?: undefined;
    conditional?: undefined;
    as?: undefined;
    editor?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    weight: number;
    key: string;
    label: string;
    defaultValue: boolean;
    tooltip: string;
    conditional: {
        json: {
            and: ({
                in: (string[] | {
                    var: string;
                })[];
                '==='?: undefined;
            } | {
                '===': (boolean | {
                    var: string;
                })[];
                in?: undefined;
            })[];
            '==='?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    label: string;
    mask: boolean;
    tableView: boolean;
    alwaysEnabled: boolean;
    type: string;
    input: boolean;
    key: string;
    validate: {
        min: number;
        customMessage: string;
        json: string;
        max: number;
    };
    delimiter: boolean;
    requireDecimal: boolean;
    encrypted: boolean;
    defaultValue: number;
    weight: number;
    tooltip: string;
    data?: undefined;
    conditional?: undefined;
    as?: undefined;
    editor?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    rows?: undefined;
} | {
    type: string;
    label: string;
    key: string;
    tooltip: string;
    placeholder: string;
    weight: number;
    input: boolean;
    conditional: {
        json: {
            and: ({
                '===': (string | {
                    var: string;
                })[];
                '!!'?: undefined;
            } | {
                '!!': {
                    var: string;
                };
                '==='?: undefined;
            })[];
            '==='?: undefined;
            in?: undefined;
        };
    };
    data?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    input: boolean;
    weight: number;
    key: string;
    label: string;
    tooltip: string;
    data?: undefined;
    conditional?: undefined;
    as?: undefined;
    editor?: undefined;
    defaultValue?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
} | {
    type: string;
    as: string;
    editor: string;
    weight: number;
    input: boolean;
    key: string;
    label: string;
    tooltip: string;
    defaultValue: {};
    data?: undefined;
    conditional?: undefined;
    description?: undefined;
    reorder?: undefined;
    components?: undefined;
    dataSrc?: undefined;
    authenticate?: undefined;
    template?: undefined;
    valueProperty?: undefined;
    clearOnHide?: undefined;
    lazyLoad?: undefined;
    skipMerge?: undefined;
    refreshOn?: undefined;
    placeholder?: undefined;
    validate?: undefined;
    delimiter?: undefined;
    requireDecimal?: undefined;
    encrypted?: undefined;
    rows?: undefined;
    mask?: undefined;
    tableView?: undefined;
    alwaysEnabled?: undefined;
})[];
export default _default;

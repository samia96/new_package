export default CDN;
declare class CDN {
    constructor(baseUrl: any);
    baseUrl: any;
    overrides: {};
    libs: {
        js: string;
        ace: string;
        bootstrap: string;
        ckeditor: string;
        flatpickr: string;
        'flatpickr-formio': string;
        'font-awesome': string;
        grid: string;
        'moment-timezone': string;
        quill: string;
        'shortcut-buttons-flatpickr': string;
        uswds: string;
        core: string;
    };
    getVersion(lib: any): any;
    setVersion(lib: any, version: any): void;
    setBaseUrl(url: any): void;
    setOverrideUrl(lib: any, url: any): void;
    removeOverride(lib: any): void;
    removeOverrides(): void;
    buildUrl(cdnUrl: any, lib: any, version: any): string;
    updateUrls(): void;
}

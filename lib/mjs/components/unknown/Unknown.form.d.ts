export default function _default(): {
    components: {
        type: string;
        key: string;
        components: {
            label: string;
            key: string;
            weight: number;
            components: ({
                key: string;
                label: string;
                input: boolean;
                tag: string;
                content: string;
                type: string;
                weight: number;
                as?: undefined;
                editor?: undefined;
                tooltip?: undefined;
            } | {
                type: string;
                as: string;
                editor: string;
                weight: number;
                input: boolean;
                key: string;
                label: string;
                tooltip: string;
                tag?: undefined;
                content?: undefined;
            })[];
        }[];
    }[];
};

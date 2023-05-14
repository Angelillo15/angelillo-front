export default interface Tag {
    name: string;
    displayName: string;
    permission: string;
    materialIcon: string;
}

export interface prev extends Tag {
    prev: string;
}
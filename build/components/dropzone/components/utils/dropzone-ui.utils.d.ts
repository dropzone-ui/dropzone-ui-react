/// <reference types="react" />
export declare function createRipple<T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>(event: React.MouseEvent<T, MouseEvent>, color: string): void;
export declare function createRippleFromElement<T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement>(element: HTMLDivElement | null, event: React.MouseEvent<T, MouseEvent>, color: string): void;

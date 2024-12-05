export interface PostElement<T = any> {
    component: string;
    props?: T;
    children?: PostElement[];
}
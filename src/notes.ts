export interface Note {
    id: number;
    title:string;
    text: string;
}
export const NOTES : Note[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a mi id quam imperdiet suscipit. Curabitur tincidunt massa vitae libero interdum, eget volutpat arcu porta. Cras pretium felis at vulputate molestie. Ut sodales maximus augue non finibus. Vivamus nisi nunc, dapibus non mi ac, rhoncus pellentesque orci. Integer eu consectetur tortor. Nullam sed tellus sit amet libero fringilla convallis a id ante. Donec sed dapibus sapien. Nullam mattis fringilla turpis in dictum. ',
    },
    {
        id:2,
        title:'Shakespeare',
        text:'To be or not to be',
    }
]
import type { Plugin } from 'vue';
import component from "./masonry-wall";
export type MasonryWallComponent = typeof component;
type MasonryWallPlugin = MasonryWallComponent & Plugin;
declare const MasonryWall: MasonryWallPlugin;
declare module 'vue' {
    interface GlobalComponents {
        MasonryWall: MasonryWallComponent;
    }
}
export default MasonryWall;

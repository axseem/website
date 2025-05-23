export interface ImageModule {
    default: { src: string };
}

const delimiter = "-"

export async function getImages(imageModules: Record<string, () => Promise<ImageModule>>) {
    const imageFiles = await Promise.all(
        Object.values(imageModules).map(async (mod) => (await mod()).default.src),
    );
    imageFiles.map((file) => {
        file = file.split("/").pop() || "" ;
    });
    
    return imageFiles
}

export async function getGroupedImages() {
    const imageFiles = await getImages(import.meta.glob<ImageModule>("../pages/gallery/*.jpg"))

    const groupedImages: Record<string, string[]> = {};
    imageFiles.forEach((file) => {
        if (file) {
            const prefix = file.split("/").pop()?.split(delimiter)[0] || "";
            groupedImages[prefix] = [...(groupedImages[prefix] || []), file];
        }
    });

    return Object.entries(groupedImages).sort((a, b) => {
        const numA = parseInt(a[0].split(delimiter)[0], 10);
        const numB = parseInt(b[0].split(delimiter)[0], 10);
        
        return numB - numA;
    });
}

export async function getImagesByPrefix(imageModules: Record<string, ImageModule>, prefix: string) {
    return Object.entries(imageModules)
        .filter(([path]) => path.includes(`/${prefix}${delimiter}`))
        .map(([_, module]) => module.default.src);
}
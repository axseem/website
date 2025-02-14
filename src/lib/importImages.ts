interface ImageModule {
    default: { src: string };
}

const delimiter = "-"

export async function getGroupedImages() {
    const imageModules = import.meta.glob<ImageModule>("../pages/gallery/*.jpg");
    const imageFiles = await Promise.all(
        Object.values(imageModules).map(async (mod) => (await mod()).default.src),
    );

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

export async function getImagesByPrefix(prefix: string) {
    const imageModules = import.meta.glob<ImageModule>("../pages/gallery/*.jpg", { eager: true });
    return Object.entries(imageModules)
        .filter(([path]) => path.includes(`/${prefix}${delimiter}`))
        .map(([_, module]) => module.default.src);
}
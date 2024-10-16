export const useBuildInfo = () => {
    return {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        mode: process.env.NODE_ENV, timestamp: BUILD_TIMESTAMP
    }
}
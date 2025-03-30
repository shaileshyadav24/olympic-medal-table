import content from "@/content/content";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-blue-600">{content.LOADING_MESSAGE}</h1>
            <p className="mt-4 text-lg">{content.LOADING_DESCRIPTION}</p>
        </div >
    )
}
import content from "@/content/content"
export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600">{content.ERROR_MESSAGE}</h1>
            <p className="mt-4 text-lg">{content.ERROR_DESCRIPTION}</p>
        </div>
    )
}
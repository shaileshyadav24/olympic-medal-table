import content from "@/content/content"
export default function NoMedals() {    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-600">{content.NO_MEDALS}</h1>
            <p className="mt-4 text-lg">{content.NO_MEDALS_DESCRIPTION}</p>
        </div>
    )
}
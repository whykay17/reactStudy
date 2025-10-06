import { useGigs } from "../../hooks/useGigs";
import { Link } from "react-router-dom";

function GigListPage() {

    const { data: gigs, isLoading, isError, error } = useGigs();

    if (isLoading) {
        return (
            <div className="text-center p-10 text-lg text-blue-500">
                Loading available services...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center p-10 text-red-600">
                Error loading gigs: {(error as Error).message}
            </div>
        );
    }

    return<div className="p8">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800">
            Available Gigs ({gigs?.length || 0})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gigs &&
                gigs.map((gig) => (
                    <div
                        key={gig.id}
                        className="bg-white p-6 shadow-xl rounded-lg border border-gray-100 transition hover:shadow-2xl"
                    >
                        <h2 className="text-xl font-semibold text-blue-700">{gig.title}</h2>
                        <p className="text-3xl font-bold text-green-600 my-2">
                            ${gig.price}
                        </p>
                        <Link
                            to={`/gigs/${gig.id}`}
                            className="mt-3 inline-block text-sm text-blue-500 hover:text-blue-700 hover:underline font-medium"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
        </div>
    </div>
}

export default GigListPage;

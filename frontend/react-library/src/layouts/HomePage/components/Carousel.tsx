import { useEffect, useState } from "react";
import { ReturnBook } from "./ReturnBook";
import BookModel from "../../../models/BookModel";

export const Carousel = () => {

    let [books, setBooks] = useState<BookModel[]>([]);
    let [isLoading, setIsLoading] = useState(true);
    let [httpError, setHtttpError] = useState(null);

    useEffect(() => {

        const fetchBooks = async () => {
            const baseUrl = "http//localhost:3000/api/books";
            const url = `${baseUrl}/gkgjg`;
            const response = await fetch(url);
            const responseJson = response.json();
            const bookData = responseJson._embededM;

        };

        fetchBooks().catch((error: any) => {
            setIsLoading(false);
            setHtttpError(error.message)
        })
    }, []);

    return (
        <div className="container mt-5" style={{ height: 550 }}>
            <div className="homepage-carousel-title">
                <h3>Find your next "I stayed up too late reading" book.</h3>
            </div>
            <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5
                d-none d-lg-block" data-bs-interval="false">

                {/* Desktop */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                            <ReturnBook />
                            <ReturnBook />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                            <ReturnBook />
                            <ReturnBook />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row d-flex justify-content-center align-items-center">
                            <ReturnBook />
                            <ReturnBook />
                            <ReturnBook />
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Mobile */}
            <div className="d-lg-none mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <ReturnBook />
                </div>
            </div>
            <div className="homepage-carousel-title mt-3">
                <a href="#" className="btn btn-outline-secondary btn-lg">View More</a>
            </div>
        </div>
    );
}
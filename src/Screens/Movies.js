import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'
import Movie from '../Components/Movie'
import { CgSpinner } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { TbPlayerTrackNext, TbPlayerTrackPrev } from 'react-icons/tb';
import Loader from '../Components/Notifications/Loader'
import { RiMovie2Line } from 'react-icons/ri'
import { getAllMoviesAction } from '../Redux/Actions/MoviesActions'

function MoviesPage() {
    const dispatch = useDispatch();
    const sameClass = "'text-white py-2 px-4 rounded font-semibold border-2 border-subMain hover:bg-subMain";
    // get all movies
    const { isLoading, isError, movies, pages, page } = useSelector(
        (state) => state.getAllMovies
    );
    // get all categories
    const { categories } = useSelector(
        (state) => state.categoryGetAll
    );

    // useEffect
    useEffect(() => {
        // errors
        if (isError) {
            toast.error(isError);
        }
    }, [dispatch, isError]);
    
    // pagination next and prev pages
    const nextPage = () => {
        dispatch(
            getAllMoviesAction({
                pageNumber: page + 1
            })
        );
    };

    const prevPage = () => {
        dispatch(
            getAllMoviesAction({
                pageNumber: page - 1
            })
        );
    };

    return (
        <Layout>
            <div className='min-height-screen container mx-auto px-2 my-6'>
                <Filters categories={categories} />
                <p className='text-lg font-medium my-6'>
                    Total{" "} 
                    <span className='font-bold text-subMain'>
                        {movies ? movies?.length : 0}
                    </span>{' '} 
                    items Found
                </p>
                {
                    isLoading ? (
                        <div className="w-full gp-6 flex-colo min-h-screen">
                            <Loader />
                        </div>
                    ) : movies?.length > 0 ? (
                        <>
                            <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                                {
                                    movies.map((movie, index) => (
                                        <Movie key={index} movie={movie} />
                                    ))
                                }
                            </div>
                            {/* Loading More */}
                            <div className='w-full flex-rows gap-6 md:my-20 my-10'>
                                <button onClick={prevPage} disabled={page === 1} className={sameClass}>
                                    <TbPlayerTrackPrev className="text-xl" />
                                </button>
                                <button onClick={nextPage} disabled={page === pages} className={sameClass}>
                                    <TbPlayerTrackNext className="text-xl" />
                                </button>
                            </div>
                        </>
                    ) :
                    (
                        <div className="w-full gp-6 flex-colo min-h-screen">
                            <div className='w-34 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo'>
                                <RiMovie2Line />
                            </div>
                            <p className='text-border text-sm'>
                                It seem's like we don't have any movie
                            </p>
                        </div>
                    )
                }              
            </div>
        </Layout>
    )
}

export default MoviesPage
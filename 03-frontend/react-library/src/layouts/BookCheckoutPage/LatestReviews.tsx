import { Link } from "react-router-dom";
import ReviewModel from "../../models/ReviewModel"
import { Review } from "../Utils/Review";

export const LatestReviews: React.FC<{
    reviews: ReviewModel[], bookId: number | undefined, mobile: boolean
}> = (props) => {
    return(
        <div className={props.mobile ? 'mt-3' : 'row mt-5'}>
            <div className={props.mobile ? '' : 'col-sm-2 col-md-2'}>
                <h2>Latest Reviews:</h2>
            </div>
            <div className="col-sm-10 col-md-10">
                {props.reviews.length > 0 ?
                    <>
                        {props.reviews.slice(0,3).map(eachReview => (
                            <Review review = {eachReview} key={eachReview.id}></Review>
                        ))}

                        <div className="mt-3">
                            <Link type="button" className="btn btn-md text-white main-color mb-2" to="#">
                                reach all reviews 
                            </Link>
                        </div>
                    </>
                    :
                    <div className="mt-3">
                        <p>
                            Currently there are no reviews for this Product
                        </p>
                    </div>
                }
            </div>

        </div>
    );
}
export default LatestReviews;
import { Loans } from "./components/Loans";

 export const ShelfPage = () => {
    return (
        <div className="container">
            <div className="mt-5">
                <nav>
                    <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                    <button className="nav-link active" id='nav-cart-tab' data-bs-toggle='tab'
                            data-bs-target='#nav-cart' type='button' role='tab' aria-controls='nav-cart'
                            aria-selected='true'>
                                Cart

                        </button>
                        <button className="nav-link" id='nav-history-tab' data-bs-toggle='tab'
                        data-bs-target='#nav-history' type='button' role='tab' aria-controls='nav-history'
                        aria-selected='false'>
                            History

                        </button>
                    </div>

                </nav>
                <div className="tab-content" id='nav-tabContent'>
                    <div className="tab-pane fade show active" id='nav-cart' role='tab-panel'
                        aria-labelledby="nav-cart-tab">
                            <Loans/>
                    </div>
                    <div className="tab-pane fade" id='nav-history' role='tab-panel'
                        aria-labelledby="nav-history-tab">
                            <p>Checkout History</p>
                    </div>

                </div>
            </div>
        </div>
    );
 }
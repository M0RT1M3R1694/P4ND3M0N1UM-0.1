import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const Favorites_sAdmiButtons = () => {
    const { store, actions } = useContext(Context)
    return (
        <div>
            <div className="container-favorites m-auto w-75 favorites_sButtons my-3">
                <div className="titleFavoritessTable mb-3 mt-5 text-start">
                    <p>Favorites Dashboard</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-sm-7 my-3">
                        <div className="card favorites_sCard">
                            <div className="card-body pb-0 pt-0">
                                <div className="input-search d-flex align-items-center">
                                    <input type="text" id="inputFavoritesSearch" className="form-control formControlFavoritesSearchButton"
                                        autoComplete="off" aria-describedby="passwordHelpInline" placeholder="Search by Data"
                                        onKeyUp={(e) => {
                                            actions.search_favorites(e.target.value)
                                        }} />                          
                                        <i className="fa-solid fa-magnifying-glass me-2"></i>                     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 my-2">
                        <div className="card booksCard d-flex justify-content-center align-items-center">
                            <div className="card-body pb-0 pt-0">
                                <button className="btn btn-login my-1 fw-bold fs-5" onClick={() => { actions.handle_show_modal() }}>
                                <i class="fa-solid fa-plug-circle-plus me-2"></i>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react'

export default function FormBooking() {
    return (
        <div className="booking-form" action="#" method="post" id="check-form">
            <form>
                <div className="row no-margin">
                    <div className="col-md-3">
                        <div className="form-group">
                            <span className="form-label">Destination</span>
                            <input className="form-control" name="destination" id="destination" type="text" placeholder="Country, ZIP, city..." />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row no-margin">
                            <div className="col-md-5">
                                <div className="form-group">
                                    <span className="form-label">Transport</span>
                                    <select className="form-control" required name="transport" id="transport">
                                        <option value="0">Train</option>
                                        <option value="1">Bus</option>
                                        <option value="2">Airplane</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <span className="form-label">Date</span>
                                    <input className="form-control" name="departure-date" id="departure-date" type="date" required />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <span className="form-label">Guests</span>
                                    <select className="form-control" name="guest-number" id="guest-number">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <span className="select-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-btn">
                            <button className="submit-btn" id="btn-check">Check availability</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>

    )
}

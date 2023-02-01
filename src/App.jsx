import { useState } from 'react'
import './components/style/style.css'

function App() {

	return (
		<>
			<div id="booking" className="section">
				<div className="section-center">
					<div className="container">
						<div className="row">
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

								{/* SEZIONE MESSAGGIO ERRORE DESTINAZIONE */}

								{/*<div className="row no-margin">
							<div className="col-md-12" id="info_nodest">
								<h3>Destination not avaible</h3>
							</div>
						</div>
		</div>
  				
						{/* <!-- FORM DI RECAP BOOKING --> */}

								{/* <div className="booking-form">
							<div id="data_booking" className="row no-margin">
								<div className="col-md">
									<div className="row no-margin">
										<div className="col-md-5">
											<div className="form-group">
												<span id="data_destination" className="form-label">Destination</span>
											</div>
										</div>
										<div className="col-md-5">
											<div className="form-group">
												<span className="form-label">From</span>
												<select className="form-control" id="from_city" name="from_city">
													
												</select>
												<span className="select-arrow"></span>
											</div>
										</div>
										
									</div>
								</div>
								<div className="col-md">
									<div className="row no-margin">
										<div className="col-md-5">
											<div className="form-group">
												<span id="data_type" className="form-label">Type</span>
											</div>
										</div>
										<div className="col-md-5">
											<div className="form-group">
												<span id="data_date" className="form-label">Date</span>
											</div>
										</div>
										<div className="col-md-2">
											<div className="form-group">
												<span id="data_guest" className="form-label">Guests </span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md">
									<div className="form-btn">
										<button id="send_btn" className="submit-btn">Book Now </button>
									</div>
								</div>
		                    </div>
				        </div> */}


							</div>
						</div>
					</div>
				</div>

				{/* <form id="form_invio" action="booking.php" method="post"></form>  */}
			</div>
		</>
	)
}

export default App

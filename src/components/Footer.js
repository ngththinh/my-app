import React from 'react'

function Footer() {
    return (
        <div className="form-footer all">
            <h1 className="form-title">Book Your Table</h1>
            <form className="needs-validation" noValidate>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <input type="text" className="form-control" id="validationTooltip02" placeholder="Your Name *" required />
                        <div className="invalid-tooltip">
                            Please provide a Name.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <input type="email" className="form-control" id="validationTooltip05" placeholder="Your Email *" required />
                        <div className="invalid-tooltip">
                            Please provide a valid mail.
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <select className="custom-select" id="validationTooltip04" required>
                            <option selected disabled value="">Select a Service</option>
                            <option>...</option>
                        </select>
                        <div className="invalid-tooltip">
                            Please select a Service.
                        </div>
                    </div>
                    <div className="col-md-12 mb-3 mt-3 text-area">
                        <textarea type="text" className="form-control form-control-lg text-footer" id="validationTooltip03" placeholder="Please write a comment" required />
                    </div>
                </div>
                <button className="form-btn btn-warning" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default Footer;
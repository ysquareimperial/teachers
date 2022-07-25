import React from 'react'

function TrustedBy() {
  return (
    <div>{/* start trusted By */}
    <section className="section-featured">
        <div className="container center">
            <h2 className="heading">
                <span>TRUSTED BY</span>
            </h2>
            <div className="logos">
                <img src={require("../images/logo/logo1.jpg")} alt="Air Force School logo" />
                <img src={require("../images/logo/logo2.jpg")} alt="nigeria law school logo" />
                <img src={require("../images/logo/logo3.png")} alt="science and technical logo" />
                <img src={require("../images/logo/logo4.png")} alt="science and technical logo" />
                <img src={require("../images/logo/logo5.png")} alt="science and technical logo" />
                <img src={require("../images/logo/logo6.png")} alt="science and technical logo" />
                <img src={require("../images/logo/logo7.jpg")} alt="science and technical logo" />
                <img src={require("../images/logo/logo8.png")} alt="science and technical logo" />
                <img src={require("../images/logo/logo9.jpg")} alt="science and technical logo" />
                <img src={require("../images/logo/logo10.png")} alt="stiched to fit logo" />
            </div>
        </div>
    </section>
    {/* end trusted jobs */}
</div>
  )
}

export default TrustedBy
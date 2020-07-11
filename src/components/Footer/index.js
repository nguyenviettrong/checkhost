import React, { Fragment } from 'react';

function Footer(props) {
    return (
        <Fragment>
            <footer>
			    <div className="container py-3">
			        <ul className="d-block d-sm-flex align-items-center justify-content-center text-center m-0 p-0">
			            <a href="/ip-info" className="d-inline-block mr-2 mb-1" title="IP location">IP info</a>
			            <a href="/check-ping" className="d-inline-block mr-2 mb-1" title="Ping server online">Ping</a>
			            <a href="/check-http" className="d-inline-block mr-2 mb-1" title="HTTP monitoring">HTTP</a>
			            <a href="/check-tcp" className="d-inline-block mr-2 mb-1" title="TCP connect, check port">TCP port</a>
			            <a href="/check-udp" className="d-inline-block mr-2 mb-1" title="UDP connect, check port">UDP port</a>
			            <a href="/check-dns" className="d-inline-block mr-2 mb-1" title="DNS monitoring">DNS</a>
			        </ul>
			        <ul className="d-block d-sm-flex align-items-center justify-content-center text-center m-0 p-0">
			            <a href="/news" className="d-inline-block mr-2 mb-1" title="News of website monitoring project">News</a>
			            <a href="/about/api" className="d-inline-block mr-2 mb-1" title="Check-Host API">API</a>
			            <a href="https://whitelabel.check-host.net/" className="d-inline-block mr-2 mb-1" title="Check-Host.net White Label Solution" target="_blank">White Label Solution</a>
			            <a href="/contacts" className="d-inline-block mr-2 mb-1" title="Contact us, feedbacks">Contacts</a>
			        </ul>
			        <div className="mt-1 text-center">Copyright Check-Host.net © 2010-2020</div>
			    </div>
			</footer>
        </Fragment>
    );
}

export default Footer